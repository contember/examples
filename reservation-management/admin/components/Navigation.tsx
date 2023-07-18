import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BanknoteIcon, BookmarkIcon, ListTreeIcon, StretchHorizontalIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BookmarkIcon />
			<>
				Bookings
			</>
		</Stack>}
			to="admin/booking/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<StretchHorizontalIcon />
			<>
				Rooms
			</>
		</Stack>}
			to="admin/room/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ListTreeIcon />
			<>
				Services
			</>
		</Stack>}
			to="admin/service/list"
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
			<BanknoteIcon />
			<>
				Customers
			</>
		</Stack>}
			to="admin/customer/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('receptionist')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BookmarkIcon />
			<>
				Bookings
			</>
		</Stack>}
			to="receptionist/booking/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<StretchHorizontalIcon />
			<>
				Rooms
			</>
		</Stack>}
			to="receptionist/room/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ListTreeIcon />
			<>
				Services
			</>
		</Stack>}
			to="receptionist/service/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="receptionist/payment/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Customers
			</>
		</Stack>}
			to="receptionist/customer/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('customer')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BookmarkIcon />
			<>
				Bookings
			</>
		</Stack>}
			to="customer/booking/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BanknoteIcon />
			<>
				Payments
			</>
		</Stack>}
			to="customer/payment/list"
		/>
	</HasRole>
</Menu>)
