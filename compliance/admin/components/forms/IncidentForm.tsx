import * as React from 'react'
import { CheckboxField, Component, DateField, SelectField, TextField } from '@contember/admin'

export const IncidentForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="date" label="Date" />
	<SelectField field="involvedEmployee" label="Involved employee" options="User.name" lazy allowNull />
	<TextField field="relatedPolicyOrProcedure" label="Related policy or procedure" />
	<CheckboxField field="resolutionStatus" label="Resolution status" />
</>)
