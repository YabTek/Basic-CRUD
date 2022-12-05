import styled from '@emotion/styled'
import { add_Employee,delete_Employee } from '../redux/actions/employeeAction';
import { useDispatch,useSelector } from 'react-redux';
import { Employee_list } from '../redux/actions/employeeAction';
import { useEffect,useState } from 'react';
import { css } from '@emotion/css';


const Add = styled.button`
     color: white;
     background-color: green;
     font-weight: bold;
     font-size: 30px;
     border-radius: 5px;
     border: none;
     height: 60px;
     width: 280px;
     margin-left: 180px;
     margin-top: 20px;
`;
const Input = styled.input`
width: 280px;
margin-top: 10px;
margin-left: 180px;
display: flex;
display-direction: column;
`;
const Count = styled(Add)`
     width: 150px;
`;



function Inputs() {

  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");
  const [height,setHeight] = useState("");

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.employeeReducer)
  console.log('data in Count',counter)
  let data  = useSelector((state)=>state.employeeReducer)
  console.log('data in list',data)

 
  // useEffect(()=>{
  //      dispatch(Employee_list())
  // })
 const handleClick = () => {
       dispatch(add_Employee({
        firstname: firstname,
        lastname: lastname,
        age: age,
        id: Math.random(),
        gender: gender,
        height: height
       }))
  }

  return (
    <>
    <div  className={css`
    display: flex;
    `}>
        <div >
    <Input placeholder='firstname' onChange = {(e) => setFirstname(e.target.value)}/>
    <Input placeholder='lastname' onChange = {(e) => setLastname(e.target.value)}/>
    <Input placeholder = 'gender' onChange = {(e) => setAge(e.target.value)}/>
    <Input placeholder = 'age' onChange = {(e) => setGender(e.target.value)}/>
    <Input placeholder = 'height' onChange = {(e) => setHeight(e.target.value)}/>

      <Add className = "btn btn-primary" onClick={handleClick}>Add employee</Add>
    </div>
    <div>
      < Count>count:{counter.length}</Count>
    </div>
    </div>
    </>
  )}

  export default Inputs