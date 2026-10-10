const pool = require('./db');
const { getAllBooks } = require('./queries');

async function main() {
  try {
    console.log('--- Connection test ---');
    const conn = await pool.getConnection();
    console.log('Connected to MySQL ✓');
    conn.release();

    console.log('\n--- All books ---');
    console.log(await getAllBooks());

    console.log('\n--- Book with ID 1 ---');
    console.log(await getBookById(1));

  } catch (error) {
    console.error('Something went wrong:', error.message);
  } finally {
    await pool.end();
  }
}

main();