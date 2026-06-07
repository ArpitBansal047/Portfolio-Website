import "./styles/style.css";

const HoverLinks = ({
  text,
  cursor,
  strike,
}: {
  text: string;
  cursor?: boolean;
  strike?: boolean;
}) => {
  const label = strike ? (
    <span className="hover-link-strike">{text}</span>
  ) : (
    text
  );

  return (
    <div className="hover-link" data-cursor={!cursor && `disable`}>
      <div className="hover-in">
        {label} <div>{label}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
