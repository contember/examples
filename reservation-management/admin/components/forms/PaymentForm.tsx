import * as React from 'react'
import { Component, DateField, FloatField, SelectField, TextField } from '@contember/admin'

export const PaymentForm = Component(() => <>
	<SelectField field="customer" label="Customer" options="Customer.name" lazy allowNull />
	<SelectField field="booking" label="Booking" options="Booking.id" lazy allowNull />
	<FloatField field="amount" label="Amount" />
	<DateField field="date" label="Date" />
	<TextField field="paymentMethod" label="Payment method" />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'paid', label: 'paid' }, { value: 'refunded', label: 'refunded' }]}
		allowNull={false}
	/>
</>)
