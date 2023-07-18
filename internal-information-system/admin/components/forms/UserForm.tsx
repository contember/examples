import * as React from 'react'
import { Component, HiddenField, MultiSelectField, SelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="jobTitle" label="Job title" />
	<SelectField field="department" label="Department" options="Department.name" lazy allowNull />
	<MultiSelectField field="projects" label="Project" options="Project.title" lazy />
</>)
