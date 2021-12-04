import Users from './Users'
import Pokemon from './Pokemones'
import Types from './Types'

const actions = {

    register:Users.register,
    login: Users.login,
    outhLogin: Users.outhLogin,
    getPokesUser: Users.getPokesUser,
    
    getAllPokemones:Pokemon.getAllPokemones,
    getPokemonesBd: Pokemon.getPokemonesBd,
    getPokemonId: Pokemon.getPokemonId,
    getPokemonName: Pokemon.getPokemonName,
    byType: Pokemon.byType,
    byOrder: Pokemon.byOrder,
    posPokemon: Pokemon.posPokemon,
    
    
    getAllTypes: Types.getAllTypes,
}


export default actions;