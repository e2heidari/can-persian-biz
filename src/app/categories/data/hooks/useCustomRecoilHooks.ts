import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
    selectedNameState,
    instDataState,
    selectedCategoryIconState,
    iconsVisibleState,
    sortAscendingState,
    sortDescendingState,
    jsonLengthsState,
    activeState,
    savedItemsState,
    addItemSelector,
    removeItemSelector,
} from './recoilState'

export const useSelectedName = () => useRecoilState(selectedNameState)
export const useInstData = () => useRecoilState(instDataState)
export const useSelectedCategoryIcon = () =>
    useRecoilState(selectedCategoryIconState)
export const useIconsVisible = () => useRecoilState(iconsVisibleState)
export const useSortAscending = () => useRecoilState(sortAscendingState)
export const useSortDescending = () => useRecoilState(sortDescendingState)
export const useJsonLengths = () => useRecoilState(jsonLengthsState)
export const useActive = () => useRecoilState(activeState)
export const useSavedItems = () => useRecoilState(savedItemsState)
export const useAddItem = () => useSetRecoilState(addItemSelector)
export const useRemoveItem = () => useSetRecoilState(removeItemSelector)
