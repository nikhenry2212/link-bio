import './styles.css'

export const IconSocial = ({ src, href }) => {
  return (
    <a target="_blank" href={href}>
      <img className="icon" src={src}></img>
    </a>
  );
};
