type ImageResizeOptions = {
	width?: number
	height?: number
	blur?: number
	quality?: number
}

export function getImageResizeUrl(src: string, resizeOptions: ImageResizeOptions) {
	const url = new URL(src)
	const urlOptions = Object.keys(resizeOptions).map(key => `${key}=${resizeOptions[key as keyof ImageResizeOptions]}`).join(',')

	return `${url.protocol}//${url.hostname}/cdn-cgi/image/${urlOptions}${url.pathname}`
}
