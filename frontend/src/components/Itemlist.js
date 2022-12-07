import React from 'react'
import { useSelector } from 'react-redux';
import Items from './Items';

const Itemlist = () => {
  let fetchedData  = useSelector((state)=>state.employeeReducer)
  return (
    <div>
      {fetchedData.map((emp)=> <Items key = {emp.id} emp = {emp}/>)}
    </div>
  )
}

export default Itemlist
