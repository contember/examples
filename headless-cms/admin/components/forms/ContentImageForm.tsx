import * as React from 'react'
import { Component, ImageUploadField, NumberField, SelectField } from '@contember/admin'

export const ContentImageForm = Component(() => <>
	<NumberField field="order" label="Order" defaultValue={0} />
	<ImageUploadField
		baseEntity="image"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Image"
	/>
	<SelectField field="contentBlock" label="Content block" options="ContentBlock.id" lazy required />
</>)
