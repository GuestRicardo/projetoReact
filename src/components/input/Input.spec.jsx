import { screen, render } from "@testing-library/react";
import { Input } from './index'; 

describe('<Input />', () => {
    //ha cada tecla pressionada sera chamada a função handleChange 
    it('should Call handleChange function on each key pressed', () => {   
        //esta função nao serve para nada, ela esta aq somente para ser chamada como teste     
        const fn = jest.fn(); 
        render(<Input />);
        
    });
    it('', () => {
        const { container } = render(<input {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});