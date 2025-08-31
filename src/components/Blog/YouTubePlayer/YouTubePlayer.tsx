import YouTube, { type YouTubeEvent } from 'react-youtube'

export default function YouTubePlayer() {
	const opts = {
		height: '649',
		width: '608',
		playerVars: {
			autoplay: 0,
		},
	}

	const onReady = (event: YouTubeEvent) => {
		event.target.pauseVideo()
	}

	return <YouTube videoId='WFcQJAIFyXk' opts={opts} onReady={onReady} />
}
