import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CustomerForm } from '../../../components/forms/CustomerForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit customer
			</Title>
			<EditScope entity="Customer(id=$id)" redirectOnSuccess="customer/customer/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="customer/customer/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CustomerForm />
			</EditScope>
		</>
	)
}
