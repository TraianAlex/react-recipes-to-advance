/* eslint-disable no-console */
const test = store => next => action => {
  console.log(action.type);
  console.log(store.getState());

  next(action);
};

export default test;
