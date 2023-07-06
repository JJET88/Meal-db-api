import React from 'react'
import { CustomProvider } from '../StateContent'
import Meal from './Meal'

const Meals = () => {
  const {state:{meal}} = CustomProvider()
  return (
    <div className=' flex flex-wrap gap-10 mt-10'>
      {meal.map(item=>{
      return <div key={item.idMeal}>
        <Meal item={item}/>
      </div>
    })}</div>
  )
}

export default Meals