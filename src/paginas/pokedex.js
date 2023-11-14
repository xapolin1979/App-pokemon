import {useState,useEffect,} from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function Pokedex() {

  const[nombre,setNombre]=useState([])
  const[datos,setDatos]=useState([])

useEffect(()=>{
  const namePokemon=async()=>{
    const url=`https://pokeapi.co/api/v2/pokemon?limit=900&offset=0`
    const response=await fetch(url);
    
      if(response.ok){
    
      const datos=await response.json();
    
      datos.results.map(poke=>
        setNombre((e)=>[...e,poke.name]))
      } 
 }

 namePokemon()
 
},[])


useEffect(()=>{
    nombre.map(async(nom)=>
       await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`)
        .then(res=>res.json())
        .then(data=>setDatos((e)=>[...e,data]))
        .catch((error)=>console.error(error))
        )

},[nombre]) 

datos.sort((a, b) => a.id - b.id);

  return (
 <>
 
    <div className="container_card "> 

    
          <div className="cardsPokemons ">

{
  
    datos.map((pokemon,index)=>
  <Link to={`/card_pokemons/${pokemon.id}`}> <Card key={index}  className='card_pokemon ' style=
                                            {pokemon.types[0].type.name==='grass'?{ background:'linear-gradient(rgb(155, 204, 80),rgb(23, 45, 81)'}:
                                             pokemon.types[0].type.name==='fire'?{ background:'linear-gradient(rgb(253, 125, 36),rgb(23, 45, 81)'}:
                                             pokemon.types[0].type.name==='normal'?{background:'linear-gradient(rgb(164, 172, 175),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='poison'?{background:'linear-gradient(rgb(185, 127, 200),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='bug'?{ background:'linear-gradient(rgb(114, 159, 63),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='electric'?{  background:'linear-gradient(rgb(238, 213, 53),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='ground'?{background:'linear-gradient(rgb(171, 152, 66),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='fighting'?{background:'linear-gradient(rgb(221, 78, 56),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='fairy'?{background:'linear-gradient(rgb(253, 185, 233),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='psychic'?{background:'linear-gradient(rgb(255, 3, 209),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='rock'?{background:'linear-gradient(rgb(163, 140, 33),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='ghost'?{background:'linear-gradient(rgb(123, 98, 162),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='ice'?{ background:'linear-gradient(rgb(81, 196, 231),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='dragon'?{background:'linear-gradient(rgb(241, 110, 87),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='steel'?{background:'linear-gradient(#87b4b5,rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='dark'?{background:'linear-gradient(rgb(115, 132, 132),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='flying'?{background:'linear-gradient(rgb(46, 174, 178),rgb(23, 45, 81))'}:
                                             pokemon.types[0].type.name==='water'?{background:'linear-gradient(rgb(69, 146, 196),rgb(23, 45, 81))'}:null
                                           
   
   
   }>

     
   <Card.Img className='imgPokemon_Card' variant="top" src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
   <Card.Body className='cardBody' >
   <Card.Title><p>Nº : {pokemon.id}</p> <p>{pokemon.name?pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1):null}</p></Card.Title>
   <div className='cardTipodePoke'>
   <button  className='btnTipodePoke' style={pokemon.types[0].type.name==='grass'?{backgroundColor:'rgb(155, 204, 80)'}:
                                             pokemon.types[0].type.name==='fire'?{backgroundColor:'rgb(253, 125, 36)'}:
                                             pokemon.types[0].type.name==='normal'?{backgroundColor:'rgb(164, 172, 175)'}:
                                             pokemon.types[0].type.name==='poison'?{backgroundColor:'rgb(185, 127, 200)'}:
                                             pokemon.types[0].type.name==='bug'?{backgroundColor:'rgb(114, 159, 63)'}:
                                             pokemon.types[0].type.name==='electric'?{backgroundColor:'rgb(238, 213, 53)'}:
                                             pokemon.types[0].type.name==='ground'?{backgroundColor:'rgb(171, 152, 66)'}:
                                             pokemon.types[0].type.name==='fighting'?{backgroundColor:'rgb(221, 78, 56)'}:
                                             pokemon.types[0].type.name==='fairy'?{backgroundColor:'rgb(253, 185, 233)'}:
                                             pokemon.types[0].type.name==='psychic'?{backgroundColor:'rgb(255, 3, 209)'}:
                                             pokemon.types[0].type.name==='rock'?{backgroundColor:'rgb(163, 140, 33)'}:
                                             pokemon.types[0].type.name==='ghost'?{backgroundColor:'rgb(123, 98, 162)'}:
                                             pokemon.types[0].type.name==='ice'?{backgroundColor:'rgb(81, 196, 231)'}:
                                             pokemon.types[0].type.name==='dragon'?{backgroundColor:'rgb(241, 110, 87)'}:
                                             pokemon.types[0].type.name==='steel'?{backgroundColor:'#87b4b5'}:
                                             pokemon.types[0].type.name==='dark'?{backgroundColor:'rgb(115, 132, 132)'}:
                                             pokemon.types[0].type.name==='flying'?{backgroundColor:'rgb(46, 174, 178)'}:
                                             pokemon.types[0].type.name==='water'?{backgroundColor:'rgb(69, 146, 196)'}:null
                                           
  
  
  } >{pokemon.types[0].type.name}</button>   
     </div>
 
   </Card.Body>
   </Card></Link>
     

)

      
}
          </div>      
  </div>
  
    </>
  )
}

export default Pokedex