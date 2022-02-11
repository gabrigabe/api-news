import cors from 'cors';

const options: cors.CorsOptions = {
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  origin: '*',
};

export default options;
