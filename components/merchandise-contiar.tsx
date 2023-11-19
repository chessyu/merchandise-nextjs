import React from 'react'
import MeerchandisePage from './merchandise'
import { MerchandiseType } from './glob-context';

async function MerchandiseContiar() {

    const res = await fetch('https://staging.api.1m.app/api/merchants/merchandises?merchantUserName=wokcano_tustin');
    const resdata = await res.json();
    const { merchandises }: { merchandises: MerchandiseType[] } = resdata;

    return (
        <div className=' flex flex-wrap justify-center gap-4'>
            {
                merchandises.map(keys => <React.Fragment key={keys.id}>
                    <MeerchandisePage id={keys.id}
                        photos={keys.photos?.[0] || ""}
                        name={keys.name}
                        description={keys.description}
                        price={keys.price}
                    />
                </React.Fragment>)
            }
        </div>
    )
}

export default MerchandiseContiar

