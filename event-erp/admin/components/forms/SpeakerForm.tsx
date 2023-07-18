import * as React from 'react'
import { Component, ImageUploadField, TextField } from '@contember/admin'

export const SpeakerForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="bio" label="Bio" />
	<ImageUploadField
		baseEntity="photo"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Photo"
	/>
</>)
