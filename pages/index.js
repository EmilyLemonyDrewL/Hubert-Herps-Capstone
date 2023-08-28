import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div>
      <h3>Warning!
        Herping can be dangerous!
      </h3>
      <h6>When herping, be aware of your local venemous species and have an emergency number ready in case you are bitten.</h6>
      <h1>About</h1>
      <p>Hello, {user.displayName}! Hubert Herps is...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus ante quis velit commodo ornare. Donec tellus lectus, pretium ultrices mi quis, iaculis laoreet arcu. Aenean eu aliquet erat. Pellentesque a ante non diam imperdiet volutpat. Aliquam commodo auctor suscipit. Mauris lacinia rhoncus lectus. Nunc vel dolor sed ante pellentesque vestibulum ut non tortor. Vivamus tincidunt nunc ac pretium pharetra.

        Aliquam erat volutpat. In leo risus, luctus sit amet lacus quis, lobortis ultricies ipsum. Aenean sed dolor nec nulla laoreet pellentesque. In hac habitasse platea dictumst. Vestibulum interdum turpis ante, et consectetur ex elementum id. Suspendisse ac placerat ipsum. Nam ex urna, convallis consectetur tempor vel, ultrices nec nibh.

        Nulla blandit suscipit dui, et consequat nibh blandit sed. Sed a dui finibus, pretium augue a, ultrices erat. Curabitur sed pulvinar libero. Vivamus quis purus vitae ex finibus iaculis. Mauris vestibulum ultrices tincidunt. Vestibulum ac erat condimentum, facilisis urna id, consequat turpis. Nam sagittis nulla at metus varius accumsan. Nam sollicitudin felis venenatis nunc venenatis imperdiet.
      </p>
      <h2>Helpful Links, Tips & Tricks</h2>
    </div>
  );
}

export default Home;
