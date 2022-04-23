const getTime = (datetime) => {
  const dateTimeArr = datetime.split(' ')

  return dateTimeArr[1].substring(0, dateTimeArr[1].length - 3)
}

const getDateTime = () => {
  const date = new Date()

  const dateWithOffest = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))

  return dateWithOffest.toISOString().slice(0, 19).replace('T', ' ')
}

export { getTime, getDateTime }
