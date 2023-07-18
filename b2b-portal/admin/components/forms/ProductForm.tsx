import * as React from 'react'
import { Component, FloatField, ImageUploadField, NumberField, SelectField, TextField } from '@contember/admin'

export const ProductForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<FloatField field="price" label="Price" />
	<NumberField field="availableQuantity" label="Available quantity" />
	<SelectField field="supplier" label="Supplier" options="User.name" lazy allowNull />
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
