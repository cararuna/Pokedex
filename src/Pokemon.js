import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

const Pokemon = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState()

  useEffect(() => {
    const loadImgPokemon = () => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(data => {
          setPokemonData(data)
        })
    }
    loadImgPokemon()
  }, [pokemon.url])

  const [modalIsOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    pokemonData && (
      <li>
        <button className="poke" onClick={handleOpenModal}>
          <div>
            <img
              className={pokemonData.types[0].type.name}
              src={pokemonData.sprites?.front_default}
              alt={pokemonData.name}
            />
          </div>
          <div>
            <p>Nº {pokemonData.id}</p>
            <h1 className="h5">{pokemonData.name} </h1>
            <div>
              {pokemonData?.types?.map(({ type }) => (
                <span key={type.name} className={type.name}>
                  {type.name}{' '}
                </span>
              ))}
            </div>
          </div>
        </button>
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        >
          <div className="left-container">
            <div className="pokeImg">
              <img
                src={pokemonData.sprites?.front_default}
                alt={pokemonData.name}
              />
            </div>
          </div>
          <div className="right-container">
            <div className="modalTitulo">
              <h1 className="h5">
                {pokemonData.name} #{pokemonData.id}
              </h1>
            </div>
            <div className="typeModal">
              {pokemonData?.types?.map(({ type }) => (
                <span key={type.name} className={type.name}>
                  {type.name}{' '}
                </span>
              ))}
            </div>
            <ul className="info">
              <div>
                Abilities{' '}
                <div>
                  {pokemonData?.abilities?.map(({ ability }) => (
                    <li key={ability.name} className="pokeAbility">
                      {ability.name}{' '}
                    </li>
                  ))}
                </div>
              </div>
              <div>
                Weight
                <div className="pokeWeight">
                  {pokemonData.weight / 10} Kg
                </div>{' '}
              </div>
            </ul>
            <div className="stats">
              {pokemonData?.stats?.map(({ stat, base_stat }) => (
                <div key={stat.name} className={stat.name}>
                  <span className="progress">{stat.name}</span>
                  <ul
                    className="progress-value"
                    style={{ width: { base_stat } }}
                  ></ul>
                  <ul className="progres-name">{base_stat}</ul>
                </div>
              ))}
            </div>
          </div>

          {/* <button className="pokeOpen" onClick={handleOpenModal}>
            <div className='pokeImg'>
              normal:
              <img
                className={pokemonData.types[0].type.name}
                src={pokemonData.sprites?.front_default}
                alt={pokemonData.name}
              />
              <>shiny: </>
              <img
                className={pokemonData.types[0].type.name}
                src={pokemonData.sprites?.front_shiny}
                alt={pokemonData.name}
              />
            </div>
            <div>
              <p>Nº {pokemonData.id}</p>
              <h1 className="h5">{pokemonData.name}</h1>
            </div>
            <div>
              Type:{' '}
              {pokemonData?.types?.map(({ type }) => (
                <span key={type.name} className={type.name}>
                  {type.name}{' '}
                </span>
              ))}
            </div>
            <div>
              Abilities:{' '}
              {pokemonData?.abilities?.map(({ ability }) => (
                <span key={ability.name} className={ability.name}>
                  {ability.name}{' '}
                </span>
              ))}
            </div>
            <div>weigh: {pokemonData.weight}</div>
            <div className="stats">
              {pokemonData?.stats?.map(({ stat, base_stat }) => (
                <ul key={stat.name} className={stat.name}>
                  {stat.name} {base_stat}
                </ul>
              ))}
            </div>
          </button>
          <button onClick={handleCloseModal}>Close</button> */}
        </Modal>
      </li>
    )
  )
}

export default Pokemon
