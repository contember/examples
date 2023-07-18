import { Button, ButtonOwnProps, ButtonProps, Component, EntityAccessor, Icon, RoutingLinkTarget, Stack, useDialog, useEntity, useMutationState, usePersistWithFeedback, useRedirect } from '@contember/admin'
import { ReactNode, useCallback } from 'react'

const defaultProps: ButtonOwnProps = {
	size: 'small',
	flow: 'circular',
	distinction: 'seamless',
	bland: false,
}

export type DeleteEntityButtonProps =
	& {
		immediatePersist?: true
		children?: ReactNode
		redirectOnSuccess?: RoutingLinkTarget
	}
	& ButtonProps

export const DeleteEntityButton = Component(
	(props: DeleteEntityButtonProps) => {
		const { children, immediatePersist, className, redirectOnSuccess, ...rest } = props
		const redirect = useRedirect()
		const parentEntity = useEntity()
		const triggerPersist = usePersistWithFeedback()
		const isMutating = useMutationState()
		const modal = useDialog<boolean>()

		const onClick = useCallback(async () => {
			if (props.immediatePersist) {
				const result = await modal.openDialog({
					heading: 'Delete item',
					content: ({ resolve }) => (
						<Stack direction="vertical">
							<p>Are you sure you want to delete this item?</p>
							<Stack direction="horizontal" grow>
								<Button intent="danger" onClick={() => resolve(true)}>Yes, delete item</Button>
								<Button onClick={() => resolve(false)}>Cancel, keep item</Button>
							</Stack>
						</Stack>
					),
				})

				if (!result) {
					return
				}
			}

			parentEntity.deleteEntity()

			if (props.immediatePersist && triggerPersist) {
				const persisted = await triggerPersist()

				if (persisted.type === 'justSuccess' && redirectOnSuccess) {
					redirect(redirectOnSuccess)
				}
			}
		}, [triggerPersist, props.immediatePersist, parentEntity])

		if (!(parentEntity instanceof EntityAccessor)) {
			return null
		}

		return (
			<Button
				distinction="primary"
				{...defaultProps}
				{...rest}
				disabled={isMutating || rest.disabled}
				onClick={onClick}
			>
				{children || <Icon blueprintIcon="trash" />}
			</Button>
		)
	},
	() => null,
	'DeleteEntityButton',
)
