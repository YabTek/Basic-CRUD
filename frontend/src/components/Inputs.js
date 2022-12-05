import styled from '@emotion/styled'
import { add_Employee,delete_Employee } from '../redux/actions/empAction';
import { useDispatch,useSelector } from 'react-redux';
import { Employee_list } from '../redux/actions/listAction';
import { useEffect } from 'react';


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
const Count = styled(Add)`
     width: 230px;
     margin-left: 350px;
`;
const Delete = styled(Add)`
width: 220px;
background-color: red;
`

function Inputs() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.employeeData)
  console.log('data in Count',counter)
  let data  = useSelector((state)=>state.listData)
  console.log('data in list',data)

 
  useEffect(()=>{
       dispatch(Employee_list())
  },[])

  return (
    <>
      <Add onClick={()=>dispatch(add_Employee())}>Add employee</Add>
      < Count>count: {counter.length}</Count>
    </>
  )}

  export default Inputs