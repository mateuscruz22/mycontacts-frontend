import { useState } from 'react'

export default function useErrors() {
  const [errors, setErrors] = useState([])

  function setError({ field, message }) {
    if (!errors.find((error) => error.field === field)) {
      setErrors((prev) => [...prev, {
        field,
        message,
      }])
    }
  }

  function removeError({ field }) {
    setErrors((prev) => prev.filter((error) => error.field !== field))
  }

  function getErrorMessageByFielName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return {
    setError, removeError, getErrorMessageByFielName,
  }
}
