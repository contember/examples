import * as React from 'react'
import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Membership plan detail
			</Title>
			<DetailScope entity="MembershipPlan(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/membershipPlan/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Membership plans
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/membershipPlan/edit(id: $entity.id)">
						Edit membership plan
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="price" label="Price" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="duration" label="Duration" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="benefits" label="Benefit" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Users
								</h2>
								<LinkButton to="admin/user/create">
									Create new user
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="User[membershipPlan.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/user/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<TextCell key="email" field="email" header="Email" />
							<TextCell key="phone" field="phone" header="Phone" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
