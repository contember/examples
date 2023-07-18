import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const receptionistRole = acl.createRole('receptionist', { stages: '*', s3: { ['**']: { upload: true, read: true } }, tenant: { invite: true, manage: { customer: true } } })

export const customerRole = acl.createRole('customer', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdReceptionistVariable = acl.createPredefinedVariable('personId', 'personID', receptionistRole)

export const personIdCustomerVariable = acl.createPredefinedVariable('personId', 'personID', customerRole)

export const BookingStatus = def.createEnum('pending', 'confirmed', 'canceled')

export const RoomType = def.createEnum('single', 'double', 'suite')

export const PaymentStatus = def.createEnum('pending', 'paid', 'refunded')


@acl.allow(receptionistRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { customer: { personId: personIdCustomerVariable } },
	read: true,
	update: true,
})
export class Booking {
	customer = def.manyHasOne(Customer, 'bookings')
	room = def.manyHasOne(Room, 'bookings')
	checkInDate = def.dateColumn()
	checkOutDate = def.dateColumn()
	services = def.manyHasMany(Service, 'bookings')
	totalPrice = def.doubleColumn()
	status = def.enumColumn(BookingStatus).notNull()
	payments = def.oneHasMany(Payment, 'booking')
}

@def.Unique('personId', 'email')

@acl.allow(receptionistRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { personId: personIdCustomerVariable },
	read: true,
	update: true,
})
export class Customer {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	phoneNumber = def.stringColumn()
	address = def.stringColumn()
	bookings = def.oneHasMany(Booking, 'customer')
	payments = def.oneHasMany(Payment, 'customer')
}


@acl.allow(receptionistRole, {
	read: true,
	create: true,
	update: true,
})
export class Room {
	type = def.enumColumn(RoomType).notNull()
	description = def.stringColumn()
	capacity = def.intColumn()
	pricePerNight = def.doubleColumn()
	availability = def.boolColumn()
	bookings = def.oneHasMany(Booking, 'room')
}


@acl.allow(receptionistRole, {
	read: true,
	create: true,
	update: true,
})
export class Service {
	name = def.stringColumn()
	description = def.stringColumn()
	price = def.doubleColumn()
	bookings = def.manyHasManyInverse(Booking, 'services')
}


@acl.allow(receptionistRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { customer: { personId: personIdCustomerVariable } },
	read: true,
	create: true,
	update: true,
})
export class Payment {
	customer = def.manyHasOne(Customer, 'payments')
	booking = def.manyHasOne(Booking, 'payments')
	amount = def.doubleColumn()
	date = def.dateColumn()
	paymentMethod = def.stringColumn()
	status = def.enumColumn(PaymentStatus).notNull()
}
