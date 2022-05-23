import axios from 'axios'

export const getUsersList = async () => {
  try {
    const { data: usersList } = await axios.get('/users')
    console.log({usersList})
    return usersList

  } catch (e) {
    console.log({errorGetList: e})
    return []
  }
}

export const getOrdersList = async () => {
    try {
      const { data: ordersList } = await axios.get('/orders')
      console.log({ordersList})
      return ordersList
  
    } catch (e) {
      console.log({errorGetList: e})
      return []
    }
  }