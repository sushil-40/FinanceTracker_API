export const errorHandler = (error, req, res, next) => {
  // set default status code and message

  const statusCode = error.statusCode || 500;

  const message = error.message || "Internal server error";
  console.log(error);

  res.status(statusCode).json({
    status: "error",
    message,
  });
};
