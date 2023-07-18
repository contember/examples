import * as React from 'react'
import { Component, DateTimeField, SelectField } from '@contember/admin'

export const TaskForm = Component(() => <>
	<SelectField
		field="taskType"
		label="Task type"
		required
		options={[{ value: 'call', label: 'call' }, { value: 'meeting', label: 'meeting' }, { value: 'followUp', label: 'followUp' }]}
		allowNull={false}
	/>
	<DateTimeField field="dueDate" label="Due date" />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'completed', label: 'completed' }]}
		allowNull={false}
	/>
	<SelectField field="assignedTo" label="Assigned to" options="User.name" lazy allowNull />
	<SelectField field="lead" label="Lead" options="Lead.name" lazy allowNull />
	<SelectField field="deal" label="Deal" options="Deal.id" lazy allowNull />
</>)
