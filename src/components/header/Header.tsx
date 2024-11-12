import Image from "next/image";

export function Header() {
  return (
    <header className="row-start-1 flex items-center justify-center gap-4">
      <Image
        // className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={90}
        height={19}
      />
      <div className="text-xl font-normal">Header</div>
    </header>
  );
}
