import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext/AuthContext'

export default function useAuth() {

  const authInfo = useContext(AuthContext)
  return authInfo;
  
}
