import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f2343e37870b91ef1';
    const heroIds = heroes.map( hero => hero.id );

    const heroPromises = getHeroesAsync( heroIds );

    for await( const hero of heroPromises ) {
        element.innerHTML += `${ hero.name } <br/> `
    }    

    console.log("esperando...");
    let misHeroesArray  = await pruebaAsync(heroIds);
    console.log("terminó!");
    console.log("fin");

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 3000)
    });

    return heroes.find( hero => hero.id === id );
}

const pruebaAsync = async(heroIds) => {

    let misHeroes = [];
    heroIds.forEach(id => {
        let heroe_ = heroes.find( hero => hero.id === id );
        misHeroes.push(heroe_);
    });
    console.log({misHeroes});
    return misHeroes;
}

