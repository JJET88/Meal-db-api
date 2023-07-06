import React from 'react'

const Meal = ({item}) => {

  return (
    <div>
      <div className=' shadow w-72 '>
        <div>
          <img className=' w-[150px] h-[150px] rounded shadow ' src={item.strMealThumb}  />
          <p className=' text-gray-500 text-center font-xl ' >{item.strMeal}</p>
        </div>
        <div>
          <button className=' bg-blue-500 py-2 px-5 rounded mr-3 '>Add to Cart</button>
          <button className=' bg-blue-500 py-2 px-5 rounded '>Detail</button>
        </div>
      </div>
    </div>
  )
}

export default Meal