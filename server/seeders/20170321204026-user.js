import faker from 'Faker';

module.exports = {
    up: function(queryInterface, Sequelize) {
      /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkInsert('Person', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
      return queryInterface.bulkInsert('Users', [{
        name: 'administrator',
        username: 'admin',
        email: 'admin@someone.com',
        password: '123456password',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },

  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
