import Database from 'better-sqlite3';
export const db = new Database('local.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS LibraryBook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    BookID TEXT NOT NULL UNIQUE,
    Title TEXT NOT NULL,
    ISBN TEXT NOT NULL,
    YearPublished INTEGER NOT NULL,
    Category TEXT NOT NULL
  )
`);