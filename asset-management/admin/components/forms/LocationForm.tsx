import * as React from 'react'
import { Component, TextField } from '@contember/admin'

export const LocationForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="address" label="Address" />
</>)
