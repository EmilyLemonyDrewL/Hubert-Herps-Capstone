import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

function GreetingMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const greetings = new Array([]);
    greetings[0] = 'ribbet, ribbet';
    greetings[1] = 'Hello herper! Hubert is here to help!';
    greetings[2] = "Hello herper! You can visit the `Your Collection` page to start logging what you've found.";
    greetings[3] = "Hello herper! Hop over to the 'Community' page to view posts from other users";

    const i = Math.floor(greetings.length * Math.random());
    setMessage(greetings[i]);
  }, []);

  return (
    <div>
      <div className="greet" id="greet-1">
        <Image src="https://firebasestorage.googleapis.com/v0/b/hubertherps.appspot.com/o/HubertBiggerNametag.png?alt=media&token=0ac8d592-979f-4b19-8233-60c746eb6582" alt="hubert" style={{ width: '280px' }} />
      </div>
      <div className="greet" id="greet-2">
        <p className="text-center">{message}</p>
      </div>
    </div>
  );
}

export default GreetingMessage;
