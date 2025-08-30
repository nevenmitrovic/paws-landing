import { useCallback, useEffect, useRef, useState } from 'react'

export default function useLayer() {
	const ref = useRef<null | HTMLElement>(null)
	const [showLayer, setShowLayer] = useState(false)
	const toggleLayer = useCallback(() => setShowLayer((prev) => !prev), [])

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('mouseenter', toggleLayer)
			ref.current.addEventListener('mouseleave', toggleLayer)
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('mouseenter', toggleLayer)
				ref.current.removeEventListener('mouseleave', toggleLayer)
			}
		}
	}, [toggleLayer])

	return { ref, showLayer }
}
