import React from 'react'
import Card from './Card'


const Cards = () => {
    const cards = [
        {id:1, name:'Десерт овсяный с вишней «Nemoloko»', img:'./img/nemoloko.png', price:69, sale:0, new:true},
        {id:2, name:'Каша льняная «Масляный Король»', img:'./img/2.png', price:155, sale:0, new:true},
        {id:3, name:'Вареники с соевым фаршем и тофу', img:'./img/3.png', price:160, sale:0, new:false},
        {id:4, name:'Коктейль на комбуче Апероль «Royal Nut» ', img:'./img/4.png', price:180, sale:10, new:false},
    ]
  return (
    <div className='cards'>
        <div className='container'>
            <div className='cards__inner'>
                {cards.map(e =>
                    <Card item={e} id={e.id}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Cards