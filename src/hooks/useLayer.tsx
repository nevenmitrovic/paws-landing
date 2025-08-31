import { useCallback, useEffect, useRef, useState } from 'react'
import { useIsMobile } from './useIsMobile'

const openedLayer = new Set<string>()

export default function useLayer(layerId: string) {
	const ref = useRef<null | HTMLDivElement>(null)
	const [showLayer, setShowLayer] = useState(false)
	const isMobile = useIsMobile()

	const openLayer = useCallback(() => {
		openedLayer.add(layerId)
		setShowLayer(true)
	}, [layerId])

	const closeLayer = useCallback(() => {
		openedLayer.delete(layerId)
		setShowLayer(false)
	}, [layerId])

	const toggleLayer = useCallback(() => {
		if (openedLayer.has(layerId)) {
			closeLayer()
		} else {
			openLayer()
		}
	}, [layerId, openLayer, closeLayer])

	const isRefElement = useCallback((target: EventTarget) => {
		return ref.current !== null && ref.current.contains(target as Node)
	}, [])

	const handleClick = useCallback(
		(event: MouseEvent) => {
			const target = event.target as HTMLElement

			if (target.tagName === 'BUTTON' || target.closest('button')) {
				return
			}

			if (isRefElement(event.target as EventTarget)) {
				toggleLayer()
			} else {
				closeLayer()
			}
		},
		[isRefElement, toggleLayer, closeLayer]
	)

	useEffect(() => {
		const element = ref.current
		if (!element) return

		if (!isMobile) {
			element.addEventListener('mouseenter', openLayer)
			element.addEventListener('mouseleave', closeLayer)
		} else {
			element.addEventListener('click', handleClick)
		}

		return () => {
			if (!isMobile) {
				element.removeEventListener('mouseenter', openLayer)
				element.removeEventListener('mouseleave', closeLayer)
			} else {
				element.removeEventListener('click', handleClick)
			}
		}
	}, [isMobile, openLayer, closeLayer, handleClick])

	return { ref, showLayer }
}
