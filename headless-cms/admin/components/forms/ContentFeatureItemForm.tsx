import * as React from 'react'
import { BlockEditor, Component, NumberField, SelectField, TextField } from '@contember/admin'

export const ContentFeatureItemForm = Component(() => <>
	<NumberField field="order" label="Order" defaultValue={0} />
	<TextField field="primaryText" label="Primary text" />
	<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
	<TextField field="icon" label="Icon" />
	<SelectField field="contentBlock" label="Content block" options="ContentBlock.id" lazy required />
</>)
