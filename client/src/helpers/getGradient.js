import gradients from '../assets/data/gradients'

const getGradient = (name) => {
  const { direction, colors } = gradients.filter(gradient => gradient.name === name)[0]

  return `${direction} ${colors}`
}

export default getGradient
