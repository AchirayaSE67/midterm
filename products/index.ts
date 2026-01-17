import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { productService } from "./service.ts";

const app = new Hono();

const bookSchema = z.object({
  BookID: z.string(),
  Title: z.string().min(5),
  ISBN: z.string(),
  YearPublished: z.number(),
  Category: z.string()
});

app.post("/", zValidator("json", bookSchema), async (c) => {
  try {
    productService.create(c.req.valid("json"));
    return c.json({ message: "บันทึกหนังสือสำเร็จ" });
  } catch (e: any) {
    return c.json({ error: e.message }, 400);
  }
});

app.put("/:id", zValidator("json", bookSchema), async (c) => {
  try {
    productService.edit(Number(c.req.param("id")), c.req.valid("json"));
    return c.json({ message: "แก้ไขข้อมูลสำเร็จ" });
  } catch (e: any) {
    return c.json({ error: e.message }, 400);
  }
});

export default app;