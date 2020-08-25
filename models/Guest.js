const Sequelize = require('sequelize');
const sq=require("../config/sequelize");

const Guest = sq.define('guest', {
    Designation: {
        type: Sequelize.STRING
      },
    Name: {
      type: Sequelize.STRING
    },
     Email: {
      type: Sequelize.STRING
    },
    Gender: {
        type: Sequelize.STRING
      },
    Event: {
        type: Sequelize.STRING
      },
    Number: {
        type: Sequelize.INTEGER
      },
    Allergy: {
        type: Sequelize.STRING
      },
      Checked:{
        type: Sequelize.STRING
      }
  });

  Guest.sync().then(() => {
    console.log('table created');
  });

  module.exports= Guest;