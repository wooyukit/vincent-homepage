export const selectImageSource = (images, src, width) => {
  const image = images[src]
  if (!image) return src
  const widths = image.widths
  const selected =
    widths.find(candidate => candidate >= width) || widths[widths.length - 1]
  return `/_optimized/${image.hash}-${selected}.webp`
}

// Legacy page metadata sometimes describes an upscaled copy. PhotoSwipe needs
// the actual file dimensions for its fit and zoom calculations.
export const getImageDimensions = (images, src) => {
  const image = images[src.path]
  return {
    width: Number(image?.width || src.w),
    height: Number(image?.height || src.h)
  }
}
