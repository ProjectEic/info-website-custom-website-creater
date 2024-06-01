import AspectRatio from "../images/aspect_ratio.webp";
import Image from "next/image";

export default function Bilder() {
    return (
        <section id="Bilder" className="text-[#434656] w-screen flex items-center flex-col h-[175vh] gap-24 p-24 text-[#d4edeb]"> 
            <div>
                <h3 className="font-mono text-5xl text-center tracking-[15px]">Bilder</h3>
            </div>
            <p className="tracking-[2px] text-start font-mono font-medium">
                Alle Fotos außer das Hauptfoto auf der Startseite sind austauschbar. Wenn Sie wollen, dass das Foto auf der Startseite ausgetauscht wird, müssen Sie uns kontaktieren.
                Ansonsten können Sie die Fotos im Admin Panel austauschen. Das finden Sie unter ihrer url/admin.html bspw. https://www.schirmerrinke.de/admin.html.
            </p>
            <ol className="flex flex-col gap-12 w-full">
                <li className="mb-4 text-lg">
                    <p className="text-2xl underline">Startseite:</p> 
                    Am besten wären Bilder mit einem Format von 16:9 mehr dazu sehen sie in der <a href="#infographik">Infographik</a>
                </li>
                <li className="mb-4 text-lg">
                    <p className="text-2xl underline">Dienstleistungen:</p> 
                    Am besten wären Bilder mit einem Format von 4:3. Aber alle Formate funktioniren gut, da sich der Dienstleistungensfelder dynamisch anpassen. Jedoch ist es zu empfehelen das alle Bilder ungefähr gleichgroß sind.

                </li>
                <li className="mb-4 text-lg">
                    <p className="text-2xl underline">Galerie:</p> 
                    Am besten wären Bilder mit einem Format von 4:4. Aber alle Formate funktioniren gut, da sich die Galerie dynamisch anpassen kann. Jedoch ist es zu empfehelen das alle Bilder ungefähr gleichgroß sind.
                </li> 
            </ol>
            <Image className="filter brightness-100" src={AspectRatio} alt={"info Bilder über Bilderformat"}/>
            {/* Image isn't perfect might need some changes */}
        </section> 
    );
}
    