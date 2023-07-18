import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BanknoteIcon, CalendarClockIcon, ScrollTextIcon, TagsIcon, UsersIcon } from 'lucide-react'

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
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="admin/payment/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Members
			</>
		</Stack>}
			to="admin/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TagsIcon />
			<>
				Membership plans
			</>
		</Stack>}
			to="admin/membershipPlan/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ScrollTextIcon />
			<>
				Communication logs
			</>
		</Stack>}
			to="admin/communicationLog/list"
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
			<UsersIcon />
			<>
				Members
			</>
		</Stack>}
			to="eventOrganizer/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ScrollTextIcon />
			<>
				Communication logs
			</>
		</Stack>}
			to="eventOrganizer/communicationLog/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('member')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="member/payment/list"
		/>
	</HasRole>
</Menu>)
