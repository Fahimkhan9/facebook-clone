import React,{createContext,useContext,useReducer} from 'react'


export const StateContext =  createContext()

export const StateProvider = ({reducer,initialstate,children}  )  => (
<StateContext.Provider value={useReducer(reducer,initialstate)} >{children}</StateContext.Provider>
)

export const usestateValue =  () => useContext(StateContext)