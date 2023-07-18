import * as React from 'react'
import { DataGridScope, DateCell, DeleteEntityButton, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Deals
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/deal/create">
					Create new deal
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Deal" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/deal/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<NumberCell key="value" field="value" header="Value" />
				<EnumCell options={{ open: 'open', won: 'won', lost: 'lost' }} key="status" field="status" header="Status" />
				<DateCell key="expectedCloseDate" field="expectedCloseDate" header="Expected close date" />
				<HasOneSelectCell field="lead" header="lead" options="Lead.name" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
