const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Refugees Global - Connect and Collaborate", // <title>
  shortSiteTitle: "Refugees Global App", // <title> ending for posts and pages
  siteDescription: "Refugees Globals is an international humanitarian app.",
  siteUrl: "https://refugees.global",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  
  // author
  authorName: "Ossiel Romero",
  authorTwitterAccount: "refugeesglobal",
  // info
  infoTitle: "Refugees Global",
  infoTitleNote: "Connect and Collaborate",
  // manifest.json
  manifestName: "Refugees Global - Connect and Collaborate",
  manifestShortName: "Refugees Global", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "refugeesglobal@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/ossielromero" },
    { name: "twitter", url: "https://twitter.com/refugeesglobal" },
    { name: "facebook", url: "https://facebook.com/refugeesglobal" }
  ]
};
