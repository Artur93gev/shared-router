/* As there can be multiple applications in one single
 * session, the browsing history must be shared through them.
 */

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;
