import { pool } from "../config/db.js";

export async function getAllIngredientsService(search) {
    let query = `
    SELECT DISTINCT ingredient_group
    FROM ingredient_product_buckets
  `;

  const values = [];

  if (search && search.trim()) {
    values.push(`%${search}%`);
    query += ` WHERE ingredient_group ILIKE $1`;
  }

  query += ` ORDER BY ingredient_group`;

  const result = await pool.query(query, values);

  return result.rows.map(row => row.ingredient_group);
}
