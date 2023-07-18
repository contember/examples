import * as React from 'react'
import { BooleanCell, Box, DataGrid, DateCell, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				User detail
			</Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="jobTitle" label="Job title" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Training programs
								</h2>
								<LinkButton to="complianceOfficer/trainingProgram/create">
									Create new training program
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="TrainingProgram[attendees.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="complianceOfficer/trainingProgram/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="startDate" field="startDate" header="Start date" />
							<DateCell key="endDate" field="endDate" header="End date" />
							<BooleanCell key="completionStatus" field="completionStatus" header="Completion status" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Incidents
								</h2>
								<LinkButton to="complianceOfficer/incident/create">
									Create new incident
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Incident[involvedEmployee.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="complianceOfficer/incident/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="date" field="date" header="Date" />
							<TextCell
								key="relatedPolicyOrProcedure"
								field="relatedPolicyOrProcedure"
								header="Related policy or procedure"
							/>
							<BooleanCell key="resolutionStatus" field="resolutionStatus" header="Resolution status" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
