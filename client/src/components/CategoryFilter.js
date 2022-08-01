import React, { useContext } from 'react'
import { AllItemsContext } from './AllItemsContext'


const CategoryFilter = (params) => {
const {items} =useContext(AllItemsContext);
const category = items.filter((item) => {
    return item.category.toLowerCase() === params.toLowerCase();
    // console.log(item)
})
  return category
}

export default CategoryFilter