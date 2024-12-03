import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  job: z
    .string()
    .min(2, { message: "Le poste doit contenir au moins 2 caractères." }),
  phoneNumber: z.string().regex(/^\d{10,13}$/, {
    message: "Le numéro de téléphone doit contenir entre 10 et 13 chiffres.",
  }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse email valide." }),
  address: z
    .string()
    .min(5, { message: "L'adresse doit contenir au moins 5 caractères." }),
  url: z.string().url({ message: "Veuillez entrer une URL valide." }),
});
