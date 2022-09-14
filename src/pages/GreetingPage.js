import { shallowEqual, useSelector } from 'react-redux';

const GreetingPage = () => {
  const greeting = useSelector((state) => state.greeting, shallowEqual);
  return (
    <div className="container">
      <h3>Reload page to receive a random greeting</h3>
      <br />
      <br />
      <h1>{greeting}</h1>
    </div>
  );
};

export default GreetingPage;
