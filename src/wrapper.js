import React, { memo } from 'react';
import { Router } from 'react-router-dom';

import history from './history';
import configs from './configs';

/* As mentioned in https://github.com/ReactTraining/react-router/issues/3948 issue,
 * for such cases recommended way is to use `Router` instead of `BrowserRouter`
 *
 * In case of multiple applications bootsrtaped
 * application must be wrapped by `RouterWrapper`
 */

const RouteWrapper = props => (
  <Router history={history}>
    {props.children}
  </Router>
);

export default memo(RouteWrapper);
