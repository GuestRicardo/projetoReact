import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputSearch } from '.';

describe('<InputSearch />', () => {
    //ha cada tecla pressionada sera chamada a função handleChange 
    it('should have a value of searchValue', () => {
        //esta função nao serve para nada, ela esta aq somente para ser chamada como teste     
        const fn = jest.fn();
        render(<InputSearch handleChange={fn} searchValue={'testando'} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe('testando');
    });

    it('should Call handleChange function on each key pressed', () => {       
        const fn = jest.fn();
        render(<InputSearch handleChange={fn} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        const value = 'o valor';

        userEvent.type(input, value);

        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });
    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<input {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});