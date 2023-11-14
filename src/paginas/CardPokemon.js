import { useEffect,useState } from 'react'
import {useParams} from  'react-router-dom'
 

function CardPokemon() {

const {parametros}=useParams()

useEffect(()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${parametros}`)
    .then(res=>res.json())
    .then(datos=>console.log(datos))
    .catch((error)=>console.error(error))
    

},[parametros])




  return (
    <div> hola</div>
  )
}

export default CardPokemon