const hrefs = ["https://snezhanareizen.xyz", "http://mikeiv.art"];

import BlinkingLink from "./BlinkingLink";

export default function Contacts() {
  return (
    <ul className="flex flex-col gap-6">
      {hrefs.map((href, index) => (
        <li key={index}>
          <BlinkingLink href={href} />
        </li>
      ))}
    </ul>
  );
}
