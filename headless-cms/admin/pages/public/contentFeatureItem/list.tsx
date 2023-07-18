import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Content feature items
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="ContentFeatureItem" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="public/contentFeatureItem/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
			</DataGridScope>
		</>
	)
}
