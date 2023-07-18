import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContractForm } from '../../../components/forms/ContractForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create contract
			</Title>
			<CreateScope entity="Contract" redirectOnSuccess="contractManager/contract/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create contract" labelSaved="Create contract" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="contractManager/contract/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Contracts
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ContractForm />
				</>
			</CreateScope>
		</>
	)
}
