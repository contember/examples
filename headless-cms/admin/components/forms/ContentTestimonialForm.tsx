import * as React from 'react'
import { BlockEditor, Component, NumberField, SelectField } from '@contember/admin'

export const ContentTestimonialForm = Component(() => <>
	<NumberField field="order" label="Order" defaultValue={0} />
	<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
	<SelectField field="author" label="Author" options="TestimonialAuthor.name" lazy required />
	<SelectField field="contentBlock" label="Content block" options="ContentBlock.id" lazy required />
</>)
