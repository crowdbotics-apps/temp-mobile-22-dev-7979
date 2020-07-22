import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth39215Saga from '../features/EmailAuth39215/redux/sagas';
import EmailAuth39212Saga from '../features/EmailAuth39212/redux/sagas';
import EmailAuth39209Saga from '../features/EmailAuth39209/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth39215Saga,
EmailAuth39212Saga,
EmailAuth39209Saga,
    
  ]);
}