export const errorHandler = (error: any) => {
  const checkMsg = /(?:\/)([a-z-]+)/;
  console.dir(error);
  return error.message.match(checkMsg)[1].replace(/-/gi, " ");
};
