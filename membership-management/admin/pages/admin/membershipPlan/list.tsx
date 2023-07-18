import * as React from 'react'
import { DataGridScope, DeleteEntityButton, EnumCell, GenericCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Membership plans
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/membershipPlan/create">
					Create new membership plan
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="MembershipPlan" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/membershipPlan/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<NumberCell key="price" field="price" header="Price" />
				<EnumCell
					options={{ monthly: 'monthly', yearly: 'yearly' }}
					key="duration"
					field="duration"
					header="Duration"
				/>
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
