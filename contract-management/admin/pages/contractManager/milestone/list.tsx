import * as React from 'react'
import { BooleanCell, DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Milestones
			</Title>
			<SlotSources.Actions>
				<LinkButton to="contractManager/milestone/create">
					Create new milestone
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Milestone" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="contractManager/milestone/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="dueDate" field="dueDate" header="Due date" />
				<BooleanCell key="completed" field="completed" header="Completed" />
				<HasOneSelectCell field="contract" header="contract" options="Contract.title" />
			</DataGridScope>
		</>
	)
}
