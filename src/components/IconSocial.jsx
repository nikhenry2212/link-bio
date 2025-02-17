export const IconSocial = ({ src, href }) => {
  return (
    <a target="_blank" href={href}>
      <img style={{ width: 60, height: 60, borderRadius: 50 }} src={src}></img>
    </a>
  );
};
