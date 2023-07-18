import * as React from 'react'
import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Audit detail
			</Title>
			<DetailScope entity="Audit(id=$id)">
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/audit/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Audits
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="complianceOfficer/audit/edit(id: $entity.id)">
						Edit audit
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="date" label="Date" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Users
								</h2>
							</Stack>
						</div>
						<DataGrid entities="User[assignedAudits.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="complianceOfficer/user/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<TextCell key="email" field="email" header="Email" />
							<TextCell key="jobTitle" field="jobTitle" header="Job title" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
