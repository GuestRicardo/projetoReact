import { PostCard } from ".";
import { render, screen } from "@testing-library/react";
import { postCardPropsMock } from "./mock";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

const props = postCardPropsMock;

describe('<PostCard />', () => {
    //aqui precisar ser testado se tudo foi renderizado corretamente é somente isso
    it('shoud render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />);//esse tipo de destruction é chamado de props
        //esse debug é tipo um console log, para saber o q esta na tela,
        // esse tipo de teste e conhecido como snapshot, pois ele tira um print do elemento
        //debug();
        //aq esta falando q tem q ter certeza que tem uma imagem no documento e tem q ser (.img)
        //e esta sendo confirmado o q tem q esta esta no mock
        //ou
        //pode se usar expressao regular, so q é menos criterioso, pq pega somente um trecho especifico
        //expect(screen.getByRole('img', { name: /title 1/i })).toBeInTheDocument();
        //aq so esta sendo checado se tem o titulo no documento
        expect(screen.getByRole('img', { name: 'title 1' })).toBeInTheDocument();
    });
});