import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Projects
			</Title>
			<SlotSources.Actions>
				<LinkButton to="manager/project/create">
					Create new project
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Project" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="manager/project/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="startDate" field="startDate" header="Start date" />
				<DateCell key="endDate" field="endDate" header="End date" />
				<HasOneSelectCell field="department" header="department" options="Department.name" />
			</DataGridScope>
		</>
	)
}
