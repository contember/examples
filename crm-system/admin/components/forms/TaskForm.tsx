import * as React from 'react'
import { Component, DateField, SelectField, TextField } from '@contember/admin'

export const TaskForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="dueDate" label="Due date" />
	<SelectField
		field="priority"
		label="Priority"
		required
		options={[{ value: 'low', label: 'low' }, { value: 'medium', label: 'medium' }, { value: 'high', label: 'high' }]}
		allowNull={false}
	/>
	<SelectField field="salesRepresentative" label="Sales representative" options="User.name" lazy allowNull />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'completed', label: 'completed' }]}
		allowNull={false}
	/>
</>)
