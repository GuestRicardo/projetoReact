import { PostCard } from ".";
import { render } from "@testing-library/react";

//dados falsos, para fazer o teste
const mock = {
 title: 'title 1',
 body: 'body 1',
 id: '1',
 cover:''
}

describe('<PostCard />', () => {
    //aqui precisar ser testado se tudo foi renderizado corretamente é somente isso
    it('shoud render PostCard correctly', () => {
        render(<PostCard />)
    })
});