import Image from 'next/image';
import info_footer_section from "../images/info_footer_section.png";
import social_media_footer_section from "../images/social_media_footer_section.png";

export default function Kontakt() {
    return (
        <section id="Kontakt" className="w-[80vw] flex items-center flex-col h-[fit-content] gap-24 px-24 py-12 bg-[#002482] text-[#d4edeb]"> 
            <div>
                <h3 className="font-mono text-5xl text-center tracking-[15px] text-white">Kontakt</h3>
                <ol className="pl-4 flex flex-col gap-12 w-full">
                    <li className="mb-4 text-lg">
                    <p className="text-2xl underline">Infos im Footer:</p>
                    <ol className="">
                        <li className="mb-2">
                            <Image className="w-[100%] my-2 rounded" src={info_footer_section} alt="Infos tab im Footer ihrer Website" />
                            Hier besteht die Möglichtkeit Kontaktdaten einzutragen. Wenn man das keywort Telefon oder Email benutzt wird automisch eine Verlinkung erstellt. <br/>
                            Sie können hier auch andere Informationen eintragen, wie z.B. Öffnungszeiten oder Adresse. Sie haben auch die Möglichkeit ganz wichtige Infos gleich am Anfang anzuzeigen unter ihrem Firmen Namen. <br/>
            	        </li>
                    </ol>
                    </li>
                    <li className="mb-4 text-lg">
                    <p className="text-2xl underline">Social Media:</p>
                    <ol className="">
                        <li className="mb-2">
                            <Image className="w-[100%] my-2 rounded" src={social_media_footer_section} alt="Social Media Bereich im Footer ihrer Website" /><br/>
                            Hier können Sie ihre Social Media Profile verlinken.
                            Falls das Social Media ihrer Wahl noch nicht vorhanden ist, können Sie uns kontaktieren und wir fügen es hinzu. <br/>
                        </li>
                    </ol>
                    </li>
                </ol>
            </div>
        </section> 
        );
    }
    