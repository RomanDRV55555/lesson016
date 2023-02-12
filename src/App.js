import './App.css';
import Post from './components/post/post';


function App() {
 const AUTOR1_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Guillermo_del_Toro_in_2017.jpg/35px-Guillermo_del_Toro_in_2017.jpg";
 const AUTOR2_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Martin_Freeman-5341.jpg/35px-Martin_Freeman-5341.jpg";

const CONTEXT_IMAGE1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Baggins_residence_%27Bag_End%27_with_party_sign.jpg/350px-Baggins_residence_%27Bag_End%27_with_party_sign.jpg";
const CONTEXT_IMAGE2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Hobbit_-_An_Unexpected_Journey_premiere.jpg/350px-The_Hobbit_-_An_Unexpected_Journey_premiere.jpg";

return (
   <div>
     <Post author={{
       name: "Big G",
       photo: AUTOR1_IMAGE,
       nickname: "@dart_vader"
     }}
       content="WTF? Are you there ...?"
       image={CONTEXT_IMAGE1}
       date={"26 февр."}
     ></Post>
     <Post author={{
       name: "BBBBB",
       photo: AUTOR2_IMAGE,
       nickname: "@Snokeder"
     }}
       content="No"
       image={CONTEXT_IMAGE2}
       date={"29 февр."}
     ></Post>
     <Post author={{
       name: "Big G",
       photo: AUTOR1_IMAGE,
       nickname: "@dart_vader"
     }}
       content="Fuck"
       date={"35 февр."}
     ></Post>
   </div>
 );


}


export default App;