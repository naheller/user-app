const localBaseUrl = 'http://localhost:3000'
const ec2BaseUrl = 'http://ec2-54-234-77-94.compute-1.amazonaws.com'

const LOGIN_ENDPOINT = `${ec2BaseUrl}/login`
const CREATE_ENDPOINT = `${ec2BaseUrl}/user`
const LIST_ENDPOINT = `${ec2BaseUrl}/users`

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

  return response
}

export const getUserList = async () => {
  const response = await fetch(LIST_ENDPOINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response
}
