import * as React from 'react'
import { Component, DateTimeField, HasOne, NumberField, Repeater, SelectField } from '@contember/admin'
import { ShippingForm } from './ShippingForm'

export const OrderForm = Component(() => <>
	<DateTimeField field="orderDate" label="Order date" />
	<HasOne field="shipping">
		<ShippingForm />
	</HasOne>
	<SelectField field="customer" label="Customer" options="User.name" lazy allowNull />
	<Repeater field="products" orderBy="id" label="Order product" initialEntityCount={0}>
		<>
			<NumberField field="quantity" label="Quantity" />
			<SelectField field="product" label="Product" options="Product.name" lazy required />
		</>
	</Repeater>
</>)
