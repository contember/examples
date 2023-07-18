import * as React from 'react'
import { Component, DateTimeField, HasOne, SelectField, TextField } from '@contember/admin'
import { InvoiceForm } from './InvoiceForm'

export const OrderForm = Component(() => <>
	<SelectField field="client" label="Client" options="User.name" lazy allowNull />
	<DateTimeField field="orderDate" label="Order date" />
	<DateTimeField field="shippingDate" label="Shipping date" />
	<TextField field="status" label="Status" />
	<HasOne field="invoice">
		<InvoiceForm />
	</HasOne>
</>)
