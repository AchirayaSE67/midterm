import { db } from "../db.ts";

export const productRepo = {
  getByBookID: (bookId: string) => db.prepare("SELECT * FROM LibraryBook WHERE BookID = ?").get(bookId),
  getById: (id: number) => db.prepare("SELECT * FROM LibraryBook WHERE id = ?").get(id),
  
  insert: (p: any) => {
    return db.prepare(`
      INSERT INTO LibraryBook (BookID, Title, ISBN, YearPublished, Category) 
      VALUES (?, ?, ?, ?, ?)
    `).run(p.BookID, p.Title, p.ISBN, p.YearPublished, p.Category);
  },
  
  update: (id: number, p: any) => {
    return db.prepare(`
      UPDATE LibraryBook SET Title = ?, ISBN = ?, YearPublished = ?, Category = ? WHERE id = ?
    `).run(p.Title, p.ISBN, p.YearPublished, p.Category, id);
  }
};