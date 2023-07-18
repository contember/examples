import * as React from 'react'
import { Component, DateField, FloatField, SelectField, TextField } from '@contember/admin'

export const AssetForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<SelectField field="category" label="Category" options="Category.name" lazy allowNull />
	<SelectField field="location" label="Location" options="Location.name" lazy allowNull />
	<DateField field="purchaseDate" label="Purchase date" />
	<FloatField field="value" label="Value" />
</>)
