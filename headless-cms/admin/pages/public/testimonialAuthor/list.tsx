import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Testimonial authors
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="TestimonialAuthor" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="public/testimonialAuthor/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
			</DataGridScope>
		</>
	)
}
