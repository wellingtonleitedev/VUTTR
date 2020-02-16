export const ROUTES = {
  BASE_URL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://vuttrapi.herokuapp.com',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  TOOLS: '/tools',
};
