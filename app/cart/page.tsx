'use client'

import { useContextProvider } from '@/components/glob-context'
import MeerchandisePage from '@/components/merchandise'
import React from 'react'

function CartPage() {
    const { selectProduct } = useContextProvider()

    return (
        <main className=" p-4">
            <div className=' flex flex-wrap justify-center gap-4'>
                {
                    selectProduct.map(keys => <React.Fragment key={keys.id}>
                        <MeerchandisePage id={keys.id}
                            photos={keys.photos || ""}
                            name={keys.name}
                            description={keys.description}
                            price={keys.price}
                            isCart
                        />
                    </React.Fragment>)
                }
            </div>
        </main>
    )
}

export default CartPage