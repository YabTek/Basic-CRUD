import React from 'react'
import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { css } from '@emotion/css'


import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
  } from 'styled-dropdown-component';
  import { add_Employee,delete_Employee } from '../redux/actions/empAction';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    Box,
    Flex,
    Heading,
    
  } from 'rebass/styled-components'
  import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
  import EditIcon from '@mui/icons-material/Edit';

const Items = () => {
    const [hidden, setHidden] = useState(true);
    let data  = useSelector((state)=>state.listData)
    const dispatch = useDispatch()

  return (
   
    <div className={css`
    margin: 60px; `}>{
        data.map((emp,k) => (
      <Flex className={css`
      border: 1px solid #ccc;
      border-radius: 10px;
      height: 90px;
      `} key = {k} alignItems='center' px={3} py={4} bg = 'primary'>
         <Heading>{emp.firstname}</Heading>

     <Dropdown>
      <button  className={css`
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 1px;
      margin-left: 20px;
      background-color: #ddd`} dropdowntoggle = "true" onClick={() => setHidden(!hidden)}>
        <ArrowDropDownIcon/>
      </button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(hidden)}>
        <DropdownItem>age:{emp.age}</DropdownItem>
        <DropdownItem>gender:{emp.gender}</DropdownItem>
        <DropdownItem>height:{emp.height}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  <Box sx={{
    mx: 'auto',
    px: 3,
  }} />

    <EditIcon/>

  <DeleteForeverOutlinedIcon className = {css`
  color:red;
  margin-left: 12px;
  `} 
  onClick={()=>dispatch(delete_Employee(emp.id))}/>
</Flex>))}

    </div>
  )
}

export default Items
