import React, { memo } from 'react';
import { Router, Route } from 'react-router-dom';

import configs from './configs';
import { Dummy } from './utils';

/* As mentioned in https://github.com/ReactTraining/react-router/issues/3948 issue,
 * for such cases recommended way is to use `Router` instead of `BrowserRouter`
 *
 * In case of multiple applications bootsrtaped
 * application must be wrapped by `RouterWrapper`
 */

const RouteWrapper = props => (
  <Router history={history}>
    <Route path={configs.prefix} component={Dummy}>
      {props.children}
    </Route>
  </Router>
);

export default memo(RouteWrapper);
