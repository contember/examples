import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { InvoiceForm } from '../../../components/forms/InvoiceForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit invoice
			</Title>
			<EditScope entity="Invoice(id=$id)" redirectOnSuccess="admin/invoice/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/invoice/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<InvoiceForm />
			</EditScope>
		</>
	)
}