import React, {useState, useEffect} from 'react'

const Table = ({data, filter}) => {
  const [dataList, setDataList] = useState([]);
  const [dataProperties, setDataProperties] = useState([])
  useEffect(() => {
    if(dataList)
     loadDataTable()
  }, [])

  useEffect(() => {
    console.log(filter)
  }, [filter])
  
  
  const loadDataTable = ()=>{
    if(filter==="users"){
      /*
      USERS {id, role, email, deleted}
      */
        const shortUsersList = data.map((user)=>{
          return { id: user.id, role: user.role, email: user.email, deleted: user.deleted}
        })
        setDataList(shortUsersList);
        setDataProperties(['id', 'role', 'email', 'deleted'])
    } else{
      /*
      ORDERS {id, acronym, description, createdAt, endDate, type, orderCode, orderNumber, clientId}
      */
      const shortOrdersList = data.map((order)=>{
        return { id: order.id, acronym: order.acronym, description: order.description,
          createdAt: order.createdAt, endDate: order.endDate,  clientId: order.clientId}
      })
      setDataList(shortOrdersList);
      setDataProperties(['id', 'acronym', 'description', 'created At', 'end Date', 'client Id'])
    }
    
  }

  useEffect(() => {
    console.log({data: data})
    loadDataTable()
  }, [data])
  

  return (
    <>
    <table id='table-data'>
      <thead>
        <tr>
          { 
            dataProperties.map((property)=> <th>{property}</th>)
          }
        </tr>
      </thead>
      <tbody>
      {
          dataList.map((element)=>{
            if(filter ==="users"){
              return <tr>
                <td>{element.id}</td>
                <td>{element.role}</td>
                <td>{element.email}</td>
                <td>{element.deleted===false? "false": "true"}</td>
              </tr>}
            else{
              return <tr id='element.id'>
                <td>{element.id}</td>
                <td>{element.acronym}</td>
                <td>{element.description}</td>
                <td>{element.createdAt}</td>
                <td>{element.endDate}</td>
                <td>{element.clientId}</td>
              </tr>
            }
          })
        }
      </tbody>
        
    </table>
    </>
  )
}

export default Table