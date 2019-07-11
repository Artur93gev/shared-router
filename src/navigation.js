import history from './history';
import configs from './configs';

const navigate = (url, isAbsolute = false, state) => {
  history.push(`${isAbsolute ? '' : configs.prefix}${url}`, state);
};

export default navigate;
