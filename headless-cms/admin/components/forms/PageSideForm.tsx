import * as React from 'react'
import { CheckboxField, Component } from '@contember/admin'

export const PageSideForm = Component(() => <>
	<CheckboxField field="published" label="Published" defaultValue={false} />
</>)
