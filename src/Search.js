import React, { useContext } from 'react'
import { Context } from './GlobalContext'

export default function Search() {
  const [inputText, setInputText] = useContext(Context)

  return (
    <div>
      <ul className="Titulo">
        <h1>Search name</h1>
        <input
          type="text"
          id="header-search"
          placeholder="Search by name"
          name="s"
          /* placeholder="Digite aqui o nome do pokemon" */
          onChange={e => {
            var lowerCase = e.target.value.toLowerCase()
            setInputText(lowerCase)
          }}
        />
      </ul>
    </div>
  )
}
