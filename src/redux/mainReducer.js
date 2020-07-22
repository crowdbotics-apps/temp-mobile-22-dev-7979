import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth39212Reducer from '../features/EmailAuth39212/redux/reducers';
import EmailAuth39209Reducer from '../features/EmailAuth39209/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth39212: EmailAuth39212Reducer,
EmailAuth39209: EmailAuth39209Reducer,

});