'use client'
import React, { useContext } from 'react'
import { MerchandiseType, useContextProvider } from './glob-context'

function ClientSubmit({ merchandise, cart }: { merchandise: MerchandiseType, cart?: boolean }) {
    const { selectProduct, setSelectProductList } = useContextProvider()
    const joinCart = () => {
        if(!cart) setSelectProductList( [...selectProduct, merchandise])

        if(cart) setSelectProductList( selectProduct.filter(keys => keys.id !== merchandise.id))
    }

    return (
        <button className="btn btn-primary btn-sm" onClick={joinCart}>{cart?"删除": "购买"}</button>
    )
}

export default React.memo(ClientSubmit)