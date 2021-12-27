const AsyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {}
  };
};

const getAllProducts = AsyncWrapper((req, res, next) => {});
const postProducts = AsyncWrapper((req, res, next) => {});
const updateProducts = AsyncWrapper((req, res, next) => {});
const deleteProducts = AsyncWrapper((req, res, next) => {});

export { getAllProducts, postProducts, updateProducts, deleteProducts };
