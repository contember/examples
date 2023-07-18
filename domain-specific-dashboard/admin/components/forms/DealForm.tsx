import * as React from 'react'
import { Component, DateTimeField, FloatField, SelectField } from '@contember/admin'

export const DealForm = Component(() => <>
	<FloatField field="value" label="Value" />
	<SelectField
		field="status"
		label="Status"
		required
		options={[{ value: 'open', label: 'open' }, { value: 'won', label: 'won' }, { value: 'lost', label: 'lost' }]}
		allowNull={false}
	/>
	<DateTimeField field="expectedCloseDate" label="Expected close date" />
	<SelectField field="lead" label="Lead" options="Lead.name" lazy allowNull />
</>)
