export default function Inhalt() {
return (
    <section id="Inhalt" className="text-[#434656] w-screen flex items-center flex-col bg-[#d4edeb] h-[110vh] gap-24 p-24"> 
        <div>
            <h3 className="font-mono text-5xl text-center tracking-[15px]">Inhalt</h3>
            <p className="text-[12px] opacity-70">Keiner der Unterpunkte (außer der Kontaktbereich) ist verpflichtend.</p>
        </div>
        <p className="tracking-[2px] text-center font-mono font-medium">
            Jegliche Inhalte lassen sich anpassen im Admin Pannel. <br/>Das finde ist zu unter ihrer url/admin.html bspw. https://www.schirmerrinke.de/admin.html
        </p>
        <ol className="pl-4 flex flex-col gap-12">
            <li className="mb-4 text-lg">
                <p className="text-2xl underline">Startseite:</p> 
                <ol className="pl-4">
                    <li className="mb-2"><span className="font-semibold">Überschrift: </span>Firmenname/Name der Organisation</li>
                    <li className="mb-2"><span className="font-semibold">Beschreibung: </span>Beschreibung der Tätigkeit/Nähere Infos über die zugrunde liegende Website (am besten 2-4 Sätze).</li>
                </ol>
            </li>
            <li className="mb-4 text-lg">
                <p className="text-2xl underline">Dienstleistungen:</p> 
                <ol className="pl-4">
                    <li className="mb-2"><span className="font-semibold">Überschrift: </span>Name der Dienstleistung</li>
                    <li className="mb-2"><span className="font-semibold">Beschreibung: </span>Beschreibung der Dienstleistung: Was bietet man an? Was kostet es? Wie lange dauert es? Hier können sowohl kurze Sätze stehen als auch lange. Wichtig ist es, dass die ersten 3-4 Sätze sehr aussagekräftig sind, denn der Rest wird erst in der <abbr title="Ein überlagerndes Fenster, das zusätzliche Informationen anzeigt">Lightbox</abbr> angezeigt.</li>
                </ol>
            </li>
            <li className="mb-4 text-lg">
                <p className="text-2xl underline">Galerie:</p> 
                <ol className="pl-4">
                    <li className="mb-2"><span className="font-semibold">Info: </span>Fotos besitzen Untertitel. Diese sind abhängig von den Namen der Bildern. Diese müssen vor Hochladen umbenannt werden.</li>
                </ol>
            </li>
            <li className="mb-4 text-lg">
                <p className="text-2xl underline">Bewertungen:</p> 
                <ol className="pl-4">
                    <li className="mb-2"><span className="font-semibold">Überschrift: </span>Name der Firma/bewertenden Person</li>
                    <li className="mb-2"><span className="font-semibold">Beschreibung: </span>Bewertung der Person, als Zitat oder ähnlichem.</li>
                </ol>
            </li>   
        </ol>
    </section> 
    );
}
