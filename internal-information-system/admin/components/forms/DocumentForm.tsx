import * as React from 'react'
import { AnyUploadField, Component, SelectField, TextField } from '@contember/admin'

export const DocumentForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<AnyUploadField baseEntity="file" urlField="url" fileNameField="name" fileTypeField="type" label="File" />
	<SelectField field="project" label="Project" options="Project.title" lazy allowNull />
	<SelectField
		field="accessLevel"
		label="Access level"
		options={[{ value: 'public', label: 'public' }, { value: 'departmentOnly', label: 'departmentOnly' }, { value: 'projectOnly', label: 'projectOnly' }]}
		allowNull
	/>
</>)
