import * as React from 'react'
import { Component, FloatField, SelectField, TextField } from '@contember/admin'

export const DealForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<FloatField field="value" label="Value" />
	<SelectField field="customer" label="Customer" options="Customer.name" lazy allowNull />
	<SelectField field="salesRepresentative" label="Sales representative" options="User.name" lazy allowNull />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'open', label: 'open' }, { value: 'won', label: 'won' }, { value: 'lost', label: 'lost' }]}
		allowNull={false}
	/>
</>)
