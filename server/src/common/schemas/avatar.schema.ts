import { z } from "zod";

export const avatarSchema = z
  .string()
  .url("Avatar must be a valid URL.");