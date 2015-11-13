module.exports = function (value) {
  return value.toLowerCase().replace(/\s+/g, '-');
};
