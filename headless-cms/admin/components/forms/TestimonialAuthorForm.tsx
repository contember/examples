import * as React from 'react'
import { Component, ImageUploadField, TextField } from '@contember/admin'

export const TestimonialAuthorForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="title" label="Title" />
	<ImageUploadField
		baseEntity="image"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Image"
	/>
</>)
