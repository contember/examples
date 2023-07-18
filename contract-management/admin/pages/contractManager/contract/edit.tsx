import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContractForm } from '../../../components/forms/ContractForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit contract
			</Title>
			<EditScope entity="Contract(id=$id)" redirectOnSuccess="contractManager/contract/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="contractManager/contract/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ContractForm />
			</EditScope>
		</>
	)
}
