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
            <div className='card__price'>{props.item.price} руб.</div>
            <div className='card__amount'>
                <div className='card__button' onClick={increment}>+</div>
                <div>{amount}</div>
                <div className='card__button' onClick={decrement}>-</div>
            </div>
        </div>
        <div className='card__name'>{props.item.name}</div>
        
    </div>
  )
}

export default Card