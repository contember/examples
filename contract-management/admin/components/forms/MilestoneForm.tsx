import * as React from 'react'
import { CheckboxField, Component, DateTimeField, HasOne, SelectField, TextField } from '@contember/admin'
import { PaymentForm } from './PaymentForm'

export const MilestoneForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateTimeField field="dueDate" label="Due date" />
	<CheckboxField field="completed" label="Completed" />
	<SelectField field="contract" label="Contract" options="Contract.title" lazy allowNull />
	<HasOne field="payment">
		<PaymentForm />
	</HasOne>
</>)
