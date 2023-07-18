import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const managerRole = acl.createRole('manager', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const employeeRole = acl.createRole('employee', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdManagerVariable = acl.createPredefinedVariable('personId', 'personID', managerRole)

export const personIdEmployeeVariable = acl.createPredefinedVariable('personId', 'personID', employeeRole)

export const Priority = def.createEnum('low', 'medium', 'high')

export const Status = def.createEnum('pending', 'completed')

export const AccessLevel = def.createEnum('public', 'departmentOnly', 'projectOnly')

@def.Unique('personId', 'email')

@acl.allow(managerRole, {
	when: { department: { manager: { personId: personIdManagerVariable } } },
	read: true,
})
@acl.allow(employeeRole, {
	when: { personId: personIdEmployeeVariable },
	read: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	jobTitle = def.stringColumn()
	department = def.manyHasOne(Department, 'employees')
	tasks = def.oneHasMany(Task, 'assignedEmployee')
	projects = def.manyHasMany(Project, 'employees')
	managedDepartments = def.oneHasMany(Department, 'manager')
}


@acl.allow(managerRole, {
	when: { manager: { personId: personIdManagerVariable } },
	read: true,
	update: true,
})
export class Department {
	name = def.stringColumn()
	description = def.stringColumn()
	manager = def.manyHasOne(User, 'managedDepartments')
	employees = def.oneHasMany(User, 'department')
	projects = def.oneHasMany(Project, 'department')
}


@acl.allow(managerRole, {
	when: { department: { manager: { personId: personIdManagerVariable } } },
	read: true,
	create: true,
	update: true,
})
export class Project {
	title = def.stringColumn()
	description = def.stringColumn()
	startDate = def.dateTimeColumn()
	endDate = def.dateTimeColumn()
	department = def.manyHasOne(Department, 'projects')
	employees = def.manyHasManyInverse(User, 'projects')
	tasks = def.oneHasMany(Task, 'project')
	documents = def.oneHasMany(Document, 'project')
}


@acl.allow(managerRole, {
	when: { project: { department: { manager: { personId: personIdManagerVariable } } } },
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	when: { assignedEmployee: { personId: personIdEmployeeVariable } },
	read: true,
	update: true,
})
export class Task {
	title = def.stringColumn()
	description = def.stringColumn()
	dueDate = def.dateTimeColumn()
	priority = def.enumColumn(Priority)
	status = def.enumColumn(Status)
	assignedEmployee = def.manyHasOne(User, 'tasks')
	project = def.manyHasOne(Project, 'tasks')
}


@acl.allow(managerRole, {
	when: { project: { department: { manager: { personId: personIdManagerVariable } } } },
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	when: { project: { employees: { personId: personIdEmployeeVariable } } },
	read: true,
})
export class Document {
	title = def.stringColumn()
	description = def.stringColumn()
	file = def.manyHasOne(File, 'documentFile').setNullOnDelete()
	project = def.manyHasOne(Project, 'documents')
	accessLevel = def.enumColumn(AccessLevel)
}


@acl.allow(managerRole, {
	read: true,
	create: true,
})
@acl.allow(employeeRole, {
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
