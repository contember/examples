export const graphQLExecutor = (token?: string) => {
	return async (request: string, variables: object) => {
		if (!process.env.CONTEMBER_CONTENT_URL) throw new Error('You must define CONTEMBER_CONTENT_URL.')

		const response = await fetch(process.env.CONTEMBER_CONTENT_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token ?? process.env.CONTEMBER_CONTENT_PUBLIC_TOKEN}`,
			},
			body: JSON.stringify({
				query: request,
				variables,
			}),
		})
		return await response.json()
	}
}
