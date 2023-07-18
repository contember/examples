import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { InvoiceForm } from '../../../components/forms/InvoiceForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create invoice
			</Title>
			<CreateScope entity="Invoice" redirectOnSuccess="admin/invoice/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create invoice" labelSaved="Create invoice" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/invoice/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Invoices
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<InvoiceForm />
				</>
			</CreateScope>
		</>
	)
}
