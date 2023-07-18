import * as React from 'react'
import { Component, DateTimeField, FloatField, HasOne, SelectField } from '@contember/admin'
import { OrderForm } from './OrderForm'

export const PaymentForm = Component(() => <>
	<SelectField field="customer" label="Customer" options="User.name" lazy required />
	<HasOne field="order">
		<OrderForm />
	</HasOne>
	<FloatField field="amount" label="Amount" />
	<DateTimeField field="date" label="Date" />
	<SelectField
		field="method"
		label="Method"
		required
		options={[{ value: 'creditCard', label: 'creditCard' }, { value: 'bankTransfer', label: 'bankTransfer' }, { value: 'cash', label: 'cash' }]}
		allowNull={false}
	/>
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'paid', label: 'paid' }, { value: 'refunded', label: 'refunded' }]}
		allowNull={false}
	/>
</>)
