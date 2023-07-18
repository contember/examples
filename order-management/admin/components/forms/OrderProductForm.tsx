import * as React from 'react'
import { Component, NumberField, SelectField } from '@contember/admin'

export const OrderProductForm = Component(() => <>
	<NumberField field="quantity" label="Quantity" />
	<SelectField field="order" label="Order" options="Order.id" lazy required />
	<SelectField field="product" label="Product" options="Product.name" lazy required />
</>)
