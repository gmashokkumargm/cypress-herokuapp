const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin-advertisement.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      // implement node event listeners here

      let adName = ['Nike', 'Adidas', 'Puma', 'Fila', 'Red Tape', 'Skechers']
      let streetName = ['1 street', '2 street', '3 street', '4 street', '5 street', '6 street',]
      let roomsNo = ['101', '102', '103', '104', '105', '106']
      let priceValue = [20, 30, 40, 50, 60, 70]

      const pickRandom = ( input ) => {
        return input[Math.floor((Math.random() * input.length))];
      };

      on('task', {
        randomGenerate: () => {
          let name = pickRandom(adName);
          let street = pickRandom(streetName);
          let room = pickRandom(roomsNo);
          let price = pickRandom(priceValue);
          return { name, street, room, price };
        }
      })
    },
  },
});
