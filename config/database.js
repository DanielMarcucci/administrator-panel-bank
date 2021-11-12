module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'BANK'),
        username: env('DATABASE_USERNAME', 'BANK'),
        // password: env('DATABASE_PASSWORD', 'password'),
        password: env('DATABASE_PASSWORD', 'b4Nk\18027'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        debug: true
      }
    },
  },
});
