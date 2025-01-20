import Aside from "@/components/aside/Aside";
// import VerticalBw from "@/components/vertical_bw/VerticalBw";
// import VerticalWhite from "@/components/vertical_white/VerticalWhite";
import Main from "@/components/main/Main";
// import PhotoText from "@/components/photo_text/PhotoText";
import TitleMain from "@/components/title_main/TitleMain";
import Contacts from "@/components/contacts/Contacts";
import Particles from "@/components/particules/Particles";
// import BlackHole from "@/components/black_hole/BlackHole";

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <div className="fixed h-full w-full">
        <Aside />
      </div>

      {/* <div className="mx-auto max-w-screen-xl"> */}
      <div className="relative mx-auto w-[1200px]">
        {/* <div className="relative h-[500px]"> */}
        <div className="relative h-1/2">
          <Particles />

          <div className="absolute bottom-1/2 right-1/4 translate-x-1/2 translate-y-1/2">
            <TitleMain />
          </div>
        </div>

        <div className="text-xl text-white">
          <Main />
        </div>

        <div className="flex justify-center py-40 text-xl text-white">
          <Contacts />
        </div>

        {/* <BlackHole /> */}
      </div>
    </main>
  );
}
