import * as React from 'react'
import { Component, DateTimeField, FloatField, SelectField, TextField } from '@contember/admin'

export const ContractForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateTimeField field="startDate" label="Start date" />
	<DateTimeField field="endDate" label="End date" />
	<SelectField field="client" label="Client" options="User.name" lazy allowNull />
	<FloatField field="totalValue" label="Total value" />
</>)
