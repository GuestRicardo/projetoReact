import { PostCard } from ".";
import { render } from "@testing-library/react";

//dados falsos, para fazer o teste(mock)
const props = {
    title: 'title 1',
    body: 'body 1',
    id: '1',
    cover: 'img/img.png'
}

describe('<PostCard />', () => {
    //aqui precisar ser testado se tudo foi renderizado corretamente é somente isso
    it('shoud render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />);//esse tipo de destruction é chamado de props
        //esse debug é tipo um console log, para saber o q esta na tela,
        // esse tipo de teste e conhecido como snapshot, pois ele tira um print do elemento
        debug();
    });
});