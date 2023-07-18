import * as React from 'react'
import { Component, SelectField, TextField } from '@contember/admin'

export const LeadForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="contactInfo" label="Contact info" />
	<TextField field="source" label="Source" />
	<SelectField field="assignedTo" label="Assigned to" options="User.name" lazy allowNull />
</>)
