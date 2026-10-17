import images from './generated-images.json'
import { selectImageSource } from './image-path'

export default function imageLoader({ src, width }) {
  return selectImageSource(images, src, width)
}
