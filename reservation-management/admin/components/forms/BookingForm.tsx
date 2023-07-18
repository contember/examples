import * as React from 'react'
import { Component, DateField, FloatField, MultiSelectField, SelectField } from '@contember/admin'

export const BookingForm = Component(() => <>
	<SelectField field="customer" label="Customer" options="Customer.name" lazy allowNull />
	<SelectField field="room" label="Room" options="Room.description" lazy allowNull />
	<DateField field="checkInDate" label="Check in date" />
	<DateField field="checkOutDate" label="Check out date" />
	<MultiSelectField field="services" label="Service" options="Service.name" lazy />
	<FloatField field="totalPrice" label="Total price" />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'pending', label: 'pending' }, { value: 'confirmed', label: 'confirmed' }, { value: 'canceled', label: 'canceled' }]}
		allowNull={false}
	/>
</>)
