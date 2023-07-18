import * as React from 'react'
import { Component, DateField, FloatField, SelectField } from '@contember/admin'

export const PaymentForm = Component(() => <>
	<SelectField field="member" label="Member" options="User.name" lazy allowNull />
	<FloatField field="amount" label="Amount" />
	<DateField field="date" label="Date" />
	<SelectField
		field="paymentMethod"
		label="Payment method"
		required
		options={[{ value: 'creditCard', label: 'creditCard' }, { value: 'bankTransfer', label: 'bankTransfer' }, { value: 'cash', label: 'cash' }]}
		allowNull={false}
	/>
	<SelectField
		field="purpose"
		label="Purpose"
		required
		options={[{ value: 'membershipFee', label: 'membershipFee' }, { value: 'eventRegistration', label: 'eventRegistration' }]}
		allowNull={false}
	/>
</>)
