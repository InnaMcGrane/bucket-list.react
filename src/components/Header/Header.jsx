import cn from "classnames";
import styles from "./header.module.scss"

function Header() {
  return (
    <header className={cn(styles["header"])}>
      <div className={cn(styles["header__btns"])}></div>
    </header>
  );
}
export default Header;
