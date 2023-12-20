import { screen, render } from "@testing-library/react";
import { InputSearch } from './index';

describe('<InputSearch />', () => {
    //ha cada tecla pressionada sera chamada a função handleChange 
    it('should Call handleChange function on each key pressed', () => {
        //esta função nao serve para nada, ela esta aq somente para ser chamada como teste     
        const fn = jest.fn();
        render(<InputSearch handleChange={fn} searchValue={'testando'}/>);

    });
    // it('', () => {
    //     const { container } = render(<input {...props} />);
    //     expect(container.firstChild).toMatchSnapshot();
    // });

});