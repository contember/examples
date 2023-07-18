import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BanknoteIcon, PackageSearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShoppingBagIcon />
			<>
				Orders
			</>
		</Stack>}
			to="admin/order/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Invoices
			</>
		</Stack>}
			to="admin/invoice/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PackageSearchIcon />
			<>
				Products
			</>
		</Stack>}
			to="admin/product/list"
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
	<HasRole role={roles => roles.has('supplier')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShoppingBagIcon />
			<>
				Orders
			</>
		</Stack>}
			to="supplier/order/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Invoices
			</>
		</Stack>}
			to="supplier/invoice/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PackageSearchIcon />
			<>
				Products
			</>
		</Stack>}
			to="supplier/product/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Users
			</>
		</Stack>}
			to="supplier/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('client')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShoppingBagIcon />
			<>
				Orders
			</>
		</Stack>}
			to="client/order/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Invoices
			</>
		</Stack>}
			to="client/invoice/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PackageSearchIcon />
			<>
				Products
			</>
		</Stack>}
			to="client/product/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Users
			</>
		</Stack>}
			to="client/user/list"
		/>
	</HasRole>
</Menu>)
