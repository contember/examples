import * as React from 'react'
import { Component, SelectField, TextField } from '@contember/admin'

export const DepartmentForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<SelectField field="manager" label="Manager" options="User.name" lazy allowNull />
</>)
