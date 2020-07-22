import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth39218Reducer from '../features/EmailAuth39218/redux/reducers';
import EmailAuth39215Reducer from '../features/EmailAuth39215/redux/reducers';
import EmailAuth39212Reducer from '../features/EmailAuth39212/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth39218: EmailAuth39218Reducer,
EmailAuth39215: EmailAuth39215Reducer,
EmailAuth39212: EmailAuth39212Reducer,

});