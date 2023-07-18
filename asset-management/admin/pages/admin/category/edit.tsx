import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CategoryForm } from '../../../components/forms/CategoryForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit category
			</Title>
			<EditScope entity="Category(id=$id)" redirectOnSuccess="admin/category/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/category/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CategoryForm />
			</EditScope>
		</>
	)
}
