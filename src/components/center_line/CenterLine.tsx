// // useless until now

// export default function CenterLine() {
//   return <div className="h-full bg-center_line bg-contain"></div>;
// }

import styles from "./CenterLine.module.css";

export default function CenterLine() {
  return <div className={`h-full ${styles.bg_moving}`}></div>;
}
