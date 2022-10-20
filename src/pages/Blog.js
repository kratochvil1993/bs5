import { Container } from "react-bootstrap";
import List from "../components/List";
// import pole z jineho souboru
import { lists } from "../data";

export function Blog(){
  return(
    <>    
      <section>
        <Container>
          <h1>Blog</h1>  
          <List lists={lists}/>    
        </Container>
      </section>
    </>
  );
}
