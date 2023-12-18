import { Posts } from '.';
import { render, screen } from "@testing-library/react";

//mock para simular teste
const props = {
    posts: [
        {
            id: 1,
            title: 'titulo 1',
            body: 'Corpo 1',
            cover: 'img/img1.png',
        },
        {
            id: 2,
            title: 'titulo 2',
            body: 'Corpo 2',
            cover: 'img/img2.png',
        },
        {
            id: 3,
            title: 'titulo 3',
            body: 'Corpo 3',
            cover: 'img/img3.png',
        },
    ]
};
//fim do mock de teste

describe('<Posts />', () => {
    it('should render posts', () => {
        /**   const { debug } = */
        render(<Posts {...props} />)
        //debug();
        //heading
        expect(screen.getAllByRole('heading', { name: /title/i }))
            .toHaveLength(3); 
            //imagem
        expect(screen.getAllByRole('img', { name: /title/i }))
            .toHaveLength(3); 
            //titulos paragrafos 
        expect(screen.getAllByText(/body/i))
            .toHaveLength(3);
    });

});