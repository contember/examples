import * as React from 'react'
import { Component, DateTimeField, RadioField, SelectField, TextField } from '@contember/admin'

export const TaskForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateTimeField field="dueDate" label="Due date" />
	<RadioField
		field="priority"
		label="Priority"
		options={[{ value: 'low', label: 'low' }, { value: 'medium', label: 'medium' }, { value: 'high', label: 'high' }]}
	/>
	<SelectField
		field="status"
		label="Status"
		options={[{ value: 'pending', label: 'pending' }, { value: 'completed', label: 'completed' }]}
		allowNull
	/>
	<SelectField field="assignedEmployee" label="Assigned employee" options="User.name" lazy allowNull />
	<SelectField field="project" label="Project" options="Project.title" lazy allowNull />
</>)
