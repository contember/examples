import * as React from 'react'
import { Component, SelectField, TextField } from '@contember/admin'

export const CustomerForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="phone" label="Phone" />
	<TextField field="company" label="Company" />
	<SelectField field="salesRepresentative" label="Sales representative" options="User.name" lazy allowNull />
</>)
