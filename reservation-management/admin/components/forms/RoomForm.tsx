import * as React from 'react'
import { CheckboxField, Component, FloatField, NumberField, SelectField, TextField } from '@contember/admin'

export const RoomForm = Component(() => <>
	<SelectField
		field="type"
		label="Type"
		required
		options={[{ value: 'single', label: 'single' }, { value: 'double', label: 'double' }, { value: 'suite', label: 'suite' }]}
		allowNull={false}
	/>
	<TextField field="description" label="Description" />
	<NumberField field="capacity" label="Capacity" />
	<FloatField field="pricePerNight" label="Price per night" />
	<CheckboxField field="availability" label="Availability" />
</>)
