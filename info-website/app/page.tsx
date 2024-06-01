import Bilder from './content/bilder';
import Inhalt from './content/inhalt';
import Rechtliches from './content/rechtliches';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-24">
      <h2 className="mainHeadline text-5xl tracking-[10px] font-semibold font-mono text-[#ff77b8]">SchirmerRinke Software Info-Radgeber</h2>

      <div className="flex flex-col gap-4 bg-[#434656] p-10 rounded">
        <p className="text-2xl leading-6">In diesem kurzen Infobeitrag erfährst du alles, was du über deine Website wissen musst.</p>
        <ol className="list-decimal text-2xl pl-7">
          <li><a href="#Inhalt">Inhalt</a></li>
          <li><a href="#Bilder">Bilder</a></li>
          <li><a href="#Rechtliches">Rechtliches</a></li>
          <li><a href="#Kontakt">Kontakt</a></li>
        </ol>
      </div>
      
      <Inhalt />
      <Bilder />
      <Rechtliches />
    </main>
  );
}
