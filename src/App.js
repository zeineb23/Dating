import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ConfettiExplosion from 'react-confetti-explosion';import { useState } from 'react';
import './App.css';

function App() {
    const [congrats, setCongrats] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const[link, setLink] = useState("https://th.bing.com/th/id/R.fb01f80c2696f653791cbfc8e390a859?rik=G%2bBmh7YLzC5rLg&pid=ImgRaw&r=0");

    const handleClick = () => {
        setButtonClicked(true);
        setLink("https://i.pinimg.com/originals/07/16/77/071677aa91e2693abddbd7465d44ceb6.gif");
    };

  return (
    <div className="App">
      {congrats && <ConfettiExplosion force={1}
                duration={3000}
                particleCount={250}
                width={2500}/>}
      <img src={link}/>
      {!buttonClicked && (
                <div>
                    <h1>Want to go out with me ?</h1>
                    <Button variant="success" id="yes" onClick={handleClick}>Yes</Button>
                    <Button variant="danger" id='no'>No</Button>
                </div>
      )}
      
    </div>
  );
}

export default App;
