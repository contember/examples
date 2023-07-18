import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const salesRepresentativeRole = acl.createRole('salesRepresentative', { stages: '*', s3: { ['**']: { upload: true, read: true } }, tenant: { invite: true, manage: { customer: true } } })

export const customerRole = acl.createRole('customer', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const publicRole = acl.createRole('public', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdSalesRepresentativeVariable = acl.createPredefinedVariable('personId', 'personID', salesRepresentativeRole)

export const personIdCustomerVariable = acl.createPredefinedVariable('personId', 'personID', customerRole)

export const personIdPublicVariable = acl.createPredefinedVariable('personId', 'personID', publicRole)

export const ShippingStatus = def.createEnum('pending', 'shipped', 'delivered')

export const PaymentMethod = def.createEnum('creditCard', 'bankTransfer', 'cash')

export const PaymentStatus = def.createEnum('pending', 'paid', 'refunded')

@def.Unique('personId', 'email')

@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { personId: personIdCustomerVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	address = def.stringColumn()
	orders = def.oneHasMany(Order, 'customer')
	payments = def.oneHasMany(Payment, 'customer')
}


@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	read: ['name', 'description', 'price', 'availableQuantity', 'image'],
})
@acl.allow(publicRole, {
	read: ['name', 'description', 'price', 'image'],
})
export class Product {
	name = def.stringColumn()
	description = def.stringColumn()
	price = def.doubleColumn()
	availableQuantity = def.intColumn()
	image = def.manyHasOne(Image, 'productImage').setNullOnDelete()
	orders = def.oneHasMany(OrderProduct, 'product')
}


@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	productImage = def.oneHasMany(Product, 'image')
}


@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { customer: { personId: personIdCustomerVariable } },
	read: true,
	update: true,
})
export class Order {
	orderDate = def.dateTimeColumn()
	shipping = def.oneHasOne(Shipping, 'order')
	payment = def.oneHasOneInverse(Payment, 'order')
	customer = def.manyHasOne(User, 'orders')
	products = def.oneHasMany(OrderProduct, 'order')
}


@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { order: { customer: { personId: personIdCustomerVariable } } },
	read: true,
	update: true,
})
export class OrderProduct {
	quantity = def.intColumn()
	order = def.manyHasOne(Order, 'products').notNull()
	product = def.manyHasOne(Product, 'orders').notNull()
}


@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { order: { customer: { personId: personIdCustomerVariable } } },
	read: true,
	update: true,
})
export class Shipping {
	trackingNumber = def.stringColumn()
	carrier = def.stringColumn()
	shippingDate = def.dateTimeColumn()
	estimatedDeliveryDate = def.dateTimeColumn()
	status = def.enumColumn(ShippingStatus).notNull()
	order = def.oneHasOneInverse(Order, 'shipping')
}


@acl.allow(salesRepresentativeRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(customerRole, {
	when: { customer: { personId: personIdCustomerVariable } },
	read: true,
	update: true,
})
export class Payment {
	customer = def.manyHasOne(User, 'payments').notNull()
	order = def.oneHasOne(Order, 'payment').notNull()
	amount = def.doubleColumn()
	date = def.dateTimeColumn()
	method = def.enumColumn(PaymentMethod).notNull()
	status = def.enumColumn(PaymentStatus).notNull()
}
