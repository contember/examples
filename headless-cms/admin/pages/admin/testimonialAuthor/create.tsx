import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TestimonialAuthorForm } from '../../../components/forms/TestimonialAuthorForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create testimonial author
			</Title>
			<CreateScope entity="TestimonialAuthor" redirectOnSuccess="admin/testimonialAuthor/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create testimonial author" labelSaved="Create testimonial author" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/testimonialAuthor/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Testimonial authors
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<TestimonialAuthorForm />
				</>
			</CreateScope>
		</>
	)
}
