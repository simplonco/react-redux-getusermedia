import axios from 'axios';

export const fetchUser = () => ({
  type: 'FETCH_USER',
  payload: axios.get('https://reqres.in/api/users/2')
})

export const changeName = () => ({
  type: 'CHANGE_NAME',
  payload: 'jeanette'
})
