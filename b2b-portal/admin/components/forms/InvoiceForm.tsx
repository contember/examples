import * as React from 'react'
import { Component, DateTimeField, FloatField, SelectField, TextField } from '@contember/admin'

export const InvoiceForm = Component(() => <>
	<SelectField field="client" label="Client" options="User.name" lazy allowNull />
	<DateTimeField field="invoiceDate" label="Invoice date" />
	<DateTimeField field="dueDate" label="Due date" />
	<FloatField field="totalAmount" label="Total amount" />
	<TextField field="paymentStatus" label="Payment status" />
</>)
