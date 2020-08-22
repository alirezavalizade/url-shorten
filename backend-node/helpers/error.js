const error = (res, error) => {
  if (error.code === 11000) {
    return res.status(409).json({
      msg: 'conflict in saving document.',
      documents: error.keyValue
    });
  }
  return res.status(500).json({
    msg: 'Something went wrong',
    error
  });
};

export default error;
