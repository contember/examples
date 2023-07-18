import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PageForm } from '../../../components/forms/PageForm'
import { PageSideForm } from '../../../components/forms/PageSideForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create page
			</Title>
			<CreateScope entity="Page" redirectOnSuccess="editor/page/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create page" labelSaved="Create page" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="editor/page/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Pages
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Sidebar>
					<PageSideForm />
				</SlotSources.Sidebar>
				<>
					<PageForm />
				</>
			</CreateScope>
		</>
	)
}
