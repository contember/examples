import * as React from 'react'
import { DataGridScope, DateCell, DeleteEntityButton, EnumCell, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Communication logs
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/communicationLog/create">
					Create new communication log
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="CommunicationLog" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/communicationLog/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<EnumCell
					options={{ call: 'call', email: 'email', meeting: 'meeting' }}
					key="type"
					field="type"
					header="Type"
				/>
				<DateCell key="date" field="date" header="Date" />
				<DateCell key="time" field="time" header="Time" />
				<HasOneSelectCell field="member" header="member" options="User.name" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
