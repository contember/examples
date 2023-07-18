import * as React from 'react'
import { Component, HiddenField, MultiSelectField, SelectField, TextField } from '@contember/admin'

export const UserForm = Component(() => <>
	<HiddenField field="personId" />
	<TextField field="name" label="Name" />
	<TextField field="email" label="Email" />
	<TextField field="phone" label="Phone" />
	<TextField field="address" label="Address" />
	<SelectField field="membershipPlan" label="Membership plan" options="MembershipPlan.name" lazy allowNull />
	<MultiSelectField field="attendedEvents" label="Attended event" options="Event.title" lazy />
</>)
