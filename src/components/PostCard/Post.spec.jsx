import { PostCard } from ".";
import { render } from "@testing-library/react";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
    //aqui precisar ser testado se tudo foi renderizado corretamente é somente isso
    it('shoud render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />);//esse tipo de destruction é chamado de props
        //esse debug é tipo um console log, para saber o q esta na tela,
        // esse tipo de teste e conhecido como snapshot, pois ele tira um print do elemento
        debug();
    });
});