console.log(process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  // host: process.env.DB_HOST || 'localhost',
  // port: +process.env.DB_PORT || 5432,
  // username: process.env.DB_USERNAME || 'postgres',
  // password: process.env.DB_PASSWORD || 'Amauri32',
  // database: process.env.DB_NAME || 'nest_api',
  url: process.env.DATABASE_URL,
  //ssl: { rejectUnauthorized: false },
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNC == 'true' || false,
};
