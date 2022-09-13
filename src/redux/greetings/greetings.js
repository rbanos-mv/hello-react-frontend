import apiGetGreeting from '../../modules/api';

const GET = 'greetingtore/Book/GET';

export const getGreeting = () => async (dispatch) => {
  const greeting = await apiGetGreeting();
  dispatch({ type: GET, greeting });
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.greeting;

    default:
      return state;
  }
}
