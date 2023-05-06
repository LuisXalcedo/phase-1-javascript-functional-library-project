function input(collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
}

function myEach(collection, callback) {
  const newCollection = input(collection);
  newCollection.forEach((e) => callback(e));
  return collection;
}

function myMap(collection, callback) {
  const newCollection = input(collection);
  return newCollection.map((e) => callback(e));
}

function myReduce(collection, callback, acc) {
  let newCollection = input(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  return newCollection.reduce(callback, acc);
}

function myFind(collection, predicate) {
  const newCollection = input(collection);

  return newCollection.find(predicate);
}

function myFilter(collection, predicate) {
  const newCollection = input(collection);

  return newCollection.filter((e) => predicate(e));
}

function mySize(collection) {
  const newCollection = input(collection);

  return newCollection.length;
}

function myFirst(array, n = false) {
  return n ? array.slice(0, n) : array[0];
}

function myLast(array, n = false) {
  return n
    ? array.slice(array.length - n, array.length)
    : array[array.length - 1];
}

function myKeys(object) {
  const keys = [];

  for (let key in object) {
    keys.push(key);
  }

  return keys;
}

function myValues(object) {
  const values = [];

  for (let key in object) {
    values.push(object[key]);
  }

  return values;
}
