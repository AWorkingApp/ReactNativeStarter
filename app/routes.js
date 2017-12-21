import React from 'react';
import { Router, Scene, ActionConst} from 'react-native-router-flux';
/**
 * Containers
 */

import Home from './containers/Home';

const routes = () => {
    return  <Router>
         <Scene key='root' hideNavBar={true} >
            <Scene key='home' component={Home} title='Home' direction='vertical'/>
         </Scene>
        </Router>
}

export default routes;
