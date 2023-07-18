import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Customers
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Customer" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="customer/customer/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<TextCell key="email" field="email" header="Email" />
				<TextCell key="phoneNumber" field="phoneNumber" header="Phone number" />
			</DataGridScope>
		</>
	)
}
