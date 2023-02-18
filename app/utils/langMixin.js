import texts from '../locales/locales.json' assert { type: "json" };

export const LangMixin = superClass =>  class extends superClass {
  t(key) {
    return texts[window.AppConfig.lang][key] || key;
  }
}