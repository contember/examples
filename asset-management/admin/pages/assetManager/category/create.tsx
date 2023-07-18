import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CategoryForm } from '../../../components/forms/CategoryForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create category
			</Title>
			<CreateScope entity="Category" redirectOnSuccess="assetManager/category/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create category" labelSaved="Create category" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="assetManager/category/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Categories
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CategoryForm />
				</>
			</CreateScope>
		</>
	)
}
