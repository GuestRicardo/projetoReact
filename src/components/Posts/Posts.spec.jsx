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

// eslint-disable-next-line no-undef
describe('<Posts />', () => {
    // eslint-disable-next-line no-undef
    it('should render posts', () => {
        /**   const { debug } = */
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<Posts {...props} />);
        //debug();
        //heading
        // eslint-disable-next-line no-undef
        expect(screen.getAllByRole('heading', { name: /title/i }))
            .toHaveLength(3);

        //imagem
        // eslint-disable-next-line no-undef
        expect(screen.getAllByRole('img', { name: /title/i }))
            .toHaveLength(3);

        //imagem especifica
        // eslint-disable-next-line no-undef
        expect(screen.getAllByRole('img', { name: /title 3/i }))
            .toHaveAttribute('src', 'img/img3.png');

        //titulos paragrafos
        // eslint-disable-next-line no-undef
        expect(screen.getAllByText(/body/i))
            .toHaveLength(3);
    });
    //para testar quando nao tiver nenhum post
    // eslint-disable-next-line no-undef
    it('should not render posts', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<Posts/>);
        // eslint-disable-next-line no-undef
        expect(screen.queryByRole('heading', {name: /title/i}))
        .not.toBeInTheDocument();
    });
    // eslint-disable-next-line no-undef
    it('should MATCH snapshot', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { container } = render(<Posts {...props} />);
        // eslint-disable-next-line no-undef
        expect(container.firstChild).toMatchSnapshot();
    });

});
