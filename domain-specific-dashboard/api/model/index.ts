import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const salesManagerRole = acl.createRole('salesManager', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const salesRepresentativeRole = acl.createRole('salesRepresentative', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdSalesManagerVariable = acl.createPredefinedVariable('personId', 'personID', salesManagerRole)

export const personIdSalesRepresentativeVariable = acl.createPredefinedVariable('personId', 'personID', salesRepresentativeRole)

export const DealStatus = def.createEnum('open', 'won', 'lost')

export const TaskType = def.createEnum('call', 'meeting', 'followUp')

export const TaskStatus = def.createEnum('pending', 'completed')

@def.Unique('personId', 'email')

@acl.allow(salesManagerRole, {
	read: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { personId: personIdSalesRepresentativeVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	phoneNumber = def.stringColumn()
	leads = def.oneHasMany(Lead, 'assignedTo')
	tasks = def.oneHasMany(Task, 'assignedTo')
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { assignedTo: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	create: true,
	update: true,
})
export class Lead {
	name = def.stringColumn()
	contactInfo = def.stringColumn()
	source = def.stringColumn()
	assignedTo = def.manyHasOne(User, 'leads')
	deals = def.oneHasMany(Deal, 'lead')
	tasks = def.oneHasMany(Task, 'lead')
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { lead: { assignedTo: { personId: personIdSalesRepresentativeVariable } } },
	read: true,
	create: true,
	update: true,
})
export class Deal {
	value = def.doubleColumn()
	status = def.enumColumn(DealStatus).notNull()
	expectedCloseDate = def.dateTimeColumn()
	lead = def.manyHasOne(Lead, 'deals')
	tasks = def.oneHasMany(Task, 'deal')
}


@acl.allow(salesManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(salesRepresentativeRole, {
	when: { assignedTo: { personId: personIdSalesRepresentativeVariable } },
	read: true,
	create: true,
	update: true,
})
export class Task {
	taskType = def.enumColumn(TaskType).notNull()
	dueDate = def.dateTimeColumn()
	status = def.enumColumn(TaskStatus).notNull()
	assignedTo = def.manyHasOne(User, 'tasks')
	lead = def.manyHasOne(Lead, 'tasks')
	deal = def.manyHasOne(Deal, 'tasks')
}
