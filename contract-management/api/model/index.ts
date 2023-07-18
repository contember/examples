import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const contractManagerRole = acl.createRole('contractManager', { stages: '*', s3: { ['**']: { upload: true, read: true } }, tenant: { invite: true, manage: { client: true } } })

export const clientRole = acl.createRole('client', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdContractManagerVariable = acl.createPredefinedVariable('personId', 'personID', contractManagerRole)

export const personIdClientVariable = acl.createPredefinedVariable('personId', 'personID', clientRole)

export const UserRole = def.createEnum('client', 'contractManager')

export const PaymentStatus = def.createEnum('pending', 'paid', 'overdue')

@def.Unique('personId', 'email')

@acl.allow(contractManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { personId: personIdClientVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	company = def.stringColumn()
	address = def.stringColumn()
	contracts = def.oneHasMany(Contract, 'client')
	payments = def.oneHasMany(Payment, 'client')
	roles = def.enumColumn(UserRole)
}


@acl.allow(contractManagerRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
export class Contract {
	title = def.stringColumn()
	description = def.stringColumn()
	startDate = def.dateTimeColumn()
	endDate = def.dateTimeColumn()
	client = def.manyHasOne(User, 'contracts')
	milestones = def.oneHasMany(Milestone, 'contract')
	totalValue = def.doubleColumn()
	documents = def.oneHasMany(Document, 'contract')
	payments = def.oneHasMany(Payment, 'contract')
}


@acl.allow(contractManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { contract: { client: { personId: personIdClientVariable } } },
	read: true,
	update: true,
})
export class Milestone {
	title = def.stringColumn()
	description = def.stringColumn()
	dueDate = def.dateTimeColumn()
	completed = def.boolColumn()
	contract = def.manyHasOne(Contract, 'milestones')
	payment = def.oneHasOne(Payment, 'milestone')
}


@acl.allow(contractManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { client: { personId: personIdClientVariable } },
	read: true,
	update: true,
})
export class Payment {
	client = def.manyHasOne(User, 'payments')
	contract = def.manyHasOne(Contract, 'payments')
	milestone = def.oneHasOneInverse(Milestone, 'payment')
	amount = def.doubleColumn()
	date = def.dateTimeColumn()
	paymentMethod = def.stringColumn()
	status = def.enumColumn(PaymentStatus)
}


@acl.allow(contractManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(clientRole, {
	when: { contract: { client: { personId: personIdClientVariable } } },
	read: true,
})
export class Document {
	title = def.stringColumn()
	description = def.stringColumn()
	file = def.manyHasOne(File, 'documentFile').setNullOnDelete()
	contract = def.manyHasOne(Contract, 'documents')
}


@acl.allow(contractManagerRole, {
	read: true,
	create: true,
})
@acl.allow(clientRole, {
	read: true,
})
export class File {
	url = def.stringColumn().notNull()
	size = def.intColumn()
	type = def.stringColumn().columnType('integer')
	name = def.stringColumn().columnType('integer')
	createdAt = def.dateTimeColumn().notNull().default('now')
	documentFile = def.oneHasMany(Document, 'file')
}
