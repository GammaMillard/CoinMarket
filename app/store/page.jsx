import Pokemon from '@/components/Pokemon'
import React from 'react'







const Store = async () => {

    // const res = await getData('https://pokeapi.co/api/v2/pokemon/')

    // const allPokemon = await Promise.all(res.results.map(pokemon => getData(pokemon.url)))

 
    return (
        <div>

            {/* <p className='text-3xl '>Store</p>
            <div className="flex flex-wrap gap-8 bg-slate-300 " >

                {
                    allPokemon.map(({name,id,sprites}) => {
                        return <Pokemon  name={name} id={id} sprites={sprites}/>
                    })
                }

            </div> */}

        </div>
    )
}


export default Store