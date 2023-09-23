import { useState, useEffect } from 'react';

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
      <div className="greet" id="greet_1">
        <p>Mascot (Hubert) image will go here when styled</p>
      </div>
      <div className="greet" id="greet_2">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default GreetingMessage;
