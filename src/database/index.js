const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const conex = new Sequelize(dbConfig.url, dbConfig.config);


// for (let assoc of Object.keys(Question.associations)) {
//     for (let accessor of Object.keys(Question.associations[assoc].accessors)) {
//         console.log(Question.name + '.' + Question.associations[assoc].accessors[accessor] + '()');
//     }
// }