import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

const ItemList = ({productos}) => {
    const {categoryId} = useParams()

    const filtrados = productos.filter(p => p.category == categoryId )
  return (
    <div>
   {filtrados.map(e => {
    return(
        <Item key={e.id} producto={e}/>
    )
   })}
   </div>
  )
}

export default ItemList