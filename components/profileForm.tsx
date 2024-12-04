import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { formSchema } from "@/components/profileFormSchema";

type ProfileFormProps = {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
};

export function ProfileForm({ onSubmit }: ProfileFormProps) {
  const defaultValues = {
    name: "",
    job: "",
    phoneNumber: "",
    email: "",
    address: "70, Rue de Ponthieu, 75008 Paris",
    url: "http://www.sunymanagement.com",
    message: undefined, // Le message n'est pas défini par défaut
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    // Retirer le champ message s'il n'est pas activé
    if (!showMessage) {
      delete data.message;
    }
    setIsSubmitted(true); // Marquer comme soumis
    onSubmit(data);
  };

  const handleReset = () => {
    setShowMessage(false); // Réinitialise aussi l'état de la Switch
    form.reset(defaultValues); // Réinitialise les valeurs par défaut
    setIsSubmitted(false); // Réinitialise l'état de soumission
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Poste</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre poste" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de téléphone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrez votre numéro de téléphone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre adresse email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre adresse" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de la page web</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrez l'URL de votre page web"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center space-x-2">
          <Switch
            id="as-message"
            checked={showMessage}
            onCheckedChange={() => setShowMessage(!showMessage)}
          />
          <Label htmlFor="as-message">Ajouter un message personnalisé</Label>
        </div>

        {showMessage && (
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message personnalisé</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Entrez votre message personnalisé"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <div className="flex gap-4">
          <Button variant="outline" type="button" onClick={handleReset}>
            Effacer le formulaire
          </Button>
          <Button type="submit">Créer signature mail</Button>
        </div>
        {isSubmitted && (
          <div className="formResult">
            <p>Votre formulaire a été soumis avec succès !</p>
          </div>
        )}
      </form>
    </Form>
  );
}
