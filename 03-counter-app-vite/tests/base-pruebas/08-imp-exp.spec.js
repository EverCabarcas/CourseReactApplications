import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";

describe('08-imp-exp pruebas', ()=>{
    test('getHeroeById debe retornar un heroe por ID', ()=>{
        const id = 1;
        const heroe = getHeroeById(id)

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById debe retornar undefined si no existe el ID', ()=>{
        const id = 100;
        const heroe = getHeroeById(id)

        expect(heroe).toBeUndefined()

        // expect(heroe).toBeFalsy() //null, undefined, false
    })

    test('getHeroesByOwner debe retornar un heroe con los heroes de DC', ()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);

        expect(heroes.length).toBe(3)
        
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    })

    test('getHeroesByOwner debe retornar un heroe con los heroes de MARVEL', ()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)
    })
})