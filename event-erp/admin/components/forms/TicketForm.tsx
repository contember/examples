import * as React from 'react'
import { Component, SelectField } from '@contember/admin'

export const TicketForm = Component(() => <>
	<SelectField field="ticketType" label="Ticket type" options="TicketType.id" lazy allowNull />
	<SelectField field="attendee" label="Attendee" options="User.name" lazy allowNull />
</>)
