import Image from "next/image";

export function Footer() {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
      <Image
        // className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={90}
        height={19}
      />
      <div className="text-xl font-normal">Footer</div>
    </footer>
  );
}
