import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ArticleForm } from '../../../components/forms/ArticleForm'
import { ArticleSideForm } from '../../../components/forms/ArticleSideForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit article
			</Title>
			<EditScope entity="Article(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/article/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<SlotSources.Sidebar>
					<ArticleSideForm />
				</SlotSources.Sidebar>
				<ArticleForm />
			</EditScope>
		</>
	)
}
