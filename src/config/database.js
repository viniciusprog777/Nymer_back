// require("dotenv").config();

module.exports = {
  url: 'mysql://root:root@127.0.0.1:3306/nymer',
  config: {
    dialect: "mysql",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};


