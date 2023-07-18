import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TestimonialAuthorForm } from '../../../components/forms/TestimonialAuthorForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit testimonial author
			</Title>
			<EditScope entity="TestimonialAuthor(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/testimonialAuthor/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<TestimonialAuthorForm />
			</EditScope>
		</>
	)
}
