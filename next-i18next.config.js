const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "fr"],
    localeDetection: true,
  },
  defaultNS: "common",
  localePath: path.resolve("./public/locales"),
};
