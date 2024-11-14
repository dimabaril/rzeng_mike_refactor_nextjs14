import Aside from "@/components/aside/Aside";
import VerticalBw from "@/components/vertical_bw/VerticalBw";
import VerticalWhite from "@/components/vertical_white/VerticalWhite";
import Main from "@/components/main/Main";
import PhotoText from "@/components/photo_text/PhotoText";
import TitleMain from "@/components/title_main/TitleMain";
import Contacts from "@/components/contacts/Contacts";

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <div className="fixed right-1/4 top-20 z-30 translate-x-1/4">
        <TitleMain />
      </div>
      <div className="absolute left-24 top-16 z-10">
        <Contacts />
      </div>
      <div className="fixed right-1/4 z-10 w-1/4 -translate-x-1/4">
        <PhotoText />
      </div>
      <div className="w-8/12">
        <Main />
      </div>
      <div className="fixed right-0 z-10 flex w-4/12 flex-row">
        <div className="flex w-1/2 flex-row">
          <div className="w-1/2 opacity-50">
            <VerticalWhite />
          </div>
          <div className="w-1/2">
            <VerticalBw />
          </div>
        </div>
        <div className="w-1/2">
          <Aside />
        </div>
      </div>
    </main>
  );
}
