import { PostCard } from ".";
import { render } from "@testing-library/react";

describe('<PostCard />', () => {
    //aqui precisar ser testado se tudo foi renderizado corretamente é somente isso
    it('shoud render PostCard correctly', () => {
        render(<PostCard />)
    })
});