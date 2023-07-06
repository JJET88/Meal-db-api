import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";

 
 const StateContext = createContext()

 export const StateContextProvider = ({children})=>{
    const [meals,setMeals] = useState([])
    const [search,setSearch] = useState('')
    useEffect(()=>{
        fetchApi()
    },[])

    useEffect(()=>{
        dispatch({type:"GET-MEAL",payload:meals})
        const searchMeal = meals.filter(meal=>meal.strMeal.toLowerCase().includes(search))
        dispatch({type:"GET-MEAL",payload:searchMeal})
    },[meals,search])

    const fetchApi = async()=>{
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        const {meals} = await api.json()
        console.log(meals);
        setMeals(meals)
    }

    const initialState={
        meal:[],
        cart:[]
    }
    const [state,dispatch] =useReducer(reducer,initialState)

    const data = {state,dispatch,search,setSearch}
     return <StateContext.Provider value={data}>
         {children}
     </StateContext.Provider>

 }

 export const CustomProvider = ()=> useContext(StateContext)