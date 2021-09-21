import defaultSettings from '@/settings'

const title = defaultSettings.title || 'e-commerce-admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
