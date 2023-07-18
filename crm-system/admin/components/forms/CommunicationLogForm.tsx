import * as React from 'react'
import { Component, DateField, SelectField, TextField } from '@contember/admin'

export const CommunicationLogForm = Component(() => <>
	<SelectField
		field="type"
		label="Type"
		required
		options={[{ value: 'call', label: 'call' }, { value: 'email', label: 'email' }, { value: 'meeting', label: 'meeting' }]}
		allowNull={false}
	/>
	<DateField field="date" label="Date" />
	<TextField field="time" label="Time" />
	<SelectField field="lead" label="Lead" options="Lead.name" lazy allowNull />
	<SelectField field="customer" label="Customer" options="Customer.name" lazy allowNull />
	<SelectField field="salesRepresentative" label="Sales representative" options="User.name" lazy allowNull />
	<TextField field="notes" label="Note" />
</>)
