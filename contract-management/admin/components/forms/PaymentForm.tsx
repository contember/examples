import * as React from 'react'
import { Component, DateTimeField, FloatField, SelectField, TextField } from '@contember/admin'

export const PaymentForm = Component(() => <>
	<SelectField field="client" label="Client" options="User.name" lazy allowNull />
	<SelectField field="contract" label="Contract" options="Contract.title" lazy allowNull />
	<FloatField field="amount" label="Amount" />
	<DateTimeField field="date" label="Date" />
	<TextField field="paymentMethod" label="Payment method" />
	<SelectField
		field="status"
		label="Status"
		options={[{ value: 'pending', label: 'pending' }, { value: 'paid', label: 'paid' }, { value: 'overdue', label: 'overdue' }]}
		allowNull
	/>
</>)
