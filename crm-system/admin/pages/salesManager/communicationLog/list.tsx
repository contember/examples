import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Communication logs
			</Title>
			<SlotSources.Actions>
				<LinkButton to="salesManager/communicationLog/create">
					Create new communication log
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="CommunicationLog" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="salesManager/communicationLog/detail(id: $entity.id)">
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
				<TextCell key="time" field="time" header="Time" />
				<HasOneSelectCell field="salesRepresentative" header="salesRepresentative" options="User.name" />
			</DataGridScope>
		</>
	)
}
