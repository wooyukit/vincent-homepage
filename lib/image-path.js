export const selectImageSource = (images, src, width) => {
  const image = images[src]
  if (!image) return src
  const widths = image.widths
  const selected =
    widths.find(candidate => candidate >= width) || widths[widths.length - 1]
  return `/_optimized/${image.hash}-${selected}.webp`
}
