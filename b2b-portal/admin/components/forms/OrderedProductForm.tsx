import * as React from 'react'
import { Component, NumberField, SelectField } from '@contember/admin'

export const OrderedProductForm = Component(() => <>
	<SelectField field="product" label="Product" options="Product.name" lazy allowNull />
	<SelectField field="order" label="Order" options="Order.id" lazy allowNull />
	<NumberField field="quantity" label="Quantity" />
</>)
