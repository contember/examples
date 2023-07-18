import * as React from 'react'
import { Component, DateField, SelectField, TextField } from '@contember/admin'

export const MaintenanceTaskForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="dueDate" label="Due date" />
	<SelectField
		field="priority"
		label="Priority"
		options={[{ value: 'low', label: 'low' }, { value: 'medium', label: 'medium' }, { value: 'high', label: 'high' }]}
		allowNull
	/>
	<SelectField field="assignedTechnician" label="Assigned technician" options="User.name" lazy allowNull />
	<SelectField field="asset" label="Asset" options="Asset.name" lazy allowNull />
	<SelectField
		field="status"
		label="Status"
		options={[{ value: 'pending', label: 'pending' }, { value: 'completed', label: 'completed' }]}
		allowNull
	/>
</>)
