module.exports = function (elements, columns) {
  'use strict';

  return elements.reduce(function (previous, element, current) {
    if (current % columns === 0)
      previous.push([element]);
    else
      previous[previous.length - 1].push(element);

    return previous;
  }, []);
};