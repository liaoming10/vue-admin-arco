import localeLogin from '@/views/login/locale/en-US'

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US'
import localeMonitor from '@/views/dashboard/monitor/locale/en-US'

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/en-US'
import localeMulptiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US'

import localeCardList from '@/views/list/card/locale/en-US'
import localeSearchTable from '@/views/list/search-table/locale/en-US'

import localeSettings from './en-US/settings'

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',

  ...localeLogin,

  ...localeWorkplace,
  ...localeMonitor,

  ...localeDataAnalysis,
  ...localeMulptiDAnalysis,

  ...localeCardList,
  ...localeSearchTable,

  ...localeSettings,
}
