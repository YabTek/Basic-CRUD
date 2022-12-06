import styled from '@emotion/styled'
import { add_Employee,delete_Employee } from '../redux/actions/employeeAction';
import { useDispatch,useSelector } from 'react-redux';
import { Employee_list } from '../redux/actions/employeeAction';
import { useEffect,useState } from 'react';
import { css } from '@emotion/css';
import { ControlPointDuplicateRounded } from '@mui/icons-material';


const Add = styled.button`
     color: white;
     background-color: green;
     font-weight: bold;
     font-size: 30px;
     border-radius: 5px;
     border: none;
     height: 50px;
     width: 270px;
     margin-left: 260px;
     margin-top: 20px;
`;
const Input = styled.input`
width: 280px;
margin-top: 10px;
margin-left: 250px;
display: flex;
display-direction: column;
`;
const Count = styled(Add)`
     width: 300px;
     background-color: #ccc;
     color: black;
     font-size: 20x;
`;



function Inputs() {

  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");
  const [height,setHeight] = useState("");
  const [postData,setPostdata] = useState("");
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.employeeReducer)
  console.log('data in Count',counter)
  let data  = useSelector((state)=>state.employeeReducer)
  console.log('data in list',data)
  let value = counter.length > 1? "employees" : "employee"
 
  // useEffect(()=>{
  //      dispatch(Employee_list())
  // })
 const handleClick = async() => {
  
    const response = await fetch('http://localhost:3500/employee', {
      method: 'POST',
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

    const result = await response.json();
    console.log('result is: ', JSON.stringify(result, null, 4));
    setPostdata(result);
    dispatch(add_Employee({
      firstname, lastname, age, gender, height
     }))
   
};



      //  dispatch(add_Employee({
      //   firstname, lastname, age, gender, height
      //  }))
      //  setFirstname("")
      //  setLastname("")
      //  setAge("")
      //  setGender("")
      //  setHeight("")
  

  return (
    <>
    <div  className={css`
    display: flex;
    `}>
      <div> 
    <Input placeholder='firstname'  value = {firstname} onChange = {(e) => setFirstname(e.target.value)}/>
    <Input placeholder='lastname' value = {lastname} onChange = {(e) => setLastname(e.target.value)}/>
    <Input placeholder = 'age' value = {age} onChange = {(e) => setAge(e.target.value)}/>
    <Input placeholder = 'gender' value = {gender} onChange = {(e) => setGender(e.target.value)}/>
    <Input placeholder = 'height' value = {height} onChange = {(e) => setHeight(e.target.value)}/>

      <Add  onClick={handleClick}>Add employee</Add>
    </div>
    <div>
      < Count>Count: {counter.length} {value} </Count>
    </div>
    </div>
    </>
  )};

  export default Inputs