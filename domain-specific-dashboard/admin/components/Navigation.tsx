import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { TagsIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="admin/user/list"
		/>
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
			<>
				Deals
			</>
		</Stack>}
			to="admin/deal/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Tasks
			</>
		</Stack>}
			to="admin/task/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('salesManager')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="salesManager/user/list"
		/>
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
			<>
				Deals
			</>
		</Stack>}
			to="salesManager/deal/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Tasks
			</>
		</Stack>}
			to="salesManager/task/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('salesRepresentative')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="salesRepresentative/user/list"
		/>
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
			<>
				Deals
			</>
		</Stack>}
			to="salesRepresentative/deal/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Tasks
			</>
		</Stack>}
			to="salesRepresentative/task/list"
		/>
	</HasRole>
</Menu>)
