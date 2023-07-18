import * as React from 'react'
import { DataGridScope, DateCell, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Contracts
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/contract/create">
					Create new contract
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Contract" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/contract/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="startDate" field="startDate" header="Start date" />
				<DateCell key="endDate" field="endDate" header="End date" />
				<HasOneSelectCell field="client" header="client" options="User.name" />
				<NumberCell key="totalValue" field="totalValue" header="Total value" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
