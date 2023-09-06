import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {
    

    const productos = [{ id: 1, title: "moto", category: 1 }, { id: 2, title: "campera", category: 2 }, { id: 3, title: "casco", category: 3 }]

    return (
        <ItemList productos={productos}></ItemList>
    )
}

export default ItemListContainer