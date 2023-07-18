import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const salesManagerRole = acl.createRole('salesManager', { stages: '*', s3: { ['**']: { upload: true, read: true } }, tenant: { invite: true, manage: { salesRepresentative: true } } })

export const salesRepresentativeRole = acl.createRole('salesRepresentative', { stages: '*', s3: { ['**']: { upload: true, read: true } }, tenant: { invite: true, manage: { salesRepresentative: true } } })

export const personIdSalesManagerVariable = acl.createPredefinedVariable('personId', 'personID', salesManagerRole)

export const personIdSalesRepresentativeVariable = acl.createPredefinedVariable('personId', 'personID', salesRepresentativeRole)

export const LeadStatus = def.createEnum('new', 'contacted', 'qualified')

export const DealStatus = def.createEnum('open', 'won', 'lost')

export const CommunicationType = def.createEnum('call', 'email', 'meeting')

export const TaskPriority = def.createEnum('low', 'medium', 'high')

export const TaskStatus = def.createEnum('pending', 'completed')

@def.Unique('personId', 'email')

@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { personId: personIdSalesRepresentativeVariable },
	read: true,
	create: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	leads = def.oneHasMany(Lead, 'salesRepresentative')
	customers = def.oneHasMany(Customer, 'salesRepresentative')
	deals = def.oneHasMany(Deal, 'salesRepresentative')
	communicationLogs = def.oneHasMany(CommunicationLog, 'salesRepresentative')
	tasks = def.oneHasMany(Task, 'salesRepresentative')
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { salesRepresentative: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	update: true,
})
export class Lead {
	name = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	source = def.stringColumn()
	salesRepresentative = def.manyHasOne(User, 'leads')
	status = def.enumColumn(LeadStatus).notNull()
	communicationLogs = def.oneHasMany(CommunicationLog, 'lead')
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { salesRepresentative: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	update: true,
})
export class Customer {
	name = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	company = def.stringColumn()
	salesRepresentative = def.manyHasOne(User, 'customers')
	deals = def.oneHasMany(Deal, 'customer')
	communicationLogs = def.oneHasMany(CommunicationLog, 'customer')
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { salesRepresentative: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	update: true,
})
export class Deal {
	title = def.stringColumn()
	description = def.stringColumn()
	value = def.doubleColumn()
	customer = def.manyHasOne(Customer, 'deals')
	salesRepresentative = def.manyHasOne(User, 'deals')
	status = def.enumColumn(DealStatus).notNull()
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { salesRepresentative: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	update: true,
})
export class CommunicationLog {
	type = def.enumColumn(CommunicationType).notNull()
	date = def.dateColumn()
	time = def.stringColumn()
	lead = def.manyHasOne(Lead, 'communicationLogs')
	customer = def.manyHasOne(Customer, 'communicationLogs')
	salesRepresentative = def.manyHasOne(User, 'communicationLogs')
	notes = def.stringColumn()
}


@acl.allow(salesRepresentativeRole, {
	when: { salesRepresentative: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	update: true,
})
export class Task {
	title = def.stringColumn()
	description = def.stringColumn()
	dueDate = def.dateColumn()
	priority = def.enumColumn(TaskPriority).notNull()
	salesRepresentative = def.manyHasOne(User, 'tasks')
	status = def.enumColumn(TaskStatus).notNull()
}
