import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

export const publicRole = acl.createRole('public', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const editorRole = acl.createRole('editor', { stages: '*', s3: { ['**']: { upload: true, read: true } } })

export const personIdPublicVariable = acl.createPredefinedVariable('personId', 'personID', publicRole)

export const personIdEditorVariable = acl.createPredefinedVariable('personId', 'personID', editorRole)

export const contentblockType = def.createEnum('heroSection', 'logosSection', 'contentSection', 'featureSection', 'ctaSection', 'testimonialSection', 'contactSection')

@def.Unique('slug')

@acl.allow(publicRole, {
	when: { published: { eq: true } },
	read: true,
})
@acl.allow(editorRole, {
	read: true,
	create: true,
	delete: true,
})
export class Page {
	title = def.stringColumn()
	slug = def.stringColumn()
	blocks = def.oneHasMany(ContentBlock, 'page').orderBy(['order'])
	published = def.boolColumn().default(false)
}


@acl.allow(publicRole, {
	when: { page: { published: { eq: true } } },
	read: true,
})
export class ContentBlock {
	page = def.manyHasOne(Page, 'blocks').notNull()
	order = def.intColumn().default(0)
	type = def.enumColumn(contentblockType).notNull()
	primaryText = def.stringColumn()
	secondaryText = def.stringColumn()
	images = def.oneHasMany(ContentImage, 'contentBlock')
	content = def.oneHasOne(Content, 'contentblockContent').cascadeOnDelete().removeOrphan()
	featureList = def.oneHasMany(ContentFeatureItem, 'contentBlock')
	testimonials = def.oneHasMany(ContentTestimonial, 'contentBlock')
}

@def.Unique('slug')

@acl.allow(publicRole, {
	when: { published: { eq: true } },
	read: true,
})
@acl.allow(editorRole, {
	read: true,
	create: true,
	delete: true,
})
export class Article {
	title = def.stringColumn()
	slug = def.stringColumn()
	content = def.oneHasOne(Content, 'articleContent').cascadeOnDelete().removeOrphan()
	featuredImage = def.manyHasOne(Image, 'articleFeaturedimage').setNullOnDelete()
	published = def.boolColumn()
}


@acl.allow(publicRole, {
	read: true,
})
@acl.allow(editorRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
export class Content {
	parts = def.oneHasMany(ContentParts, 'content').orderBy(['order'])
	articleContent = def.oneHasOneInverse(Article, 'content').notNull()
	contentblockContent = def.oneHasOneInverse(ContentBlock, 'content').notNull()
	contentfeatureitemContent = def.oneHasOneInverse(ContentFeatureItem, 'content').notNull()
	contenttestimonialContent = def.oneHasOneInverse(ContentTestimonial, 'content').notNull()
}


@acl.allow(publicRole, {
	read: true,
})
@acl.allow(editorRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
export class ContentParts {
	order = def.intColumn().notNull()
	content = def.manyHasOne(Content, 'parts').notNull().cascadeOnDelete()
	json = def.stringColumn().notNull()
}


@acl.allow(publicRole, {
	read: true,
})
@acl.allow(editorRole, {
	read: true,
	create: true,
	delete: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	articleFeaturedimage = def.oneHasMany(Article, 'featuredImage')
	contentimageImage = def.oneHasMany(ContentImage, 'image')
	testimonialauthorImage = def.oneHasMany(TestimonialAuthor, 'image')
}


@acl.allow(publicRole, {
	when: { contentBlock: { page: { published: { eq: true } } } },
	read: true,
})
export class ContentImage {
	order = def.intColumn().default(0)
	image = def.manyHasOne(Image, 'contentimageImage').setNullOnDelete()
	contentBlock = def.manyHasOne(ContentBlock, 'images').notNull()
}


@acl.allow(publicRole, {
	when: { contentBlock: { page: { published: { eq: true } } } },
	read: true,
})
export class ContentFeatureItem {
	order = def.intColumn().default(0)
	primaryText = def.stringColumn()
	content = def.oneHasOne(Content, 'contentfeatureitemContent').cascadeOnDelete().removeOrphan()
	icon = def.stringColumn()
	contentBlock = def.manyHasOne(ContentBlock, 'featureList').notNull()
}


@acl.allow(publicRole, {
	when: { contentBlock: { page: { published: { eq: true } } } },
	read: true,
})
export class ContentTestimonial {
	order = def.intColumn().default(0)
	content = def.oneHasOne(Content, 'contenttestimonialContent').cascadeOnDelete().removeOrphan()
	author = def.manyHasOne(TestimonialAuthor, 'testimonial').notNull()
	contentBlock = def.manyHasOne(ContentBlock, 'testimonials').notNull()
}


@acl.allow(publicRole, {
	when: { testimonial: { contentBlock: { page: { published: { eq: true } } } } },
	read: true,
})
export class TestimonialAuthor {
	name = def.stringColumn()
	title = def.stringColumn()
	image = def.manyHasOne(Image, 'testimonialauthorImage').setNullOnDelete()
	testimonial = def.oneHasMany(ContentTestimonial, 'author')
}
