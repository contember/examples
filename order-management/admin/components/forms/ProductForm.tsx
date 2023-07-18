import * as React from 'react'
import { Component, FloatField, ImageUploadField, NumberField, Repeater, SelectField, TextField, TextareaField } from '@contember/admin'

export const ProductForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextareaField field="description" label="Description" minRows={1} />
	<FloatField field="price" label="Price" />
	<NumberField field="availableQuantity" label="Available quantity" />
	<ImageUploadField
		baseEntity="image"
		urlField="url"
		fileSizeField="size"
		fileTypeField="type"
		heightField="height"
		widthField="width"
		label="Image"
	/>
	<Repeater field="orders" orderBy="id" label="Order product" initialEntityCount={0}>
		<>
			<NumberField field="quantity" label="Quantity" />
			<SelectField field="order" label="Order" options="Order.id" lazy required />
		</>
	</Repeater>
</>)
