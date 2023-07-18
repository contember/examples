import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { ConstructionIcon, LandmarkIcon, LocateFixedIcon, StretchHorizontalIcon, UserIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LandmarkIcon />
			<>
				Assets
			</>
		</Stack>}
			to="admin/asset/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ConstructionIcon />
			<>
				Maintenance Tasks
			</>
		</Stack>}
			to="admin/maintenanceTask/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LocateFixedIcon />
			<>
				Categories
			</>
		</Stack>}
			to="admin/location/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<StretchHorizontalIcon />
			<>
				Categories
			</>
		</Stack>}
			to="admin/category/list"
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
	<HasRole role={roles => roles.has('assetManager')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LandmarkIcon />
			<>
				Assets
			</>
		</Stack>}
			to="assetManager/asset/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ConstructionIcon />
			<>
				Maintenance Tasks
			</>
		</Stack>}
			to="assetManager/maintenanceTask/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<LocateFixedIcon />
			<>
				Categories
			</>
		</Stack>}
			to="assetManager/location/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<StretchHorizontalIcon />
			<>
				Categories
			</>
		</Stack>}
			to="assetManager/category/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('maintenanceTechnician')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ConstructionIcon />
			<>
				Maintenance Tasks
			</>
		</Stack>}
			to="maintenanceTechnician/maintenanceTask/list"
		/>
	</HasRole>
</Menu>)
