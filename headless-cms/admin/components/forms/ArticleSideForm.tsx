import * as React from 'react'
import { CheckboxField, Component, ImageUploadField } from '@contember/admin'

export const ArticleSideForm = Component(() => <>
	<ImageUploadField
		baseEntity="featuredImage"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Featured image"
	/>
	<CheckboxField field="published" label="Published" />
</>)
