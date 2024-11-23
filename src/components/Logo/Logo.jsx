import cn from "classnames";
import styles from './logo.module.scss';

function Logo({ text, link }) {
  return (
    <a className={cn(styles["logo"])} href={link}>
      {text}
    </a>
  );
}
export default Logo;
