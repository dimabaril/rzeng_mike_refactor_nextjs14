import Aside from "@/components/aside/Aside";
import Main from "@/components/main/Main";
import TitleMain from "@/components/title_main/TitleMain";
import Contacts from "@/components/contacts/Contacts";
import Particles from "@/components/particules/Particles";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="fixed w-full">
        <Aside />
      </div>

      <div className="relative h-screen">
        <Particles />

        <div className="absolute bottom-1/2 right-1/4 translate-x-1/2 translate-y-1/2">
          <TitleMain />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-xl text-white">
          <Main />
        </div>

        <div className="flex justify-center py-32 text-xl text-white">
          <Contacts />
        </div>
      </div>
    </main>
  );
}
