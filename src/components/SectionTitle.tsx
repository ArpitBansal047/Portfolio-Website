import "./styles/SectionTitle.css";

type SectionTitleProps = {
  lead: string;
  accent: string;
  as?: "h2" | "h3";
  className?: string;
  id?: string;
};

const SectionTitle = ({
  lead,
  accent,
  as: Tag = "h2",
  className = "",
  id,
}: SectionTitleProps) => {
  return (
    <Tag id={id} className={`section-title ${className}`.trim()}>
      {lead}
      <span>{accent}</span>
    </Tag>
  );
};

export default SectionTitle;
