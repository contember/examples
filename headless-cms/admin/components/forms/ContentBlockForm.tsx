import * as React from 'react'
import { BlockEditor, Component, NumberField, SelectField, TextField } from '@contember/admin'

export const ContentBlockForm = Component(() => <>
	<SelectField field="page" label="Page" options="Page.title" lazy required />
	<NumberField field="order" label="Order" defaultValue={0} />
	<SelectField
		field="type"
		label="Type"
		required
		options={[{ value: 'heroSection', label: 'heroSection' }, { value: 'logosSection', label: 'logosSection' }, { value: 'contentSection', label: 'contentSection' }, { value: 'featureSection', label: 'featureSection' }, { value: 'ctaSection', label: 'ctaSection' }, { value: 'testimonialSection', label: 'testimonialSection' }, { value: 'contactSection', label: 'contactSection' }]}
		allowNull={false}
	/>
	<TextField field="primaryText" label="Primary text" />
	<TextField field="secondaryText" label="Secondary text" />
	<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
</>)
