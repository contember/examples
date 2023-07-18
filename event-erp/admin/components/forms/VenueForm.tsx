import * as React from 'react'
import { Component, NumberField, TextField } from '@contember/admin'

export const VenueForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="address" label="Address" />
	<NumberField field="capacity" label="Capacity" />
</>)
