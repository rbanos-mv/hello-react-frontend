import { shallowEqual, useSelector } from 'react-redux';

const GreetingPage = () => {
  const greeting = useSelector((state) => state.greeting, shallowEqual);
  return (
    <div className="container">
      <h1>{greeting}</h1>
    </div>
  );
};

export default GreetingPage;
