import { Button, Container} from "react-bootstrap";
import Cards from "../components/Cards";
import Message from "../components/Message";
import { pages } from "../data";

export function Home() {
  return (
    <>
      <section >
        <div className='container'>
          <h1>Home</h1>  
          <Button href={pages.blog.link}>Mrkni na {pages.blog.title}</Button>
        </div>
      </section>    
      <section>
        <Container>
          <h2>Jednoduchy blog</h2>
          <Cards />
        </Container>
      </section>  
      <section className='py-4'>
        <Container>
          <h2>Napiš mi něco pěkného</h2>
          <Message />
        </Container>
      </section>
    </>
  );
}

