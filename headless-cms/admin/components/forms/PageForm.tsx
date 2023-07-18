import * as React from 'react'
import { Block, BlockEditor, BlockRepeater, Component, ImageUploadField, NumberField, Repeater, SelectField, SlugField, TextField } from '@contember/admin'

export const PageForm = Component(() => <>
	<TextField field="title" label="Title" />
	<SlugField field="slug" label="Slug" derivedFrom="title" />
	<BlockRepeater
		field="blocks"
		label="Block"
		discriminationField="type"
		sortableBy="order"
		addButtonText="Add content block"
	>
		<Block discriminateBy="heroSection" label="Hero section">
			<>
				<TextField field="primaryText" label="Primary text" />
				<TextField field="secondaryText" label="Secondary text" />
			</>
		</Block>
		<Block discriminateBy="logosSection" label="Logos section">
			<>
				<Repeater field="images" sortableBy="order" label="Content image" initialEntityCount={0}>
					<>
						<NumberField field="order" label="Order" defaultValue={0} />
						<ImageUploadField
							baseEntity="image"
							urlField="url"
							fileSizeField="size"
							fileTypeField="type"
							heightField="height"
							widthField="width"
							label="Image"
						/>
					</>
				</Repeater>
			</>
		</Block>
		<Block discriminateBy="contentSection" label="Content section">
			<>
				<TextField field="primaryText" label="Primary text" />
				<TextField field="secondaryText" label="Secondary text" />
				<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
			</>
		</Block>
		<Block discriminateBy="featureSection" label="Feature section">
			<>
				<TextField field="primaryText" label="Primary text" />
				<TextField field="secondaryText" label="Secondary text" />
				<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
				<Repeater field="featureList" sortableBy="order" label="Content feature item" initialEntityCount={0}>
					<>
						<NumberField field="order" label="Order" defaultValue={0} />
						<TextField field="primaryText" label="Primary text" />
						<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
						<TextField field="icon" label="Icon" />
					</>
				</Repeater>
			</>
		</Block>
		<Block discriminateBy="ctaSection" label="Cta section">
			<>
				<TextField field="primaryText" label="Primary text" />
				<TextField field="secondaryText" label="Secondary text" />
				<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
			</>
		</Block>
		<Block discriminateBy="testimonialSection" label="Testimonial section">
			<>
				<TextField field="primaryText" label="Primary text" />
				<TextField field="secondaryText" label="Secondary text" />
				<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
				<Repeater field="testimonials" sortableBy="order" label="Content testimonial" initialEntityCount={0}>
					<>
						<NumberField field="order" label="Order" defaultValue={0} />
						<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
						<SelectField field="author" label="Author" options="TestimonialAuthor.name" lazy required />
					</>
				</Repeater>
			</>
		</Block>
		<Block discriminateBy="contactSection" label="Contact section">
			<>
				<TextField field="primaryText" label="Primary text" />
				<TextField field="secondaryText" label="Secondary text" />
				<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
			</>
		</Block>
	</BlockRepeater>
</>)
