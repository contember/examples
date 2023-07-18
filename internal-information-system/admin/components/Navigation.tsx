import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { FileStackIcon, FolderDotIcon, ListTodoIcon, UngroupIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ListTodoIcon />
			<>
				Tasks
			</>
		</Stack>}
			to="admin/task/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FolderDotIcon />
			<>
				Projects
			</>
		</Stack>}
			to="admin/project/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UngroupIcon />
			<>
				Departments
			</>
		</Stack>}
			to="admin/department/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FileStackIcon />
			<>
				Documents
			</>
		</Stack>}
			to="admin/document/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Authors
			</>
		</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('manager')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ListTodoIcon />
			<>
				Tasks
			</>
		</Stack>}
			to="manager/task/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FolderDotIcon />
			<>
				Projects
			</>
		</Stack>}
			to="manager/project/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UngroupIcon />
			<>
				Departments
			</>
		</Stack>}
			to="manager/department/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FileStackIcon />
			<>
				Documents
			</>
		</Stack>}
			to="manager/document/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Authors
			</>
		</Stack>}
			to="manager/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('employee')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ListTodoIcon />
			<>
				Tasks
			</>
		</Stack>}
			to="employee/task/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<FileStackIcon />
			<>
				Documents
			</>
		</Stack>}
			to="employee/document/list"
		/>
	</HasRole>
</Menu>)
