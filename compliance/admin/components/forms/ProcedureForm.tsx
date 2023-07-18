import * as React from 'react'
import { BlockEditor, Component, MultiSelectField, SelectField, TextField } from '@contember/admin'

export const ProcedureForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<SelectField field="policy" label="Policy" options="Policy.title" lazy allowNull />
	<BlockEditor field="instructions.parts" label="Instruction" contentField="json" sortableBy="order" />
	<MultiSelectField field="responsibleEmployees" label="Responsible employee" options="User.name" lazy />
</>)
