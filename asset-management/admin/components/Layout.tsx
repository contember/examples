import { Button, DialogProvider, Link, LogoutLink, PortalProvider, Scheme, Stack, VisuallyHidden } from '@contember/admin'
import { Identity2023 } from '@contember/brand'
import { SafeAreaInsetsProvider } from '@contember/layout'
import { ColorSchemeProvider, useContainerWidth, useReferentiallyStableCallback, useSessionStorageState } from '@contember/react-utils'
import { colorSchemeClassName, contentThemeClassName, controlsThemeClassName } from '@contember/utilities'
import { CircleDashedIcon, LogOutIcon, MoonIcon, SunIcon } from 'lucide-react'
import { PropsWithChildren, memo } from 'react'
import { LAYOUT_BREAKPOINT } from './Constants'
import { useDirectives } from './Directives'
import { LayoutComponent } from './LayoutComponent'
import { SlotSources } from './Slots'
import { Navigation } from './Navigation'

export const Layout = memo(({ children }: PropsWithChildren) => {
	const directives = useDirectives()
	const width = useContainerWidth()

	const [scheme, setScheme] = useSessionStorageState<Scheme>(
		'contember-admin-sandbox-scheme',
		scheme => scheme ?? 'system',
	)

	return (
		<SafeAreaInsetsProvider>
			<ColorSchemeProvider scheme={scheme}>
				<LayoutComponent
					className={[
						colorSchemeClassName(scheme),
						contentThemeClassName(directives['layout.theme-content']),
						controlsThemeClassName(directives['layout.theme-controls']),
					]}
				>
					<SlotSources.Logo>
						<Link to="index">
							<Stack align="center" direction="horizontal" gap="small">
								<Identity2023.Edit scale={2} />
								<VisuallyHidden hidden={width < LAYOUT_BREAKPOINT}>Asset Management</VisuallyHidden>
							</Stack>
						</Link>
					</SlotSources.Logo>

					<SlotSources.Switchers>
						<Button
							size="small"
							elevation="none"
							distinction="seamless"
							active={!scheme.match(/system/)}
							flow="circular"
							onClick={useReferentiallyStableCallback(() => {
								setScheme(scheme => (scheme.match(/light/) ? 'dark' : scheme.match(/dark/) ? 'system' : 'light'))
							})}
							aria-label={scheme.match(/light/) ? 'Light mode, switch to dark mode' : scheme.match(/dark/) ? 'Dark mode, switch to light mode' : 'System mode, switch to system mode'}
						>
							{scheme.match(/light/) ? <SunIcon /> : scheme.match(/dark/) ? <MoonIcon /> : <CircleDashedIcon />}
						</Button>
					</SlotSources.Switchers>

					{Navigation && (
						<SlotSources.Navigation>
							<Navigation />
						</SlotSources.Navigation>
					)}

					<SlotSources.Profile>
						<LogoutLink>
							<Stack align="center" direction="horizontal" gap="small">
								<LogOutIcon /> Logout
							</Stack>
						</LogoutLink>
					</SlotSources.Profile>

					<SlotSources.FooterCenter>
						<p><small>Created with <a className="content-link" href="https://www.contember.com/">AI-assisted Contember Studio</a></small></p>
					</SlotSources.FooterCenter>

					{children}
				</LayoutComponent>
			</ColorSchemeProvider>
		</SafeAreaInsetsProvider>
	)
})
Layout.displayName = 'Layout'
