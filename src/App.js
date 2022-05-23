import { useState, useEffect} from 'react'
import Table from './components/Table';
import './scss/styles.scss';
import './axios/index.js'
import { getOrdersList, getUsersList } from './axios/request.js'
import ButtonFilter from './components/ButtonFilter';
import FormCustom from './components/FormCustom';

function App() {
  const [ordersList, setOrdersList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [filterList, setFilterList] = useState('users');
  
  //order list
  const loadOrdersList = async ()=>{
    try {
      const result = await getOrdersList();
      console.log(result)
      if(result)
        setOrdersList(result)
    } catch (error) {
      console.log({errorRequest: error})
    }
  }

  //user list
  const loadUsersList = async ()=>{
    try {
      const result = await getUsersList();
      console.log(result);
      if(result)
        setUsersList(result)
    } catch (error) {
      console.log({errorRequest: error})
    }
  }

  //set filter
  const selectFilter = (filter)=>{
    setFilterList(filter);
  }

  //load both users's and orders's list 
  useEffect(() => {
    loadOrdersList();
    loadUsersList();
  }, [])
  
  //console when changes on ordersList
  useEffect(() => {
    console.log({ordersList: ordersList})
  }, [ordersList])

  //console when changes on usersList
  useEffect(() => {
    console.log({usersList: usersList})
  }, [usersList])
  
  //console when changes on filterList
  useEffect(() => {
    console.log({filterList: filterList})
  }, [filterList])
  return (
    <div className="App">
      <div id='buttonDiv'>
        <ButtonFilter title="users" callback={selectFilter}/>
        <ButtonFilter title="orders" callback={selectFilter}/>
      </div>
      
      <Table data={filterList==="users" ? usersList: ordersList} filter={filterList}/>
      <FormCustom ordersList={ordersList} usersList={usersList}/>
    </div>
  );
}

export default App;
