import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BanknoteIcon, ContactIcon, PackageSearchIcon, ShoppingBagIcon, TruckIcon } from 'lucide-react'

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
				Payments
			</>
		</Stack>}
			to="admin/payment/list"
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
			<ContactIcon />
			<>
				Customers
			</>
		</Stack>}
			to="admin/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TruckIcon />
			<>
				Shipping
			</>
		</Stack>}
			to="admin/shipping/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('salesRepresentative')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShoppingBagIcon />
			<>
				Orders
			</>
		</Stack>}
			to="salesRepresentative/order/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="salesRepresentative/payment/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<PackageSearchIcon />
			<>
				Products
			</>
		</Stack>}
			to="salesRepresentative/product/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ContactIcon />
			<>
				Customers
			</>
		</Stack>}
			to="salesRepresentative/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TruckIcon />
			<>
				Shipping
			</>
		</Stack>}
			to="salesRepresentative/shipping/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('customer')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShoppingBagIcon />
			<>
				Orders
			</>
		</Stack>}
			to="customer/order/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('public')} />
</Menu>)
