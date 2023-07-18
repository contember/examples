import * as React from 'react'
import { BlockEditor, Component, DateField, MultiSelectField, TextField } from '@contember/admin'

export const AuditForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<DateField field="date" label="Date" />
	<BlockEditor field="findings.parts" label="Finding" contentField="json" sortableBy="order" />
	<BlockEditor field="recommendations.parts" label="Recommendation" contentField="json" sortableBy="order" />
	<MultiSelectField field="responsibleEmployees" label="Responsible employee" options="User.name" lazy />
</>)
