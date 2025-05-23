const hrefs = [
  "https://www.alienationindex.xyz/rzeng",
  "http://mikeiv.art",
  "mailto:zero.night@zohomail.com",
];

import BlinkingContainer from "@/components/BlinkingContainer/BlinkingContainer";

export default function Contacts() {
  return (
    <ul className="flex flex-col gap-4">
      {hrefs.map((href, index) => (
        <li key={index}>
          <BlinkingContainer>
            <a className="block p-1" href={href} target="_blank">
              {href}
            </a>
          </BlinkingContainer>
        </li>
      ))}
    </ul>
  );
}
