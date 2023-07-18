import * as React from 'react'
import { Component, DateTimeField, MultiSelectField, SelectField, TextField } from '@contember/admin'

export const EventForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<DateTimeField field="startDate" label="Start date" />
	<DateTimeField field="endDate" label="End date" />
	<SelectField field="venue" label="Venue" options="Venue.name" lazy allowNull />
	<MultiSelectField field="speakers" label="Speaker" options="Speaker.name" lazy />
	<MultiSelectField field="sponsors" label="Sponsor" options="Sponsor.name" lazy />
	<SelectField field="organizer" label="Organizer" options="User.name" lazy allowNull />
</>)
