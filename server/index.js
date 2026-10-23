<<<<<<< HEAD
const pool = require('./db');
const { getAllBooks,getBookById} = require('./queries');

=======

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
 
>>>>>>> main
async function main() {
  try {
    console.log('--- Connection test ---');
    const conn = await pool.getConnection();
    console.log('Connected to MySQL ✓');
    conn.release();
<<<<<<< HEAD

    console.log('\n--- All books ---');
    console.log(await getAllBooks());

    console.log('\n--- Book with ID 1 ---');
    console.log(await getBookById(1));

=======
 
    console.log('\n--- All books ---');
    console.log(await getAllBooks());
 
>>>>>>> main
  } catch (error) {
    console.error('Something went wrong:', error.message);
  } finally {
    await pool.end();
  }
}
<<<<<<< HEAD

main();
=======
 
main();
 
>>>>>>> main
