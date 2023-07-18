import * as React from 'react'
import { Component, DateField, TextField } from '@contember/admin'

export const PolicyForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="effectiveDate" label="Effective date" />
	<DateField field="reviewDate" label="Review date" />
</>)
