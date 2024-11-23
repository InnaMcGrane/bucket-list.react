import cn from "classnames";
function Logo({ text, link }) {
  return (
    <a className="logo" href={link}>
      {text}
    </a>
  );
}
export default Logo;
