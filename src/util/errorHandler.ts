export const errorHandler = (error: any) => {
  const checkMsg = /(?:\/)([a-z-]+)/;
  return error.message.match(checkMsg)[1].replace(/-/gi, " ");
};
