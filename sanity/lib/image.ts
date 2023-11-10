import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId ,
  dataset: dataset
})

if(!imageBuilder){
  throw new Error("unable to create the image builder sorry")
}

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source)
}
