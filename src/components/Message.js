import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Message(){
  const [posts, setPosts] = useState (['prvni', 'druhy']);
  const [newPost, setNewPost] = useState('napis vzkaz');
 
  // function handleChange(event) {
  //   console.log(event.target.value);
  // }
  const handleChange = (event) => {
    setNewPost(event.target.value);
    //console.log(newPost);
  }

  const handleClick = (event) => {
    //posts.unshift(newPost);
    //setPosts([...posts]);//kopirovani pole ...
    if(newPost.length > 0){
     setPosts([newPost, ...posts]);//prida a pak zkopiruje
     setNewPost('');
     //console.log(newPost);
    }   
  }
  
  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter text" value={newPost} onChange={handleChange} />
          </Form.Group>
            <Button variant="primary"  onClick={handleClick}>
              Submit
            </Button>
          </Form>
          <div>
            {posts.map((post, index)=><div key={index}>{post}</div>)}
          </div>
      </div>
    </>
  );
}

export default Message;