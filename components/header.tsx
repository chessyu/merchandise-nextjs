'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useContextProvider } from './glob-context'


function HeaderPage(props: any) {
    const pathname = usePathname()
    const { selectProduct } = useContextProvider()
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 w-full fixed z-10">
            <li> <Link href={"/"} className={pathname === "/" ? 'group active' : ""} children="商品列表" /></li>
            <li> <Link href={"/cart"} className={`${pathname === "/cart" ? 'group active' : ""} indicator`} children={
                <>
                    <span className="indicator-item badge badge-secondary">{selectProduct.length}</span>
                    购物车
                </>
            } /></li>
        </ul>
    )
}

export default HeaderPage