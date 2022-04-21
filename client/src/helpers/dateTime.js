const getTime = (datetime) => {
  const dateTimeArr = datetime.split(' ')

  return dateTimeArr[1].substring(0, dateTimeArr[1].length - 3)
}

export { getTime }
