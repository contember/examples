import * as React from 'react'
import { Box, DetailScope, DisplayTextField, FieldContainer, ImageFieldView, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Sponsor detail
			</Title>
			<DetailScope entity="Sponsor(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/sponsor/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Sponsors
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/sponsor/edit(id: $entity.id)">
						Edit sponsor
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<FieldContainer label="Image" labelPosition="labelLeft">
									<ImageFieldView
										srcField="logo.url"
										formatUrl={srcFieldValue => getImageResizeUrl(srcFieldValue, { width: 100 })}
										width={100}
									/>
								</FieldContainer>
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
