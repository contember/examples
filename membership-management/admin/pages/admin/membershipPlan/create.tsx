import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MembershipPlanForm } from '../../../components/forms/MembershipPlanForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create membership plan
			</Title>
			<CreateScope entity="MembershipPlan" redirectOnSuccess="admin/membershipPlan/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create membership plan" labelSaved="Create membership plan" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/membershipPlan/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Membership plans
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<MembershipPlanForm />
				</>
			</CreateScope>
		</>
	)
}
