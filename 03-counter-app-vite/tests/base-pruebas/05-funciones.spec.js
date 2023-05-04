import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas de 05-funciones', ()=>{

    test('getUser debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }
        const user = getUser()

        expect(testUser).toEqual(user)
    })

    test('getUsuarioActivo debe retorna un objeto', ()=>{
        const username = 'evercm95'

        // const testUser = 

    const usuarioActivo = getUsuarioActivo(username)

    expect(usuarioActivo).toEqual({
        uid: 'ABC567',
        username: username
})
    
})
    
})