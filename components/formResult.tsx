import { useRef } from "react";
import { Button } from "../components/ui/button";
import { Toaster } from "./ui/toaster";
import { useToast } from "../hooks/use-toast";
import Steps from "@/components/steps";
import { z } from "zod";
import { formSchema } from "@/components/profileFormSchema";

type FormResultProps = {
  data: z.infer<typeof formSchema> | null;
};

export function FormResult({ data }: FormResultProps) {
  const tableRef = useRef<HTMLTableElement>(null);
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (tableRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(tableRef.current); // Sélectionne le contenu de la table
      selection?.removeAllRanges(); // Supprime les sélections existantes
      selection?.addRange(range); // Ajoute la nouvelle sélection

      try {
        document.execCommand("copy"); // Copie le contenu sélectionné dans le presse-papiers
        toast({
          variant: "success",
          title: "Copié avec success",
          description: "Signature copiée dans le presse-papiers !",
        });
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Échec de la copie dans le presse-papiers !",
          duration: 100,
        });
        console.error("Échec de la copie dans le presse-papiers", err);
      }

      // Supprimer la sélection après la copie
      selection?.removeAllRanges();
    }
  };

  const iconStyle: React.CSSProperties = {
    borderStyle: "solid",
    borderWidth: "0px",
    float: "left",
    height: "16px",
    width: "16px",
    minHeight: "16px",
    minWidth: "16px",
  };
  const tdIconStyle: React.CSSProperties = {
    width: "24px",
    height: "16px",
    minWidth: "24px",
  };

  const tableStyle: React.CSSProperties = {
    verticalAlign: "-webkit-baseline-middle",
    fontSize: "small",
    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#152948",
    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
  };

  return (
    <div className="w-full lg:w-2/5 lg:mt-28 flex flex-col justify-center">
      {data ? (
        <div className="flex flex-col gap-6">
          <div className="rounded-md flex  flex-col p-8 bg-white drop-shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 border-slate-300">
              Votre signature
            </h2>
            <div className="flex py-12 items-center">
              <table
                ref={tableRef}
                align="left"
                border={0}
                cellPadding="0"
                cellSpacing="0"
                style={tableStyle}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        paddingRight: "4px",
                        width: "104px",
                        maxWidth: "104px",
                      }}
                    >
                      <img
                        alt="Suny logo"
                        src="https://uc191dfcad3812aaaea05608763f.previews.dropboxusercontent.com/p/thumb/ACj2AwQr82Y_QT0q7ccTa-ZgRC3UhLFR-ecirpCVfUaI8IVuJsbHXiADK2qlVN-_-gM2MFE-uLtfn5Qk8zoI5JgO4SUpHxoMpCCHMyawfN05ARQBeE4JMDmpvAyz8u-IaV3pLdTvLhVxXZk8xxv0OczGpNU8WVgyRtmAj7dCMJgK5UfZ2Lpo4ZliMkgcC5u6MX8TTAdQCHjQ1-m7qszzIJGJf83_Ickze2Ijv7sJgWVqTLsik03_cImMQVYDyGS5iISy1-H_ZDVUqJIQt4pf8kcFxXX_tJjArnEqxkd-Kweaok9Dzk9W0vjCTLZ2ytdwf2oGrneVR3O_eDSZgSoVYxg1dnZcEMZuTygLaC6O33PEjzwVJu2PbRNCEJgXC4cJDapOi9lekdk2jhD2qwQJ8LIn/p.gif"
                        style={{
                          borderStyle: "solid",
                          borderWidth: "0px",
                          height: "100px",
                          width: "100px",
                          minHeight: "100px",
                          minWidth: "100px",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        borderLeft: "1px solid rgb(21, 41, 72)",
                        width: "1px",
                      }}
                    >
                      &nbsp;
                    </td>
                    <td style={{ paddingLeft: "8px" }}>
                      <table
                        align="left"
                        border={0}
                        cellPadding="1"
                        cellSpacing="4"
                        style={tableStyle}
                      >
                        <tbody>
                          <tr>
                            <td>
                              <strong
                                style={{
                                  fontWeight: "bold",
                                  color: "#152948",
                                  fontFamily:
                                    "Poppins, Helvetica, Arial, sans-serif",
                                  textTransform: "uppercase",
                                }}
                              >
                                {data.name}
                              </strong>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingBottom: "16px" }}>
                              <em
                                style={{
                                  color: "#152948",
                                  fontFamily:
                                    "Poppins, Helvetica, Arial, sans-serif",
                                }}
                              >
                                {data.job}
                              </em>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table
                                align="left"
                                border={0}
                                cellPadding="2"
                                cellSpacing="2"
                                style={tableStyle}
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <img
                                        alt="Phone icon"
                                        src="https://ucd7481d23d5b9cd85d2f4b76adc.previews.dropboxusercontent.com/p/thumb/ACjgfmkXbqo-B1LVfDtAg8JBBFMZ1j8I4qgedNDoTEBMlUq6cXE7P1ftoCxF1Hw-Lj6igeUO6jPIc0EDQzARl7cjJPTDfFJUR33BM1S8MtJJ5L0pyS70z1yDz2AzTxfWuFoS_FljHK-zd166q-uCsNVflK0bF4bCEygB84fbFJ6c4jjr4XFuRyZlTEcUpH0jRUGOkYFSOoz956gFr9ZqBIBpeeSYgTWR-O0Z3pmwXltGhg6EyiZrgCgbOnJew6vl6eakkLJcNBD1kouyFE3SKpQE9YoLwoj6cgzGIMZun7oe-9ZJgUpbjjPTrsk5hJqxZHpIuL0_S3oBLVeTSnrkiKGG4MOXL-IX75CGXdAjVuTfMYuqNuWN3urrZYEuOkSTPTGenQivCPm9AoXMeme_evdx/p.png"
                                        style={iconStyle}
                                      />
                                    </td>
                                    <td>
                                      <a
                                        href={"tel:" + data.phoneNumber}
                                        style={linkStyle}
                                      >
                                        <small>{data.phoneNumber}</small>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={tdIconStyle}>
                                      <img
                                        alt="Email icon"
                                        src="https://uc7e69ca9487ed7a90b212c673c8.previews.dropboxusercontent.com/p/thumb/ACgDKLLHoBBzcTPc2XZGSkCZhxw4dI_FE_waZbBbHzxElnFhW_q-Eg0pCO0qg1qy4EZHl20fGj-K8CjFfQuS644KNRzgBoB6TPft6OzaFcfg4Wd_Lfg2P4JTyeLPy7QfOy8Ki5GXGcxvu6Wb4_-uFJ6ik908njhPkEND0E5BtlXbEBqD6ld8NWXt_z_z42xqh2O3Iu914TXBIxDKhjNEPOTTrEZkOnbDEttWMqCnsJNanERE1hpk-R11ROOA1evBfdA5egvPwE0wnE_nJCSuvTCgsBgyOJDB5pKCz5BGwt5tnUI395U4nnXasVmxF5RtsV4VgWOzjHDUXnYIwsRof1Ow1PXYgR3W2IOZ2_Y6ffkkqmtgOGnVIsvMWAFKnxRp5k4nyaNHc25kpKJo_BbhiH5x/p.png"
                                        style={iconStyle}
                                      />
                                    </td>
                                    <td>
                                      <a
                                        href={"mailto:" + data.email}
                                        style={linkStyle}
                                      >
                                        <small>{data.email}</small>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        alt="address icon"
                                        src="https://ucf2ff55de134b3b7b4ca819740e.previews.dropboxusercontent.com/p/thumb/ACjxrHpVEyBpPAE8y6KUxgl_vsvT8RC9xDOqC4dcLpkJMWXNz8YqvVvvVZePw2RkW74UbvlE1AmoJrwY3aQ7Y-ZrH_-YJty_oV4Z3BO81IakrFkJgIa2anYM2QNJstLiX3uK5m9IgxiQUnm7qFZMR17NMRaCxgPp9lGWpRm-jgxWfI5Z5xE9qviOIhc4KduxvvWl61Hk27HevTzUKW0AeJmgWNqqc-DW1XZ6MpkellqHxu2yAhKRY3tgRZH2CAIoFHAlmpRcgQTvNU0PNW9Y7KK9T29dIDHGaZ-rVmnDiLxPHsVSOEF56vVjYW7JfbBdqpI9GKuspBgbU_aws0RY4hjVfKEQPAUvOQyRovu2ZJEYXxkox9EiJ50RtQyGouRHF6SK2g--tp5BCFi1FG9dN13x/p.png"
                                        style={iconStyle}
                                      />
                                    </td>
                                    <td>
                                      <small style={linkStyle}>
                                        {data.address}
                                      </small>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        alt="url icon"
                                        src="https://ucfbea5ae73a9c87d9a18eced820.previews.dropboxusercontent.com/p/thumb/ACi1pLj1CsMNkqsgwS21J4Gfbn2Muy8yWdZYJUjhGFy3G29o0WUZre6r5p4dggIUyOWvSL6PdzmRDnosIcdeOJDPDs8z43dAAUlMbgBY2EkOFAtZ4olv_x92hAm1mT_ZFTNOuEf4OSAaavfdh-5r9EWMEJp4LBElygKRMCQMWnPSkL8P31nmcASyOji9Ugsrm1qU3h-zoUJCLD49VbnytzIxE1Elfz3IxFYujtt4A3r1wwoon2fpOAPWoEIfUVJQoz0dRYMTWvo2UJzatEXtYOSuUULdfnOzce_vKTnuKCpSoxTOV_SPcoZ5fL_oUjMHbFqVt7PXPbk1xuc8cv85ciH99Srv9miRwyfU9rFzbeMsLcQsbEmAshaooqH3t9uoTnOR8LCixHhE4xN_yHzb6_rF/p.png"
                                        style={iconStyle}
                                      />
                                    </td>
                                    <td>
                                      <a
                                        href={data.url}
                                        target="_blank"
                                        style={linkStyle}
                                      >
                                        <small> {data.url}</small>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                {data.message && (
                  <tbody>
                    <tr>
                      <td
                        colSpan={3}
                        style={{ paddingTop: "16px", fontWeight: "600" }}
                      >
                        <span style={linkStyle}>{data.message}</span>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
            <div>
              <Button onClick={copyToClipboard}>
                Copier dans le Presse-papiers
              </Button>
            </div>
          </div>
          <Steps />
        </div>
      ) : (
        <p className="mt-4 text-gray-500">Aucune donnée soumise.</p>
      )}
      <Toaster />
    </div>
  );
}
