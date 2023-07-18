import * as React from 'react'
import { BlockEditor, Component, SlugField, TextField } from '@contember/admin'

export const ArticleForm = Component(() => <>
	<TextField field="title" label="Title" />
	<SlugField field="slug" label="Slug" derivedFrom="title" />
	<BlockEditor field="content.parts" label="Content" contentField="json" sortableBy="order" />
</>)
