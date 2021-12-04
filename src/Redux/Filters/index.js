const Filters = {
    type: (type, pokemones) => {
        if (pokemones.length) return pokemones.filter(p => p.types.includes(type));
        return [];
    },

    order: (order, pokemones) => {       
        let ordenados = [];        
        switch (order) {            
            case "a-z":
                let names = pokemones.map(p => p.name).sort()
                names.forEach(name => {
                    pokemones.forEach(p => {
                        if (name === p.name) ordenados.push(p)
                    })
                });
                return ordenados;                
                case "z-a":
                    let namesInv = pokemones.map(p => p.name).sort().reverse()
                namesInv.forEach(name => {
                    pokemones.forEach(p => {
                        if (name === p.name) ordenados.push(p)
                    });
                });                
                return ordenados;                
                case "fuerza+":
                    let attack = pokemones.map(p => p.attack).sort((a, b) => b - a)
                    attack.forEach(a => {
                        pokemones.forEach(p => {
                            if(p.attack=== a) ordenados.push(p)
                        })
                    })
                    ordenados = ordenados.filter((a,b)=>ordenados.indexOf(a) === b)
                return ordenados;
            case "fuerza-":
                let attackInv = pokemones.map(p => p.attack).sort((a, b) => a - b)
                attackInv.forEach(a => {
                    pokemones.forEach(p => {
                        if (p.attack === a) ordenados.push(p)
                    })
                })
                ordenados = ordenados.filter((a, b) => ordenados.indexOf(a) === b)
                return ordenados;
            default:
                return pokemones;
        }
    },
}

export default Filters;