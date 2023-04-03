import Client from './api'


export const SignInUser = async (data) => {
  const res = await Client.post('/api/auth/login', data)
  localStorage.setItem('token', res.data.token)
  let id = res.data.user.id
  const results = await Client.get(`/api/users/${id}`)
  return results.data.user
}

export const RegisterUser = async (data) => {
  const res = await Client.post('/api/auth/register', data)
  return res.data
}

export const CheckSession = async () => {
  const res = await Client.get('/api/auth/session')
  return res.data
}