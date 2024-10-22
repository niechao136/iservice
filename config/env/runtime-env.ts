import { EnvNamespace } from '@/../helpers'

export const config: EnvNamespace.IRuntimeEnv[] = [
  {
    key: 'Develop',
    serverBaseUrls: [
      {
        key: 'api',
        development: 'https://dev-api-apps.wise-apps.com',
        production: 'https://dev-api-apps.wise-apps.com',
      },
      {
        key: 'pos',
        development: 'https://dev-pos.wise-apps.com',
        production: 'https://dev-pos.wise-apps.com',
      },
      {
        key: 'ccm',
        development: 'https://dev-iqm-ccm.wise-apps.com',
        production: 'https://dev-iqm-ccm.wise-apps.com',
      },
      {
        key: 'sub',
        development: 'https://dev-sub.wise-apps.com',
        production: 'https://dev-sub.wise-apps.com',
      },
      {
        key: 'counting',
        development: 'https://dev-counting-bi.wise-apps.com',
        production: 'https://dev-counting-bi.wise-apps.com',
      },
      {
        key: 'inspection',
        development: 'https://dev-inspection.wise-apps.com/storemonitor',
        production: 'https://dev-inspection.wise-apps.com/storemonitor',
      },
      {
        key: 'signage',
        development: 'https://preview-signage.storevue.com/psn/storevue.py?return=iservice',
        production: 'https://preview-signage.storevue.com/psn/storevue.py?return=iservice',
      },
      {
        key: 'signage3',
        development: 'https://dev-signage.wise-apps.com/AutoLogin',
        production: 'https://dev-signage.wise-apps.com/AutoLogin',
      },
      {
        key: 'iclinic',
        development: 'https://dev-signage.wise-apps.com/AutoLogin',
        production: 'https://dev-signage.wise-apps.com/AutoLogin',
      },
      {
        key: 'health',
        development: 'https://dev-ih.wise-apps.com',
        production: 'https://dev-ih.wise-apps.com',
      },
      {
        key: 'signage_bi',
        development: 'https://dev-sig-bi.wise-apps.com',
        production: 'https://dev-sig-bi.wise-apps.com',
      },
    ]
  },
  {
    key: 'Preview',
    serverBaseUrls: [
      {
        key: 'api',
        development: 'https://preview-api-apps.wise-iservice.com',
        production: 'https://preview-api-apps.wise-iservice.com',
      },
      {
        key: 'pos',
        development: 'https://preview-pos.wise-iservice.com',
        production: 'https://preview-pos.wise-iservice.com',
      },
      {
        key: 'ccm',
        development: 'https://preview-coldchain.wise-iservice.com',
        production: 'https://preview-coldchain.wise-iservice.com',
      },
      {
        key: 'sub',
        development: 'https://preview-sub.wise-iservice.com',
        production: 'https://preview-sub.wise-iservice.com',
      },
      {
        key: 'counting',
        development: 'https://preview-counting-bi.wise-iservice.com',
        production: 'https://preview-counting-bi.wise-iservice.com',
      },
      {
        key: 'inspection',
        development: 'https://preview-inspection.wise-iservice.com/storemonitor',
        production: 'https://preview-inspection.wise-iservice.com/storemonitor',
      },
      {
        key: 'signage',
        development: 'https://preview-signage.storevue.com/psn/storevue.py?return=iservice',
        production: 'https://preview-signage.storevue.com/psn/storevue.py?return=iservice',
      },
      {
        key: 'signage3',
        development: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
        production: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
      },
      {
        key: 'iclinic',
        development: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
        production: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
      },
      {
        key: 'health',
        development: 'https://preview-ih.wise-apps.com',
        production: 'https://preview-ih.wise-apps.com',
      },
      {
        key: 'signage_bi',
        development: 'https://preview-sig-bi.wise-iservice.com',
        production: 'https://preview-sig-bi.wise-iservice.com',
      },
    ]
  },
  {
    key: 'Portal',
    serverBaseUrls: [
      {
        key: 'api',
        development: 'https://api-apps.wise-iservice.com',
        production: 'https://api-apps.wise-iservice.com',
      },
      {
        key: 'pos',
        development: 'https://pos.wise-iservice.com',
        production: 'https://pos.wise-iservice.com',
      },
      {
        key: 'ccm',
        development: 'https://coldchain.wise-iservice.com',
        production: 'https://coldchain.wise-iservice.com',
      },
      {
        key: 'sub',
        development: 'https://sub-apps.wise-iservice.com',
        production: 'https://sub-apps.wise-iservice.com',
      },
      {
        key: 'counting',
        development: 'https://counting-bi.wise-iservice.com',
        production: 'https://counting-bi.wise-iservice.com',
      },
      {
        key: 'inspection',
        development: 'https://inspection.wise-iservice.com/storemonitor',
        production: 'https://inspection.wise-iservice.com/storemonitor',
      },
      {
        key: 'signage',
        development: 'https://signage.storevue.com/psn/storevue.py?return=iservice',
        production: 'https://signage.storevue.com/psn/storevue.py?return=iservice',
      },
      {
        key: 'signage3',
        development: 'https://signage-cms.wise-iservice.com/AutoLogin',
        production: 'https://signage-cms.wise-iservice.com/AutoLogin',
      },
      {
        key: 'iclinic',
        development: 'https://signage-cms.wise-iservice.com/AutoLogin',
        production: 'https://signage-cms.wise-iservice.com/AutoLogin',
      },
      {
        key: 'health',
        development: 'https://ih.wise-apps.com',
        production: 'https://ih.wise-apps.com',
      },
      {
        key: 'signage_bi',
        development: 'https://sig-bi.wise-iservice.com',
        production: 'https://sig-bi.wise-iservice.com',
      },
    ]
  },
  {
    key: 'Rc',
    serverBaseUrls: [
      {
        key: 'api',
        development: 'https://rc-sv.wise-apps.com',
        production: 'https://rc-sv.wise-apps.com',
      },
      {
        key: 'pos',
        development: 'https://rc-pos.wise-apps.com',
        production: 'https://rc-pos.wise-apps.com',
      },
      {
        key: 'ccm',
        development: 'https://iqm-ccm.wise-iservice.com',
        production: 'https://iqm-ccm.wise-iservice.com',
      },
      {
        key: 'sub',
        development: 'https://dev-sub.wise-apps.com',
        production: 'https://dev-sub.wise-apps.com',
      },
      {
        key: 'counting',
        development: '',
        production: '',
      },
      {
        key: 'inspection',
        development: 'https://rc-inspect.wise-apps.com/storemonitor',
        production: 'https://rc-inspect.wise-apps.com/storemonitor',
      },
      {
        key: 'signage',
        development: 'https://signage-cms.wise-iservice.com/psn/storevue.py?return=iservice',
        production: 'https://signage-cms.wise-iservice.com/psn/storevue.py?return=iservice',
      },
      {
        key: 'signage3',
        development: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
        production: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
      },
      {
        key: 'iclinic',
        development: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
        production: 'https://preview-signage-cms.wise-iservice.com/AutoLogin',
      },
      {
        key: 'health',
        development: 'https://rc-ih.wise-apps.com',
        production: 'https://rc-ih.wise-apps.com',
      },
      {
        key: 'signage_bi',
        development: 'https://preview-sig-bi.wise-iservice.com',
        production: 'https://preview-sig-bi.wise-iservice.com',
      },
    ]
  },
  {
    key: 'iclinic',
    serverBaseUrls: [
      {
        key: 'api',
        development: 'https://api-apps.wise-iclinic.com',
        production: 'https://api-apps.wise-iclinic.com',
      },
      {
        key: 'pos',
        development: 'https://pos.wise-iservice.com',
        production: 'https://pos.wise-iservice.com',
      },
      {
        key: 'ccm',
        development: 'https://coldchain.wise-iservice.com',
        production: 'https://coldchain.wise-iservice.com',
      },
      {
        key: 'sub',
        development: 'https://sub-apps.wise-iclinic.com',
        production: 'https://sub-apps.wise-iclinic.com',
      },
      {
        key: 'counting',
        development: '',
        production: '',
      },
      {
        key: 'inspection',
        development: 'https://inspection.wise-iservice.com/storemonitor',
        production: 'https://inspection.wise-iservice.com/storemonitor',
      },
      {
        key: 'signage',
        development: 'https://signage-cms.wise-iservice.com/psn/storevue.py?return=iservice',
        production: 'https://signage-cms.wise-iservice.com/psn/storevue.py?return=iservice',
      },
      {
        key: 'signage3',
        development: 'https://signage-cms.wise-iclinic.com/AutoLogin',
        production: 'https://signage-cms.wise-iclinic.com/AutoLogin',
      },
      {
        key: 'iclinic',
        development: 'https://signage-cms.wise-iclinic.com/AutoLogin',
        production: 'https://signage-cms.wise-iclinic.com/AutoLogin',
      },
      {
        key: 'health',
        development: 'https://ih.wise-apps.com',
        production: 'https://ih.wise-apps.com',
      },
      {
        key: 'signage_bi',
        development: '',
        production: '',
      },
    ]
  },
]
