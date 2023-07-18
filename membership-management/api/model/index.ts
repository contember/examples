import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const eventOrganizerRole = acl.createRole('eventOrganizer', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const memberRole = acl.createRole('member', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdEventOrganizerVariable = acl.createPredefinedVariable('personId', 'personID', eventOrganizerRole)

export const personIdMemberVariable = acl.createPredefinedVariable('personId', 'personID', memberRole)

export const Duration = def.createEnum('monthly', 'yearly')

export const PaymentMethod = def.createEnum('creditCard', 'bankTransfer', 'cash')

export const PaymentPurpose = def.createEnum('membershipFee', 'eventRegistration')

export const CommunicationType = def.createEnum('call', 'email', 'meeting')

@def.Unique('personId', 'email')

@acl.allow(eventOrganizerRole, {
	read: true,
})
@acl.allow(memberRole, {
	when: { personId: personIdMemberVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	address = def.stringColumn()
	membershipPlan = def.manyHasOne(MembershipPlan, 'members')
	attendedEvents = def.manyHasMany(Event, 'attendingMembers')
	paymentHistory = def.oneHasMany(Payment, 'member')
	communicationLogs = def.oneHasMany(CommunicationLog, 'member')
}

export class MembershipPlan {
	name = def.stringColumn()
	description = def.stringColumn()
	price = def.doubleColumn()
	duration = def.enumColumn(Duration).notNull()
	benefits = def.stringColumn()
	members = def.oneHasMany(User, 'membershipPlan')
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
	update: true,
})
export class Event {
	title = def.stringColumn()
	description = def.stringColumn()
	date = def.dateColumn()
	time = def.dateTimeColumn()
	location = def.stringColumn()
	attendingMembers = def.manyHasManyInverse(User, 'attendedEvents')
	registrationFee = def.doubleColumn()
}


@acl.allow(memberRole, {
	when: { member: { personId: personIdMemberVariable } },
	read: true,
	create: true,
	update: true,
})
export class Payment {
	member = def.manyHasOne(User, 'paymentHistory')
	amount = def.doubleColumn()
	date = def.dateColumn()
	paymentMethod = def.enumColumn(PaymentMethod).notNull()
	purpose = def.enumColumn(PaymentPurpose).notNull()
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
	update: true,
})
export class CommunicationLog {
	type = def.enumColumn(CommunicationType).notNull()
	date = def.dateColumn()
	time = def.dateTimeColumn()
	member = def.manyHasOne(User, 'communicationLogs')
	notes = def.stringColumn()
}
