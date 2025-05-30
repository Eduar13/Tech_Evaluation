const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  env:{
    baseUrl:"https://www.saucedemo.com/"
  },
  e2e: {
         specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
