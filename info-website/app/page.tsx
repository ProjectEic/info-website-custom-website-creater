import Inhalt from './content/inhalt';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-2xl">SchirmerRinke Software Info-Radgeber</h2>

      <div className="flex flex-col gap-4 ">
        <p>In diesem kurzen Infobeitrag erfährst du alles, was du über deine Website wissen musst.</p>
        <ol className="list-decimal text-2xl">
          <li><a href="#Inhalt">Inhalt</a></li>
          <li><a href="#Bilder">Bilder</a></li>
          <li><a href="#Rechtliches">Rechtliches</a></li>
          <li><a href="#Kontakt">Kontakt</a></li>
        </ol>
      </div>
      
      <Inhalt />
    </main>
  );
}
