import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <aside className={`${styles.scroll_on_hover} h-screen`}>
      <div className="h-full bg-aside bg-cover"></div>
      <div className="h-full bg-aside bg-cover"></div>
    </aside>
  );
}
