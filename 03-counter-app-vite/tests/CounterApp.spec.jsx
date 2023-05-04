import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "../src/CounterApp";


describe('Pruebas <CounterApp/>', ()=>{
    const startValue = 100;
    test('Debe de hacer match con el snapshot', ()=>{
        const {container} = render(<CounterApp value={startValue} />)
        expect(container).toMatchSnapshot()
    });

    test('Debe mostrar el valor inicial de 100', ()=>{
        render(<CounterApp value={startValue} />)
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(`${startValue}`)
    });

    test('Debe incrementar con el boton +1', ()=>{
        render(<CounterApp value={startValue} />)
        fireEvent.click(screen.getByText('+1'))

        expect(screen.getByText('101')).toBeTruthy()
    })

    test('Debe decrementar con el boton -1', ()=>{
        render(<CounterApp value={startValue} />)
        fireEvent.click(screen.getByText('-1'))

        expect(screen.getByText('99')).toBeTruthy()
    })


    test('Debe funcionar el boton reset', ()=>{
        render(<CounterApp value={startValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'))

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        

        expect(screen.getByText(`${startValue}`)).toBeTruthy()
    })
})