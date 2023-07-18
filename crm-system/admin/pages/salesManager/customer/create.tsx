import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CustomerForm } from '../../../components/forms/CustomerForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create customer
			</Title>
			<CreateScope entity="Customer" redirectOnSuccess="salesManager/customer/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create customer" labelSaved="Create customer" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesManager/customer/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Customers
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CustomerForm />
				</>
			</CreateScope>
		</>
	)
}
