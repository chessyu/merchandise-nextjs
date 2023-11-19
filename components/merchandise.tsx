import React from 'react'
import { MerchandiseType } from './glob-context'
import Image from 'next/image';
import ClientSubmit from './client-submit';

type MeerchandisePagePropsType = MerchandiseType & {
  isCart?: boolean
}

function MeerchandisePage(props: MeerchandisePagePropsType) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className=' h-60 overflow-hidden'>
        {
          props.photos ?
            <Image alt={props.name} src={props.photos} objectFit="cover"
              sizes='(max-width: 480px) 100% , (max-width: 720px) 50%, 33%'
              quality={80}
              width={384}
              height={227}
            /> : 
            <div className=" h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        }
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <div className="badge text-red-500 font-bold">￥{Number(props.price).toFixed(2)}</div>
          <ClientSubmit merchandise={props} cart={props.isCart} />
        </div>
      </div>
    </div>

  )
}

export default MeerchandisePage