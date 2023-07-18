import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PageForm } from '../../../components/forms/PageForm'
import { PageSideForm } from '../../../components/forms/PageSideForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit page
			</Title>
			<EditScope entity="Page(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/page/list" size="small" className="mr-2" distinction="outlined">
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
					<PageSideForm />
				</SlotSources.Sidebar>
				<PageForm />
			</EditScope>
		</>
	)
}
