import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Services
			</Title>
			<SlotSources.Actions>
				<LinkButton to="receptionist/service/create">
					Create new service
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Service" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="receptionist/service/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<NumberCell key="price" field="price" header="Price" />
			</DataGridScope>
		</>
	)
}
