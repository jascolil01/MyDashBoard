import Client from './api'
import { BASE_URL } from '@/globals'
import axios from 'axios'

export const SignInUser = async (data) => {
  const res = await Client.post('/auth/login', data)
  // Set the current signed in users token to localStorage
  localStorage.setItem('token', res.data.token)
  let id = res.data.user.id
  const results = await axios.get(`${BASE_URL}/users/${id}`)
  console.log(results.data.user)
  return results.data.user
}

export const RegisterUser = async (data) => {

  const res = await Client.post('/auth/register', data)
  return res.data

}

export const CheckSession = async () => {

  // Checks if the current token if it exists is valid
  const res = await Client.get('/auth/session')
  return res.data

}