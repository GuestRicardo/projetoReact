import { screen, render } from "@testing-library/react";
import { Input } from './index'; 

describe('<Input />', () => {
    it('should render posts', () => {
        
        render(<Input { } />);
        
    });
    it('should Call handleChange function on each key pressed', () => {
        const { container } = render(<input {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});