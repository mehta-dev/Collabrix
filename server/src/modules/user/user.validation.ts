import { z } from "zod";

import {
  avatarSchema,
  emailSchema,
  nameSchema,
  passwordSchema,
} from "../../common/schemas/index.js";

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const updateProfileSchema = z.object({
  name: nameSchema.optional(),
  avatar: avatarSchema.nullable().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
