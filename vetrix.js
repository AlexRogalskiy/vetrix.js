module.exports = function (elements, columns) {
  if (!Array.isArray(elements)) return []
  
  return elements.reduce(function (buf, element, current) {
    if (current % columns === 0)
      buf.push([ element ])
    else
      buf[buf.length - 1].push(element)

    return buf
  }, [])
}
