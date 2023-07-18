import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BadgeCheckIcon, CalendarDaysIcon, CandlestickChartIcon, ShieldOffIcon, SirenIcon, UserIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShieldOffIcon />
			<>
				Incidents
			</>
		</Stack>}
			to="admin/incident/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BadgeCheckIcon />
			<>
				Audits
			</>
		</Stack>}
			to="admin/audit/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<SirenIcon />
			<>
				Policies
			</>
		</Stack>}
			to="admin/policy/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CandlestickChartIcon />
			<>
				Procedures
			</>
		</Stack>}
			to="admin/procedure/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarDaysIcon />
			<>
				Training Programs
			</>
		</Stack>}
			to="admin/trainingProgram/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Employees
			</>
		</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('complianceOfficer')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShieldOffIcon />
			<>
				Incidents
			</>
		</Stack>}
			to="complianceOfficer/incident/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BadgeCheckIcon />
			<>
				Audits
			</>
		</Stack>}
			to="complianceOfficer/audit/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<SirenIcon />
			<>
				Policies
			</>
		</Stack>}
			to="complianceOfficer/policy/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CandlestickChartIcon />
			<>
				Procedures
			</>
		</Stack>}
			to="complianceOfficer/procedure/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarDaysIcon />
			<>
				Training Programs
			</>
		</Stack>}
			to="complianceOfficer/trainingProgram/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UserIcon />
			<>
				Employees
			</>
		</Stack>}
			to="complianceOfficer/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('employee')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<ShieldOffIcon />
			<>
				Incidents
			</>
		</Stack>}
			to="employee/incident/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<BadgeCheckIcon />
			<>
				Audits
			</>
		</Stack>}
			to="employee/audit/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<SirenIcon />
			<>
				Policies
			</>
		</Stack>}
			to="employee/policy/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CandlestickChartIcon />
			<>
				Procedures
			</>
		</Stack>}
			to="employee/procedure/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<CalendarDaysIcon />
			<>
				Training Programs
			</>
		</Stack>}
			to="employee/trainingProgram/list"
		/>
	</HasRole>
</Menu>)
