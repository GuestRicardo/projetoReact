import { render, screen } from "@testing-library/react"
import { ButtonCarregar } from "./button-carregar";
import userEvent from "@testing-library/user-event";

describe('<ButtonCarregar />',()=>{
    //para garantir q o botao esta sendo carregado
    it('should render the button with the text', ()=>{
        render(<ButtonCarregar text='load more' />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
    
    //para garantir q as funções sejam carregadas, click no botao    
    it('should call function on button click', ()=>{
        const fn = jest.fn();
        render(<ButtonCarregar text='load more' onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });
    //para testar o disable   
    it('should call function on button click', ()=>{
        const fn = jest.fn();
        render(<ButtonCarregar text='load more' onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });
})