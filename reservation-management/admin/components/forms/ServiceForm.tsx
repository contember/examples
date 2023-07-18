import * as React from 'react'
import { Component, FloatField, TextField } from '@contember/admin'

export const ServiceForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<FloatField field="price" label="Price" />
</>)
