import * as React from 'react'
import { BooleanCell, DataGridScope, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Training programs
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="TrainingProgram" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="employee/trainingProgram/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="startDate" field="startDate" header="Start date" />
				<DateCell key="endDate" field="endDate" header="End date" />
				<BooleanCell key="completionStatus" field="completionStatus" header="Completion status" />
			</DataGridScope>
		</>
	)
}
