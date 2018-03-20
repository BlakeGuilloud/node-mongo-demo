export function sendError(res) {
  return (error) => {
    res.status(error.statusCode || 500)
      .json({
        code: error.statusCode || 500,
        message: error.message || error.ValidationError,
      });

    return null;
  };
}

export function sendSuccess(res) {
  return (data) => {
    res.status(200)
      .json(data);

    return null;
  };
}
