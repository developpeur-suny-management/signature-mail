import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import ImageMailApple from "@/app/images/fenetre-signatures-apple-mail.jpg";

interface ItemListProps {
  number: number;
  children: React.ReactNode;
}

function ItemList({ number, children }: ItemListProps) {
  return (
    <div className="flex flex-row gap-4 border-b py-3">
      <div className="h-[32px] min-w-8 flex justify-center items-center text-slate-800 py-1 px-2.5 text-sm rounded-full bg-blue-500/10">
        {number}
      </div>
      <div className="min-h-[32px] min-w-8 flex flex-col gap-2 justify-center text-slate-800">
        {children}
      </div>
    </div>
  );
}

export default function Steps() {
  return (
    <div className="flex  flex-col p-8 ">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold text-slate-800 ">
            Créer la signature d’e-mail dans Mail sur Mac
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <ItemList number={1}>
                Remplir le formulaire sur le navigateur Google Chrome
              </ItemList>
              <ItemList number={2}>
                Cliquer sur le bouton{" "}
                <span className="border border-slate-200 rounded p-1 bg-white/50 mx-2 text-xs">
                  Créer signature mail
                </span>
              </ItemList>
              <ItemList number={3}>
                Cliquer sur le bouton
                <span className="border border-slate-200 rounded p-1 bg-white/50 mx-2 text-xs">
                  Copier dans le Presse-papiers
                </span>
              </ItemList>
              <ItemList number={4}>
                Accédez à l’app Mail sur votre Mac.
                <br />
                Choisissez Mail {">"} Réglages, puis cliquez sur Signatures.
              </ItemList>
              <ItemList number={5}>
                Decochér l’option &quot;Toujours utiliser ma police de message
                par défault&quot;
                <Image src={ImageMailApple} alt="Image Mail Apple" />
              </ItemList>
              <ItemList number={6}>Coller la signature</ItemList>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
