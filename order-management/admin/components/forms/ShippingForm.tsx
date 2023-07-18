import * as React from 'react'
import { Component, DateTimeField, SelectField, TextField } from '@contember/admin'

export const ShippingForm = Component(() => <>
	<TextField field="trackingNumber" label="Tracking number" />
	<TextField field="carrier" label="Carrier" />
	<DateTimeField field="shippingDate" label="Shipping date" />
	<DateTimeField field="estimatedDeliveryDate" label="Estimated delivery date" />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'shipped', label: 'shipped' }, { value: 'delivered', label: 'delivered' }]}
		allowNull={false}
	/>
</>)
