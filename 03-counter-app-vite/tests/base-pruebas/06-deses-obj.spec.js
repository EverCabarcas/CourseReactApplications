import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('pruebas de 06-deses-obj', ()=>{

    test('usContext debe retornar un objeto', ()=>{
        const testContext = {
            clave: 'test',
            nombre: 'ever',
            edad: 25,
        }

        const user = usContext(testContext)

        expect(user).toEqual({
            nombreClave: testContext.clave,
            anios: testContext.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
    
})