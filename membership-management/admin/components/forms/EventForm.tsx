import * as React from 'react'
import { Component, DateField, DateTimeField, FloatField, TextField } from '@contember/admin'

export const EventForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="date" label="Date" />
	<DateTimeField field="time" label="Time" />
	<TextField field="location" label="Location" />
	<FloatField field="registrationFee" label="Registration fee" />
</>)
