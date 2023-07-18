import * as React from 'react'
import { AnyUploadField, Component, SelectField, TextField } from '@contember/admin'

export const DocumentForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<AnyUploadField baseEntity="file" urlField="url" fileNameField="name" fileTypeField="type" label="File" />
	<SelectField field="contract" label="Contract" options="Contract.title" lazy allowNull />
</>)
