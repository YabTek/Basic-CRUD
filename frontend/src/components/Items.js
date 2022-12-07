import {React,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { css } from '@emotion/css'
import { Dropdown, DropdownItem, DropdownMenu} from 'styled-dropdown-component';
import { delete_Employee,update_Employee } from '../redux/actions/employeeAction';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Box,Flex,Heading} from 'rebass/styled-components'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
  
const Items = ({emp}) => {
    const [hidden, setHidden] = useState(true);
    const [firstname,setFirstname] = useState(emp.firstname);    
    const [lastname,setLastname] = useState(emp.lastname);
    const [age,setAge] = useState(emp.age);
    const [gender,setGender] = useState(emp.gender);
    const [height,setHeight] = useState(emp.height);

    const [update,setUpdate] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = async (emp) => {
      await fetch(`http://localhost:3500/employee/${emp.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
      dispatch(delete_Employee({id: emp.id}))

    }

  const handleUpdate =  async(emp) => {
    if(update){
      await fetch(`http://localhost:3500/employee/${emp.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          firstname : firstname,
          lastname: lastname,
          age: age,
          gender: gender,
          height: height
      }
        ),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        
      });
      setFirstname(emp.firstname)
      setLastname(emp.lastname)
      setAge(emp.age)
      setGender(emp.gender)
      setHeight(emp.height)
     
      dispatch(update_Employee({
        ...emp,
        firstname:firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        height: height
      }))
     
    }
    setUpdate(!update)

     
   

    }
     
  
  
  return (
    <div className={css`
    margin: 40px 60px; `}>
      <Flex className={css`
      border: 1px solid #ccc;
      border-radius: 10px;
      height: 85px;
      `} alignItems='center' px={3} py={4} bg = 'primary'>
        <Flex>
        <Heading>{emp.firstname}</Heading>
        <Heading  px={2} >{emp.lastname}</Heading>
        </Flex>
         

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
  { update?  (
    <div>
     <input placeholder='firstname'  value = {firstname} onChange = {(e) => setFirstname(e.target.value)}/>
     <input placeholder='lastname' value = {lastname} onChange = {(e) => setLastname(e.target.value)}/>
     <input placeholder = 'age' value = {age} onChange = {(e) => setAge(e.target.value)}/>
     <input placeholder = 'gender' value = {gender} onChange = {(e) => setGender(e.target.value)}/>
     <input placeholder = 'height' value = {height} onChange = {(e) => setHeight(e.target.value)}/>
</div>
     ) : ("")}
 
  <EditIcon onClick = {()=>handleUpdate(emp)}/>
 
  <DeleteForeverOutlinedIcon className = {css`
  color:red;
  margin-left: 12px;
  `} onClick = {() => handleDelete(emp)}/>
  {/* // onClick={()=>dispatch(delete_Employee({id: emp.id}))} */}
</Flex>

    </div>
  )
}

export default Items
