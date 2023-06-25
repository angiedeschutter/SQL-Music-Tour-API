'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('set_time', [{
      set_time_id: 1,
      stage_id: 3,
      event_id: 1,
      band_id:1,
      start_time:'2023-06-22 16:00:00',
      end_time:'2023-06-22 19:00:00'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('set_time', null, {})
  }
};
