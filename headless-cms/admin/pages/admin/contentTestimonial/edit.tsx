import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentTestimonialForm } from '../../../components/forms/ContentTestimonialForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit content testimonial
			</Title>
			<EditScope entity="ContentTestimonial(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/contentTestimonial/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ContentTestimonialForm />
			</EditScope>
		</>
	)
}
