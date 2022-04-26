import React, { useState, useEffect, useContext } from 'react'
import { Context } from './GlobalContext'
import './ListaPokemon.css'
import Pokemon from './Pokemon'
const firstUrl = 'https://pokeapi.co/api/v2/pokemon'

export default function ListaPokemon() {
  const [inputText, setInputText] = useContext(Context)

  const [pokemons, setPokemons] = useState([])

  const [nextUrl, setNextUrl] = useState([])

  const [previousUrl, setPreviousUrl] = useState([])

  const loadPokemonList = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results)
        setNextUrl(data.next)
        setPreviousUrl(data.previous)
      })
  }

  useEffect(() => {
    loadPokemonList(firstUrl)
  }, [])

  let filteredPokemons
  if (inputText) {
    filteredPokemons = pokemons.filter(pokemon => pokemon.name === inputText)
  } else {
    filteredPokemons = pokemons
  }

  return (
    <div className="principalPage">

      <div className="footer">
        <button
          onClick={() => loadPokemonList(previousUrl)}
          className="footerButton"
        >
          Previous
        </button>
        <button
          onClick={() => loadPokemonList(nextUrl)}
          className="footerButton"
        >
          Next
        </button>
      </div>
      <div>
        <ul className="pokeMap">
          {filteredPokemons.map(pokemon => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  )
}
