import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ArticleForm } from '../../../components/forms/ArticleForm'
import { ArticleSideForm } from '../../../components/forms/ArticleSideForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create article
			</Title>
			<CreateScope entity="Article" redirectOnSuccess="admin/article/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create article" labelSaved="Create article" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/article/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Articles
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Sidebar>
					<ArticleSideForm />
				</SlotSources.Sidebar>
				<>
					<ArticleForm />
				</>
			</CreateScope>
		</>
	)
}
