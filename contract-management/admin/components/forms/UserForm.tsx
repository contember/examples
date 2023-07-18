import * as React from 'react'
import { Component, HiddenField, SelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="phone" label="Phone" />
	<TextField field="company" label="Company" />
	<TextField field="address" label="Address" />
	<SelectField
		field="roles"
		label="Role"
		options={[{ value: 'client', label: 'client' }, { value: 'contractManager', label: 'contractManager' }]}
		allowNull
	/>
</>)
