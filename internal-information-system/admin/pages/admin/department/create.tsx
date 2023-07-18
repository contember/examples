import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DepartmentForm } from '../../../components/forms/DepartmentForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create department
			</Title>
			<CreateScope entity="Department" redirectOnSuccess="admin/department/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create department" labelSaved="Create department" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/department/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Departments
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<DepartmentForm />
				</>
			</CreateScope>
		</>
	)
}
