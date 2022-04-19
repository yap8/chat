const capitalize = (str) => {
  const words = str.split(' ')

  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export default capitalize
