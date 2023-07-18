import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BanknoteIcon, CalendarDaysIcon, FilesIcon, MilestoneIcon, UserIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MilestoneIcon />
			<>
				Milestones
			</>
		</Stack>}
			to="admin/milestone/list"
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
			<FilesIcon />
			<>
				Documents
			</>
		</Stack>}
			to="admin/document/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarDaysIcon />
			<>
				Contracts
			</>
		</Stack>}
			to="admin/contract/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Clients
			</>
		</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('contractManager')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MilestoneIcon />
			<>
				Milestones
			</>
		</Stack>}
			to="contractManager/milestone/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="contractManager/payment/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FilesIcon />
			<>
				Documents
			</>
		</Stack>}
			to="contractManager/document/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarDaysIcon />
			<>
				Contracts
			</>
		</Stack>}
			to="contractManager/contract/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Clients
			</>
		</Stack>}
			to="contractManager/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('client')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<MilestoneIcon />
			<>
				Milestones
			</>
		</Stack>}
			to="client/milestone/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="client/payment/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FilesIcon />
			<>
				Documents
			</>
		</Stack>}
			to="client/document/list"
		/>
	</HasRole>
</Menu>)
