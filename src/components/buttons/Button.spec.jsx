import { render, screen } from "@testing-library/react"
import { ButtonCarregar } from "./button-carregar";


describe('<ButtonCarregar />',()=>{
    it('should render the button with the text', ()=>{
        render(<ButtonCarregar text='load more' />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    })
})