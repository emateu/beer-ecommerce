import { BRAND_NAME } from '~/app/constants'

const META_TITLE_SUFFIX = `${BRAND_NAME}`

export const getMetaTitle = (title?: string) => {
  if (!title) {
    return META_TITLE_SUFFIX
  }

  return `${title} | ${META_TITLE_SUFFIX}`
}
