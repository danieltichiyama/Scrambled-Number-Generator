module.exports = function(n) {
  let array = [];

  for (i = 0; i < n; i++) {
    array.push(i);
  }

  array.map(function(e) {
    array.push(array[Math.floor(Math.random() * n * 10)]);
  });

  array = array.slice(n);

  return array;
};
