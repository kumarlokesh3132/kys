// db/knex.js
import knex from 'knex';

const connectionString = process.env.DATABASE_URL; // or your direct string in dev

const knexInstance = knex({
  client: 'pg',           // or 'pg' for PostgreSQL, 'sqlite3', etc.
  connection: connectionString,
  // Only if you use PostgreSQL and need SSL (Neon, Supabase, Railway, etc.)
  ...(connectionString.includes('postgres') && {
    ssl: { rejectUnauthorized: false }
  }),
});

export default knexInstance;
