import styled from '@emotion/styled'
import { css } from '@emotion/css'
import { add_Employee,delete_Employee } from './redux/actions/empAction';
import { useDispatch,useSelector } from 'react-redux';
import { Employee_list } from './redux/actions/listAction';
import Item from './Item';
import {Heading,Card} from 'rebass/styled-components'
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

function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.employeeData)
  console.log('data in Count',counter)
  let data  = useSelector((state)=>state.listData)
  console.log('data in list',data)

  const product = {
    name: "abe",
    price: "1222"
  }
  useEffect(()=>{
       dispatch(Employee_list())
  },[])

  return (
    <>
      <h1 className={css`
       text-align: center;
       padding: 16px;
       background-color: green;
       border-radius: 8px;
       font-size: 32px;
       `}>
       Employee control app</h1>
        
      <Add onClick={()=>dispatch(add_Employee(product))}>Add employee</Add>
      < Count>count: {counter.length}</Count>

      <Card  className={css`
       color: white;
       padding: 16px;
       background-color: hotpink;
       border-radius: 8px;
       font-size: 30px;
       `}>
  <Heading>Card</Heading>
</Card>
<Delete onClick={()=>dispatch(delete_Employee(product.name))}>Delete employee</Delete>
<Item/>


  
    </>
  )}

  export default App