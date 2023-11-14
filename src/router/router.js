import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Pokedex from '../paginas/pokedex'
import CardPokemon from '../paginas/CardPokemon'
function router() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Pokedex></Pokedex>}></Route>
    <Route path='/card_pokemons/:parametros' element={<CardPokemon></CardPokemon>}></Route>
   </Routes>
    
    
    </>
  )
}

export default router