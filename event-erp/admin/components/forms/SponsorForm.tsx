import * as React from 'react'
import { Component, ImageUploadField, TextField } from '@contember/admin'

export const SponsorForm = Component(() => <>
	<TextField field="name" label="Name" />
	<ImageUploadField
		baseEntity="logo"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Logo"
	/>
	<TextField field="description" label="Description" />
</>)
