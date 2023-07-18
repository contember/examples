import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { AssetForm } from '../../../components/forms/AssetForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create asset
			</Title>
			<CreateScope entity="Asset" redirectOnSuccess="admin/asset/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create asset" labelSaved="Create asset" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/asset/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Assets
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<AssetForm />
				</>
			</CreateScope>
		</>
	)
}
