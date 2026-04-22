export const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error("Error message : ", error);
      return res.status(500).json({ message: "internal server error!" });
    }
  };
};
