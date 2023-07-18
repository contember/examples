import * as React from 'react'
import { Box, DetailScope, DisplayTextField, FieldContainer, ImageFieldView, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Speaker detail
			</Title>
			<DetailScope entity="Speaker(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/speaker/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Speakers
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/speaker/edit(id: $entity.id)">
						Edit speaker
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="bio" label="Bio" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<FieldContainer label="Image" labelPosition="labelLeft">
									<ImageFieldView
										srcField="photo.url"
										formatUrl={srcFieldValue => getImageResizeUrl(srcFieldValue, { width: 100 })}
										width={100}
									/>
								</FieldContainer>
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
