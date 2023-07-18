import * as React from 'react'
import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Policy detail
			</Title>
			<DetailScope entity="Policy(id=$id)">
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/policy/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Policies
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="complianceOfficer/policy/edit(id: $entity.id)">
						Edit policy
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
								<DisplayTextField field="effectiveDate" label="Effective date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="reviewDate" label="Review date" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Procedures
								</h2>
								<LinkButton to="complianceOfficer/procedure/create">
									Create new procedure
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Procedure[policy.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="complianceOfficer/procedure/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
