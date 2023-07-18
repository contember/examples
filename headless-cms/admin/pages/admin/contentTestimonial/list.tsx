import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Content testimonials
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/contentTestimonial/create">
					Create new content testimonial
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="ContentTestimonial" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/contentTestimonial/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
