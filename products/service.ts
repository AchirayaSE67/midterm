import { productRepo } from "./repository.ts";

export const productService = {
  create: (data: any) => {
    if (productRepo.getByBookID(data.BookID)) {
      throw new Error("รหัสหนังสือ (BookID) นี้มีในระบบแล้ว!");
    }
    return productRepo.insert(data);
  },
  
  edit: (id: number, data: any) => {
    const old = productRepo.getById(id) as any;
    if (!old) throw new Error("ไม่พบข้อมูลหนังสือ");
    
    if (data.BookID !== old.BookID) {
      throw new Error("ห้ามแก้ไขรหัสหนังสือ (BookID) เด็ดขาด!");
    }
    return productRepo.update(id, data);
  }
};