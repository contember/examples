import * as React from 'react'
import { Component, FloatField, SelectField, TextField } from '@contember/admin'

export const MembershipPlanForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<FloatField field="price" label="Price" />
	<SelectField
		field="duration"
		label="Duration"
		required
		options={[{ value: 'monthly', label: 'monthly' }, { value: 'yearly', label: 'yearly' }]}
		allowNull={false}
	/>
	<TextField field="benefits" label="Benefit" />
</>)
