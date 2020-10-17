// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host : 'ec2-107-22-241-205.compute-1.amazonaws.com',
      database: 'ddrac2piio3o61',
      user:     'qgqweyxsardniw',
      password: '683022fd165bfc9dbf81c5c9302005904c008cf616a9d41a8c2b6087e2a3f759',
      port: 5432,
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory : './src/database/migrations'
    },
    useNullAsDefault : true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      database: 'projetoreact',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host : 'ec2-107-22-241-205.compute-1.amazonaws.com',
      database: 'ddrac2piio3o61',
      user:     'qgqweyxsardniw',
      password: '683022fd165bfc9dbf81c5c9302005904c008cf616a9d41a8c2b6087e2a3f759',
      port: 5432,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
