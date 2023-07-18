import { AsyncGenerator, loadRemoteSchema } from 'graphql-ts-client-codegen'

import { join } from 'path'

const generator = new AsyncGenerator({
	schemaLoader: async () => {
		return loadRemoteSchema('http://localhost:1481/content/headless-cms/live', {
			Authorization: 'Bearer 0000000000000000000000000000000000000000',
		})
	},
	targetDir: join(process.cwd(), './website/api/__generated'),
	scalarTypeMap: {
		Json: 'any',
	},
})
generator.generate()