export const middleware = (store: any) => (next: any) => (action: any) => {
  let result = next(action);

  console.log('store: ', store);
  console.log('result: ', result);

  return result;
};
