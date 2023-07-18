import * as React from 'react'
import { Component, HiddenField, TextField } from '@contember/admin'

export const CustomerForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="phoneNumber" label="Phone number" />
	<TextField field="address" label="Address" />
</>)
