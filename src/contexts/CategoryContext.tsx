import type { ProductCategories } from '@/components/Shop/Shop'
import { useState, createContext, useContext, type ReactNode, useCallback } from 'react'

interface ICategoryContext {
	selectedCategory: ProductCategories
	handleSelectedCategory: (e: React.MouseEvent<HTMLButtonElement>) => void
}
interface ICategoryContextProviderProps {
	children: ReactNode
}

const CategoryContext = createContext<ICategoryContext>({
	selectedCategory: 'random',
	handleSelectedCategory: () => {},
})

export const CategoryContextProvider = ({ children }: ICategoryContextProviderProps) => {
	const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('random')

	const handleSelectedCategory = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedCategory(e.currentTarget.value as ProductCategories)
	}, [])

	return (
		<CategoryContext.Provider value={{ selectedCategory, handleSelectedCategory }}>
			{children}
		</CategoryContext.Provider>
	)
}

export const useCategoryContext = () => {
	const context = useContext(CategoryContext)
	if (!context) {
		throw new Error('useCategoryContext must be used within a CategoryContextProvider')
	}
	return context
}
