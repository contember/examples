import * as React from 'react'
import { DataGridScope, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Leads
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Lead" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="salesRepresentative/lead/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<TextCell key="email" field="email" header="Email" />
				<TextCell key="phone" field="phone" header="Phone" />
				<TextCell key="source" field="source" header="Source" />
				<HasOneSelectCell field="salesRepresentative" header="salesRepresentative" options="User.name" />
				<EnumCell
					options={{ new: 'new', contacted: 'contacted', qualified: 'qualified' }}
					key="status"
					field="status"
					header="Status"
				/>
			</DataGridScope>
		</>
	)
}
