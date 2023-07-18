import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { HeartHandshakeIcon, LayoutListIcon, ScrollTextIcon, TagsIcon, UserIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TagsIcon />
			<>
				Leads
			</>
		</Stack>}
			to="admin/lead/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LayoutListIcon />
			<>
				Tasks
			</>
		</Stack>}
			to="admin/task/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<HeartHandshakeIcon />
			<>
				Deals
			</>
		</Stack>}
			to="admin/deal/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Customers
			</>
		</Stack>}
			to="admin/customer/list"
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
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Users
			</>
		</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('salesManager')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TagsIcon />
			<>
				Leads
			</>
		</Stack>}
			to="salesManager/lead/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<HeartHandshakeIcon />
			<>
				Deals
			</>
		</Stack>}
			to="salesManager/deal/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Customers
			</>
		</Stack>}
			to="salesManager/customer/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ScrollTextIcon />
			<>
				Communication logs
			</>
		</Stack>}
			to="salesManager/communicationLog/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Users
			</>
		</Stack>}
			to="salesManager/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('salesRepresentative')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TagsIcon />
			<>
				Leads
			</>
		</Stack>}
			to="salesRepresentative/lead/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LayoutListIcon />
			<>
				Tasks
			</>
		</Stack>}
			to="salesRepresentative/task/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<HeartHandshakeIcon />
			<>
				Deals
			</>
		</Stack>}
			to="salesRepresentative/deal/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Customers
			</>
		</Stack>}
			to="salesRepresentative/customer/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ScrollTextIcon />
			<>
				Communication logs
			</>
		</Stack>}
			to="salesRepresentative/communicationLog/list"
		/>
	</HasRole>
</Menu>)
