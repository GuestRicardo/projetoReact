import { render, screen } from "@testing-library/react"
import { ButtonCarregar } from "./button-carregar";

describe('<ButtonCarregar />',()=>{
    //para garantir q o botao esta sendo carregado
    it('should render the button with the text', ()=>{
        render(<ButtonCarregar text='load more' />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
    //para garantir q as funções sejam carregadas
    it('should call function on button click', ()=>{
        render(<ButtonCarregar text='load more' />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    })
})