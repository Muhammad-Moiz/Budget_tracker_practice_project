import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './sagas';

import rootReducers from "./reducers";

//TODO Persistance Reducers
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware]
});


sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducers>;
