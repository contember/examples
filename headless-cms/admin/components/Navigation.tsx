import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { EditIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<EditIcon />
			<>
				Pages
			</>
		</Stack>}
			to="admin/page/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Articles
			</>
		</Stack>}
			to="admin/article/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('public')} />
	<HasRole role={roles => roles.has('editor')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<EditIcon />
			<>
				Pages
			</>
		</Stack>}
			to="editor/page/list"
		/>
	</HasRole>
</Menu>)
