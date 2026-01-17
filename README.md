LibraryBook Midterm 

Tech Stack
- **Framework:** Hono (Node.js)
- **Database:** SQLite (Better-sqlite3)
- **Validation:** Zod
- **Runtime:** tsx

โครงสร้างโปรเจกต์ (Project Structure)
เนื่องจากข้อจำกัดในการอัปโหลด ไฟล์หลักจึงถูกจัดวางไว้ ดังนี้
- `index.ts`: ไฟล์หลักสำหรับรัน Server (Port 3000)
- `db.ts`: ไฟล์เชื่อมต่อและสร้างตาราง LibraryBook
- `products/`: โฟลเดอร์เก็บ Logic (Controller, Service, Repository)
- `package.json`: ไฟล์ตั้งค่า Dependencies และ Scripts

วิธีการติดตั้งและรันโปรแกรม
1. ติดตั้ง Dependencies:
   ```bash
   npm install better-sqlite3 hono @hono/node-server @hono/zod-validator zod tsx
   npm install -D @types/better-sqlite3 @types/node

วิธีการทดสอบด้วย Thunder Client
สามารถทดสอบ API ได้ผ่าน Thunder Client ใน VS Code ตามขั้นตอนดังนี้:

1. **POST Request (เพิ่มหนังสือใหม่):**
   - URL: `http://localhost:3000/api/books`
   - Method: `POST`
   - Body (JSON): ใส่ข้อมูล BookID, Title, ISBN, YearPublished และ Category
   
2. **PUT Request :
   - URL: `http://localhost:3000/api/books/{id}`
   - Method: `PUT`
   - **หมายเหตุ:** ระบบจะอนุญาตให้แก้ไขได้เฉพาะข้อมูลทั่วไป แต่ห้ามแก้ไข `BookID` ตามเงื่อนไข
  
ปล. หนูแก้จนbugไปแล้วค่ะขออภัยด้วยค่ะ ขอบคุณค่ะ 
