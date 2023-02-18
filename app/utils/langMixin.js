import texts from '../locales/locales.json' assert { type: "json" };

export class LangMixin {
  constructor() {
    this.lang = window.AppConfig.lang;
  }

  t(key) {
    return texts[this.lang][key] || key;
  }
}