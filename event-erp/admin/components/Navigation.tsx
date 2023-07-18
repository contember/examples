import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { CalendarClockIcon, CoinsIcon, MapPinIcon, TicketIcon, UsersIcon, VolumeIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarClockIcon />
			<>
				Events
			</>
		</Stack>}
			to="admin/event/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<VolumeIcon />
			<>
				Speakers
			</>
		</Stack>}
			to="admin/speaker/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MapPinIcon />
			<>
				Sponsors
			</>
		</Stack>}
			to="admin/venue/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CoinsIcon />
			<>
				Sponsors
			</>
		</Stack>}
			to="admin/sponsor/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TicketIcon />
			<>
				Ticket types
			</>
		</Stack>}
			to="admin/ticketType/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('eventOrganizer')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarClockIcon />
			<>
				Events
			</>
		</Stack>}
			to="eventOrganizer/event/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<VolumeIcon />
			<>
				Speakers
			</>
		</Stack>}
			to="eventOrganizer/speaker/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MapPinIcon />
			<>
				Sponsors
			</>
		</Stack>}
			to="eventOrganizer/venue/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CoinsIcon />
			<>
				Sponsors
			</>
		</Stack>}
			to="eventOrganizer/sponsor/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TicketIcon />
			<>
				Ticket types
			</>
		</Stack>}
			to="eventOrganizer/ticketType/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('attendee')} />
</Menu>)
