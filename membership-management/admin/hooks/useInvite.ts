import { GQLVariable, InviteMethod, MembershipInput, useSingleTenantMutation } from '@contember/admin'

const INVITE_MUTATION = `
invite(
	email: $email,
	projectSlug: $projectSlug,
	memberships: $memberships,
	options: { method: $method },
) {
	ok
		error {
		code
	}
		result {
		isNew
			person {
			email
			id
				identity {
				id
			}
		}
	}
}
`

const inviteVariables = {
	projectSlug: GQLVariable.Required(GQLVariable.String),
	email: GQLVariable.Required(GQLVariable.String),
	memberships: GQLVariable.Required(GQLVariable.List(MembershipInput)),
	method: GQLVariable.Enum<InviteMethod>('InviteMethod'),
}

export type InviteErrorCodes = 'PROJECT_NOT_FOUND' | 'ALREADY_MEMBER' | 'INVALID_MEMBERSHIP'

export const useInvite = () => {
	return useSingleTenantMutation<{ isNew: boolean; person: { id: string; identity: { id: string } } }, InviteErrorCodes, typeof inviteVariables>(
		INVITE_MUTATION,
		inviteVariables,
	)
}
