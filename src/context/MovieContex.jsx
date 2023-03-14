import React, { createContext } from 'react'
export const Movicontex=createContext()
const MovieContexProvider = ({children}) => {
  return (
    <MovieContexProvider value="values"> {children} </MovieContexProvider>
       
   
  )
}

export default MovieContexProvider