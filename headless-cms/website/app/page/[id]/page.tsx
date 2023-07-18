import { execute } from '../../../api/__generated'
import { graphQLExecutor } from '../../../api/graphQLExecutor'
import { queryGetPage } from '../../../api/queries/queryGetPage'

export default async function Page({ params: { id } }: { params: { id: string } }) {
	const data = await getData(id)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
				<pre className="font-mono">
					{JSON.stringify(data.getPage, null, 4)}
				</pre>
			</div>
		</main>
	)
}

async function getData(id: string) {
	const { getPage } = await execute(queryGetPage, { variables: { by: { id } }, executor: graphQLExecutor() })

	if (!getPage) {
		return {
			notFound: true,
		}
	}

	return { getPage }
}
