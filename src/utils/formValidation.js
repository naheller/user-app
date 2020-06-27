export const getEmailErrors = (email) => {
  const errors = []
  if (!email) errors.push('Email required')
  return errors
}

export const getPasswordErrors = (password) => {
  const errors = []
  if (!password) errors.push('Password required')
  return errors
}
