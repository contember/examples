import * as React from 'react'
import { Component, TextField } from '@contember/admin'

export const CategoryForm = Component(() => <>
	<TextField field="personId" label="Person id" />
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
</>)
