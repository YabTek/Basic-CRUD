import React from 'react'
import {useState} from 'react'
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
  } from 'styled-dropdown-component';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    Box,
    Flex,
    Heading,
    
  } from 'rebass/styled-components'
  import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
  import EditIcon from '@mui/icons-material/Edit';
  import { useSelector } from 'react-redux';

const Item = () => {
    const [hidden, setHidden] = useState(true);
    let data  = useSelector((state)=>state.listData)
    console.log('data in list',data)
  return (
   
  
    <div>{
        data.map((emp) => (
      <Flex alignItems='center' px={3} py={4} bg = 'primary'>
         <Heading>{emp.firstname}</Heading>

     <Dropdown>

      <button  dropdownToggle onClick={() => setHidden(!hidden)}>

        <ArrowDropDownIcon/>
      </button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
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
  <DeleteForeverOutlinedIcon/>
</Flex>))}

    </div>
  )
}

export default Item
