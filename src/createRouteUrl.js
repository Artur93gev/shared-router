import configs from './configs';

const createRouteUrl = url => `${configs.prefix}${url}`;

export default createRouteUrl;
