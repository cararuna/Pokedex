import React, { useState } from 'react'
import ListaPokemon from './ListaPokemon'
import { Context } from './GlobalContext'
import Search from './Search'

export default function App() {
  const [inputText, setInputText] = useState('')

  

  return (
    <Context.Provider value={[inputText, setInputText]}>
      <div className="fundo">
        <Search />
        <ListaPokemon />
      </div>
    </Context.Provider>
  )
}
