'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

export type MerchandiseType = {
    id: string;
    photos: string;
    name: string;
    description: string;
    price: number
}

export type MerchandiseListType = {
    selectProduct: MerchandiseType[]
    setSelectProductList: (data: MerchandiseType[]) => void
}

export const MerchandiseContext = createContext<MerchandiseListType>({
    selectProduct: [],
    setSelectProductList: () : MerchandiseType[] => []
})

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [selectProduct, setSelectProduct] = useState<MerchandiseType[]>([]);

    const setSelectProductList = (data: MerchandiseType[]) => {
        setSelectProduct(data);
    }

    return <MerchandiseContext.Provider value={{
        selectProduct, setSelectProductList
    }}>
        {children}
    </MerchandiseContext.Provider>
}

export const useContextProvider = () => useContext(MerchandiseContext)