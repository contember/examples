import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const assetManagerRole = acl.createRole('assetManager', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const maintenanceTechnicianRole = acl.createRole('maintenanceTechnician', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdAssetManagerVariable = acl.createPredefinedVariable('personId', 'personID', assetManagerRole)

export const personIdMaintenanceTechnicianVariable = acl.createPredefinedVariable('personId', 'personID', maintenanceTechnicianRole)

export const UserRole = def.createEnum('admin', 'assetManager', 'maintenanceTechnician')

export const TaskPriority = def.createEnum('low', 'medium', 'high')

export const TaskStatus = def.createEnum('pending', 'completed')

@def.Unique('personId', 'email')

@acl.allow(assetManagerRole, {
	when: { personId: personIdAssetManagerVariable },
	read: true,
	update: true,
})
@acl.allow(maintenanceTechnicianRole, {
	when: { personId: personIdMaintenanceTechnicianVariable },
	read: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	role = def.enumColumn(UserRole)
	assignedTasks = def.oneHasMany(MaintenanceTask, 'assignedTechnician')
}


@acl.allow(assetManagerRole, {
	read: true,
	create: true,
	update: true,
})
export class Asset {
	name = def.stringColumn()
	description = def.stringColumn()
	category = def.manyHasOne(Category, 'assets')
	location = def.manyHasOne(Location, 'assets')
	purchaseDate = def.dateColumn()
	value = def.doubleColumn()
	maintenanceTasks = def.oneHasMany(MaintenanceTask, 'asset')
}

@def.Unique('personId')

@acl.allow(assetManagerRole, {
	read: true,
	create: true,
	update: true,
})
export class Category {
	personId = def.uuidColumn()
	name = def.stringColumn()
	description = def.stringColumn()
	assets = def.oneHasMany(Asset, 'category')
}


@acl.allow(assetManagerRole, {
	read: true,
	create: true,
	update: true,
})
export class Location {
	name = def.stringColumn()
	address = def.stringColumn()
	assets = def.oneHasMany(Asset, 'location')
}


@acl.allow(assetManagerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(maintenanceTechnicianRole, {
	when: { assignedTechnician: { personId: personIdMaintenanceTechnicianVariable } },
	read: true,
})
export class MaintenanceTask {
	title = def.stringColumn()
	description = def.stringColumn()
	dueDate = def.dateColumn()
	priority = def.enumColumn(TaskPriority)
	assignedTechnician = def.manyHasOne(User, 'assignedTasks')
	asset = def.manyHasOne(Asset, 'maintenanceTasks')
	status = def.enumColumn(TaskStatus)
}
