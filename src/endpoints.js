const LOGIN_ENDPOINT = 'http://localhost:3000/login'
const CREATE_ENDPOINT = 'http://localhost:3000/user'

export const loginUser = async (data) => {
  const response = await fetch(LOGIN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response
}

export const createUser = async (data) => {
  const response = await fetch(CREATE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}
