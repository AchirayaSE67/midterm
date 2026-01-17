# LibraryBook Midterm 

โปรเจกต์จัดการข้อมูลห้องสมุด พัฒนาด้วย Hono Framework และ SQLite

## Tech Stack
- **Framework:** Hono (Node.js)
- **Database:** SQLite (Better-sqlite3)
- **Validation:** Zod
- **Runtime:** tsx

## โครงสร้างโปรเจกต์ (Project Structure)
เนื่องจากข้อจำกัดในการอัปโหลด ไฟล์หลักจึงถูกจัดวางไว้ดังนี้:
- `index.ts`: ไฟล์หลักสำหรับรัน Server (Port 3000)
- `db.ts`: ไฟล์เชื่อมต่อและสร้างตาราง LibraryBook
- `products/`: โฟลเดอร์เก็บ Logic (Controller, Service, Repository)
- `package.json`: ไฟล์ตั้งค่า Dependencies และ Scripts

## วิธีการติดตั้งและรันโปรแกรม
1. ติดตั้ง Dependencies:
   ```bash
   npm install better-sqlite3 hono @hono/node-server @hono/zod-validator zod tsx
   npm install -D @types/better-sqlite3 @types/node

##LibraryBook_Mid/
├── src/
│   ├── products/
│   │   ├── index.ts        <-- (Controller: รับค่า/เช็ค Zod)
│   │   ├── repository.ts   <-- (Repository: คุยกับ DB)
│   │   └── service.ts      <-- (Service: เช็คกฎเหล็ก)
│   ├── db.ts               <-- (สร้างตาราง LibraryBook)
│   └── index.ts            <-- (ไฟล์หลัก: สั่ง serve รัน Port 3000)
├── package.json
└── package-lock.json
