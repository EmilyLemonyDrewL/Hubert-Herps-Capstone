import GreetingMessage from '../components/Greetings';
import WarningLabel from '../components/WarningLabel';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  return (
    <div>
      <WarningLabel />
      <GreetingMessage />
      <h1 className="text-center">About</h1>
      <p>Hello, {user.displayName}! Hubert Herps is designed for herping hobbiests! You might be wondering `What is herping?`. No, it`s not a disease. herping is the hobby of searching for reptiles and amphibians.
      </p>
      <p>Chances are that you are actually here because you already know what herping is, though. So what is Hubert Herps, and how can you utilize this application? Hubert Herps can be used to keep a log of your finds, view the finds of other users, and and most importantly learn. There is so much to learn about all of the crawly creatures that inhabit this planet. Herping can be done from almost anywhere, from a backyard to a vast landscape, and by anyone from a professional to a beginner.</p>

      <h2 className="text-center">Important Things To Know Before Herping</h2>

      <ul>
        <li>Herping can be dangerous. Be aware of your local venemous species, how to identify them, and have an emergency contact ready in the case that you are bitten.</li>
        <li>Unless you are properly trained in handling a species, it is highly encouraged to just look but don`t touch. Many amphibians so not do well with human oils on their skin, and many smaller creatures are fragile and can be injured if handled improperly.</li>
        <li>Know your laws. It is good to be familiar with local law so that you don`t disturb any endangered species` and so that you don`t break any trespassing laws.</li>
        <li>Respect your surroundings. If you move logs, rocks, and other parts of your environment, be sure to place everything back where you found it.</li>
      </ul>
    </div>
  );
}

export default Home;
