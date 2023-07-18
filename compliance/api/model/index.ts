import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const complianceOfficerRole = acl.createRole('complianceOfficer', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const employeeRole = acl.createRole('employee', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdComplianceOfficerVariable = acl.createPredefinedVariable('personId', 'personID', complianceOfficerRole)

export const personIdEmployeeVariable = acl.createPredefinedVariable('personId', 'personID', employeeRole)


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	read: true,
})
export class Policy {
	title = def.stringColumn()
	description = def.stringColumn()
	effectiveDate = def.dateColumn()
	reviewDate = def.dateColumn()
	procedures = def.oneHasMany(Procedure, 'policy')
}


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	read: true,
})
export class Procedure {
	title = def.stringColumn()
	description = def.stringColumn()
	policy = def.manyHasOne(Policy, 'procedures')
	instructions = def.oneHasOne(Content, 'procedureInstructions').cascadeOnDelete().removeOrphan()
	responsibleEmployees = def.manyHasMany(User, 'assignedProcedures')
}


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
@acl.allow(employeeRole, {
	read: true,
})
export class Content {
	parts = def.oneHasMany(ContentParts, 'content').orderBy(['order'])
	procedureInstructions = def.oneHasOneInverse(Procedure, 'instructions').notNull()
	auditFindings = def.oneHasOneInverse(Audit, 'findings').notNull()
	auditRecommendations = def.oneHasOneInverse(Audit, 'recommendations').notNull()
}


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
@acl.allow(employeeRole, {
	read: true,
})
export class ContentParts {
	order = def.intColumn().notNull()
	content = def.manyHasOne(Content, 'parts').notNull().cascadeOnDelete()
	json = def.stringColumn().notNull()
}

@def.Unique('personId', 'email')

@acl.allow(complianceOfficerRole, {
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
	assignedProcedures = def.manyHasManyInverse(Procedure, 'responsibleEmployees')
	trainingPrograms = def.manyHasMany(TrainingProgram, 'attendees')
	incidents = def.oneHasMany(Incident, 'involvedEmployee')
	assignedAudits = def.manyHasManyInverse(Audit, 'responsibleEmployees')
}


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	when: { attendees: { personId: personIdEmployeeVariable } },
	read: true,
})
export class TrainingProgram {
	title = def.stringColumn()
	description = def.stringColumn()
	attendees = def.manyHasManyInverse(User, 'trainingPrograms')
	startDate = def.dateColumn()
	endDate = def.dateColumn()
	completionStatus = def.boolColumn()
}


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	read: true,
})
export class Audit {
	title = def.stringColumn()
	description = def.stringColumn()
	date = def.dateColumn()
	findings = def.oneHasOne(Content, 'auditFindings').cascadeOnDelete().removeOrphan()
	recommendations = def.oneHasOne(Content, 'auditRecommendations').cascadeOnDelete().removeOrphan()
	responsibleEmployees = def.manyHasMany(User, 'assignedAudits')
}


@acl.allow(complianceOfficerRole, {
	read: true,
	create: true,
	update: true,
})
@acl.allow(employeeRole, {
	when: { involvedEmployee: { personId: personIdEmployeeVariable } },
	read: true,
})
export class Incident {
	title = def.stringColumn()
	description = def.stringColumn()
	date = def.dateColumn()
	involvedEmployee = def.manyHasOne(User, 'incidents')
	relatedPolicyOrProcedure = def.stringColumn()
	resolutionStatus = def.boolColumn()
}
