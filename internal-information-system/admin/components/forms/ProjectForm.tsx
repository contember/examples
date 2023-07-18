import * as React from 'react'
import { Component, DateTimeField, SelectField, TextField } from '@contember/admin'

export const ProjectForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateTimeField field="startDate" label="Start date" />
	<DateTimeField field="endDate" label="End date" />
	<SelectField field="department" label="Department" options="Department.name" lazy allowNull />
</>)
