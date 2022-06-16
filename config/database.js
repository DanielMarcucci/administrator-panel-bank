module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        port: env.int('DB_PORT', 5432),
        host: env('DATABASE_HOST', '34.135.1.250'),
        database: env('DATABASE_NAME', 'bank'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '12345'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        debug: true
      }
    },
  },
});
