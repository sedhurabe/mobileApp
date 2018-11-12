// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.

/**
 * Routing to be implemented
 */
import { combineReducers } from 'redux';

import globalAction from '../reducers/globalNotification';

const allReducers ={
	globalAction,
}

export default combineReducers(allReducers);
