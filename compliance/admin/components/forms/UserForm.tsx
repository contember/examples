import * as React from 'react'
import { Component, HiddenField, MultiSelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="jobTitle" label="Job title" />
	<MultiSelectField field="trainingPrograms" label="Training program" options="TrainingProgram.title" lazy />
</>)
