import React, { useState } from 'react'


const Card = (props) => {
    const [amount, setAmound]=useState(0)
    const increment = () => {
        setAmound(amount+1)
    }
    const decrement = () => {
        setAmound(amount-1)
    }
  return (
    <div className='card'>
        {props.item.new?
        <div className='card__new'>Новинка</div>:<div></div>
        }
        {props.item.sale>0?
        <div className='card__sale'>-{props.item.sale} %</div>:<div></div>
        }
        <div className='card__img-container'>
            <img src={props.item.img} alt='' className='card__img'/>
        </div>
        <div className='card__ui'>
            <div className='card__more'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="10" viewBox="0 0 32 10" fill="none">
                    <path d="M-8.19564e-08 5.94345L32 5.94345V3.94345L8.19564e-08 3.94345L-8.19564e-08 5.94345ZM26.9802 9.53917L31.9686 5.95234L30.801 4.32853L25.8126 7.91535L26.9802 9.53917ZM25.7845 1.85047L30.7616 5.53344L31.9512 3.92576L26.9742 0.242787L25.7845 1.85047Z" fill="black"/>
                </svg>
            </div>
            <div className='card__price'>{props.item.price} руб</div>
            <div className='card__amount'>
                <div className='card__button' onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.950684 0.27124H32.9507V32.2712H0.950684V0.27124ZM2.83304 2.21063V30.3318H31.0683V2.21063H2.83304Z" fill="black"/>
                    <path d="M12.2097 15.4966H22.1981V17.4943H12.2097V15.4966Z" fill="black"/>
                    </svg>
                </div>
                <div>{amount}</div>
                <div className='card__button  card__plus' onClick={decrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.939087 0.27124H32.9391V32.2712H0.939087V0.27124ZM2.82144 2.21063V30.3318H31.0567V2.21063H2.82144Z" fill="black"/>
                    <path d="M18.7295 11.4966V21.4966H16.7295L16.7295 11.4966H18.7295Z" fill="black"/>
                    <path d="M12.7365 15.4919H22.7365V17.4919H12.7365V15.4919Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='card__name'>{props.item.name}</div>
        
    </div>
  )
}

export default Card