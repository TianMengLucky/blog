import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
    icon: 'material-symbols:home-outline-rounded',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about/',
    icon: 'material-symbols:favorite-rounded',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive/',
    icon: 'material-symbols:menu-book-outline-rounded',
  },
}
