import { z } from "zod";

const reservationTimes = [
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
] as const;

const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"] as const;

const occasions = [
  "None",
  "Anniversary",
  "Birthday",
  "Date night",
  "Business dinner",
  "Other",
] as const;

export const reservationRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name must be 100 characters or fewer."),
  email: z.string().email("Please provide a valid email address."),
  phone: z
    .string()
    .min(7, "Phone number is too short.")
    .max(30, "Phone number is too long."),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format."),
  time: z.enum(reservationTimes),
  partySize: z.enum(partySizes),
  occasion: z.enum(occasions).optional(),
  notes: z
    .string()
    .max(1000, "Notes must be 1000 characters or fewer.")
    .optional(),
});

export type ReservationRequestInput = z.infer<typeof reservationRequestSchema>;
