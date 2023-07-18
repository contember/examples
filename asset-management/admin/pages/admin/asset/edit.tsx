import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { AssetForm } from '../../../components/forms/AssetForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit asset
			</Title>
			<EditScope entity="Asset(id=$id)" redirectOnSuccess="admin/asset/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/asset/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<AssetForm />
			</EditScope>
		</>
	)
}
