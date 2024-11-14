const hrefs = ["https://snezhanareizen.xyz", "http://mikeiv.art"];

import BlinkingLink from "./BlinkingLink";

export default function Contacts() {
  return (
    <ul className="flex flex-col gap-2 text-base text-white">
      {hrefs.map((href, index) => (
        <li key={index}>
          {/* <a
            className="block bg-neutral-800 px-6 py-1"
            href={href}
            target="_blank"
          >
            {href}
          </a> */}
          <BlinkingLink href={href} />
        </li>
      ))}
    </ul>
  );
}
