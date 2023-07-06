import React from 'react'
import {SiFoodpanda} from 'react-icons/si';
import {FaBowlFood} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CustomProvider } from '../StateContent';

const Nav = () => {
  const {search,setSearch} = CustomProvider()
  return (
    <div className=' flex justify-around'>
        <Link to={'/'}>
          <SiFoodpanda className='text-3xl'/>
        </Link>
        <div>

        <input value={search} onClick={(e)=>setSearch(e.target.value)} type="text" className=' shadow border-b-cyan ' />
        <div>
          <FaBowlFood/>
          <span>0</span>
        </div>
        </div>
    </div>
  )
}

export default Nav
