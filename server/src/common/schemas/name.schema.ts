import { z } from "zod";

export const nameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters.")
  .max(100, "Name cannot exceed 100 characters.");