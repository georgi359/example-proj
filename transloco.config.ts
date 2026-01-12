import {TranslocoGlobalConfig} from '@jsverse/transloco-utils';
    
const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'public/i18n/',
  langs: ['bg', 'en'],
  defaultLang: 'bg',
  keysManager: {}
};
    
export default config;