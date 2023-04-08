module.exports = ({ env }) => ({

    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', process.env.PORT || 1337),
    app: {
      keys: env.array('APP_KEYS', [process.env.APP_KEY]),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },

  

  // host: env('HOST', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  // app: {
  //   keys: env.array('APP_KEYS'),
  // },
  // webhooks: {
  //   populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  // },
    settings: {
      cleanup: {
        enable: false,
      },
    },
  
  // settings: {
  //   cleanup: {
  //     enable: false,
  //     cron: '0 0 * * *', 
  //     Run every day at midnight
  //   },
  // },
});
