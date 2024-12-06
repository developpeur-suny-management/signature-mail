"use client";
import { useState } from "react";
import { z } from "zod";
import { ProfileForm } from "@/components/profileForm";
import { FormResult } from "@/components/formResult";
import { formSchema } from "@/components/profileFormSchema";
import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  // Utilisation de `z.infer` pour obtenir le type de données du formulaire
  const [submittedData, setSubmittedData] = useState<z.infer<
    typeof formSchema
  > | null>(null);

  // Déclaration de la fonction `handleFormSubmit` avec le type explicite
  const handleFormSubmit = (data: z.infer<typeof formSchema>) => {
    setSubmittedData(data);
  };
  return (
    <div className="grid grid-rows-[0px_1fr_0px] justify-items-center min-h-screen pt-8 pb-16">
      <main className="flex  row-start-2 items-center sm:items-start w-full px-16">
        <div className="flex flex-col gap-8 lg:flex-row space-x-8 w-full justify-evenly">
          <div className="flex flex-col gap-8 w-full lg:w-2/5">
            <h1 className="text-4xl font-extrabold  !leading-normal tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-blue-900">
              Signature email
            </h1>
            <Alert variant="warning">
              <CircleAlert className="h-4 w-4" />
              <AlertTitle>Attention</AlertTitle>
              <AlertDescription>
                Pour garantir le correct fonctionnement de ce générateur de
                signatures d&apos;email, veuillez utiliser le navigateur{" "}
                <a
                  href="https://www.google.com/intl/fr_fr/chrome/"
                  target="_blank"
                  className="underline"
                >
                  Google Chrome
                </a>
                .
              </AlertDescription>
            </Alert>
            <ProfileForm onSubmit={handleFormSubmit} />
          </div>
          {/* Composant Formulaire */}

          {/* Composant Résultat */}
          {submittedData && <FormResult data={submittedData} />}
        </div>
      </main>
    </div>
  );
}
