import { z } from "zod";

export const reservationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().trim().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(30, "Phone number is too long"),
  date: z
    .string()
    .trim()
    .refine((value) => !Number.isNaN(Date.parse(value)), "Invalid date"),
  time: z.string().trim().min(1, "Time is required"),
  partySize: z.string().trim().min(1, "Party size is required"),
  occasion: z.string().trim().max(100, "Occasion is too long").optional(),
  message: z.string().trim().max(2000, "Message is too long").optional(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;
