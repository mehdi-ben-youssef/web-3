
const mysql = require('mysql2/promise');
 
// Create the pool once at application startup
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library_db',
});
 
async function getAllBooks() {
  const [rows] = await pool.query('SELECT id, title, available FROM books');
  return rows;
}
 
async function main() {
  try {
    console.log('--- Connection test ---');
    const conn = await pool.getConnection();
    console.log('Connected to MySQL ✓');
    conn.release();
 
    console.log('\n--- All books ---');
    console.log(await getAllBooks());
 
  } catch (error) {
    console.error('Something went wrong:', error.message);
  } finally {
    await pool.end();
  }
}
 
main();
 