import * as React from 'react'
import { CheckboxField, Component, DateField, TextField } from '@contember/admin'

export const TrainingProgramForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="startDate" label="Start date" />
	<DateField field="endDate" label="End date" />
	<CheckboxField field="completionStatus" label="Completion status" />
</>)
