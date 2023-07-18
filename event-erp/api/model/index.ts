import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const eventOrganizerRole = acl.createRole('eventOrganizer', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const attendeeRole = acl.createRole('attendee', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdEventOrganizerVariable = acl.createPredefinedVariable('personId', 'personID', eventOrganizerRole)

export const personIdAttendeeVariable = acl.createPredefinedVariable('personId', 'personID', attendeeRole)

@def.Unique('personId', 'email')

@acl.allow(eventOrganizerRole, {
	when: { personId: personIdEventOrganizerVariable },
	read: true,
	update: true,
})
@acl.allow(attendeeRole, {
	when: { personId: personIdAttendeeVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	tickets = def.oneHasMany(Ticket, 'attendee')
	organizedEvents = def.oneHasMany(Event, 'organizer')
}


@acl.allow(eventOrganizerRole, {
	when: { organizer: { personId: personIdEventOrganizerVariable } },
	read: true,
	create: true,
	update: true,
})
export class Event {
	name = def.stringColumn()
	description = def.stringColumn()
	startDate = def.dateTimeColumn()
	endDate = def.dateTimeColumn()
	venue = def.manyHasOne(Venue, 'events')
	speakers = def.manyHasMany(Speaker, 'events')
	sponsors = def.manyHasMany(Sponsor, 'events')
	ticketTypes = def.oneHasMany(TicketType, 'event')
	organizer = def.manyHasOne(User, 'organizedEvents')
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
	update: true,
})
export class Speaker {
	name = def.stringColumn()
	bio = def.stringColumn()
	photo = def.manyHasOne(Image, 'speakerPhoto').setNullOnDelete()
	events = def.manyHasManyInverse(Event, 'speakers')
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	speakerPhoto = def.oneHasMany(Speaker, 'photo')
	sponsorLogo = def.oneHasMany(Sponsor, 'logo')
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
	update: true,
})
export class Sponsor {
	name = def.stringColumn()
	logo = def.manyHasOne(Image, 'sponsorLogo').setNullOnDelete()
	description = def.stringColumn()
	events = def.manyHasManyInverse(Event, 'sponsors')
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
	update: true,
})
export class Venue {
	name = def.stringColumn()
	address = def.stringColumn()
	capacity = def.intColumn()
	events = def.oneHasMany(Event, 'venue')
}


@acl.allow(eventOrganizerRole, {
	read: true,
	create: true,
	update: true,
})
export class TicketType {
	type = def.stringColumn()
	price = def.doubleColumn()
	availableTickets = def.intColumn()
	event = def.manyHasOne(Event, 'ticketTypes')
	tickets = def.oneHasMany(Ticket, 'ticketType')
}


@acl.allow(attendeeRole, {
	when: { attendee: { personId: personIdAttendeeVariable } },
	read: true,
	create: true,
	update: true,
})
export class Ticket {
	ticketType = def.manyHasOne(TicketType, 'tickets')
	attendee = def.manyHasOne(User, 'tickets')
}
