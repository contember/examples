import * as React from 'react'
import { Component, DateField, DateTimeField, SelectField, TextField } from '@contember/admin'

export const CommunicationLogForm = Component(() => <>
	<SelectField
		field="type"
		label="Type"
		required
		options={[{ value: 'call', label: 'call' }, { value: 'email', label: 'email' }, { value: 'meeting', label: 'meeting' }]}
		allowNull={false}
	/>
	<DateField field="date" label="Date" />
	<DateTimeField field="time" label="Time" />
	<SelectField field="member" label="Member" options="User.name" lazy allowNull />
	<TextField field="notes" label="Note" />
</>)
