import * as React from 'react'
import { Component, FloatField, NumberField, SelectField, TextField } from '@contember/admin'

export const TicketTypeForm = Component(() => <>
	<TextField field="type" label="Type" />
	<FloatField field="price" label="Price" />
	<NumberField field="availableTickets" label="Available ticket" />
	<SelectField field="event" label="Event" options="Event.name" lazy allowNull />
</>)
