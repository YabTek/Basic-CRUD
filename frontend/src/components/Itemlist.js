import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Items from './Items';

const Itemlist = () => {
  let fetchedData  = useSelector((state)=>state.employeeReducer)
console.log(fetchedData)
  return (
    <div>
      {fetchedData.map((emp)=> <Items key = {emp.id} emp = {emp}/>)}
    </div>
  )
}

export default Itemlist
