import * as React from 'react'
import { Component, HiddenField, SelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="phone" label="Phone" />
	<TextField field="address" label="Address" />
	<TextField field="company" label="Company" />
	<SelectField field="role" label="Role" options={[{ value: 'supplier', label: 'supplier' }]} allowNull />
</>)
