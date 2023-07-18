import * as React from 'react'
import { Component, SelectField, TextField } from '@contember/admin'

export const LeadForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="phone" label="Phone" />
	<TextField field="source" label="Source" />
	<SelectField field="salesRepresentative" label="Sales representative" options="User.name" lazy allowNull />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'new', label: 'new' }, { value: 'contacted', label: 'contacted' }, { value: 'qualified', label: 'qualified' }]}
		allowNull={false}
	/>
</>)
