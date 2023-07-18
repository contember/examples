import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Testimonial authors
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/testimonialAuthor/create">
					Create new testimonial author
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="TestimonialAuthor" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/testimonialAuthor/edit(id: $entity.id)">
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
