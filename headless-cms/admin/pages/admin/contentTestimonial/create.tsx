import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentTestimonialForm } from '../../../components/forms/ContentTestimonialForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create content testimonial
			</Title>
			<CreateScope entity="ContentTestimonial" redirectOnSuccess="admin/contentTestimonial/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create content testimonial" labelSaved="Create content testimonial" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/contentTestimonial/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Content testimonials
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ContentTestimonialForm />
				</>
			</CreateScope>
		</>
	)
}
