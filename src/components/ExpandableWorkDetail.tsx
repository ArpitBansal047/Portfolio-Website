import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import type { CaseStudy } from "../data/portfolio";
import { useMaxWidth } from "./utils/useMaxWidth";
import "./styles/CaseStudyInline.css";

const BRIEF_STACK_COUNT_DEFAULT = 3;

export type ExpandableWorkDetailProps = {
  problem: string;
  problemBrief?: string;
  impact?: string;
  impactBrief?: string;
  stack: string[];
  bullets?: string[];
  caseStudy?: CaseStudy;
  compact?: boolean;
  briefStackCount?: number;
  initialBulletCount?: number;
  bulletsDetailOnly?: boolean;
  onOpenChange?: (open: boolean) => void;
  problemLabel?: string;
  impactLabel?: string;
  clampMobileLines?: number;
};

const ExpandableWorkDetail = ({
  problem,
  problemBrief,
  impact,
  impactBrief,
  stack,
  bullets,
  caseStudy,
  compact = false,
  briefStackCount = BRIEF_STACK_COUNT_DEFAULT,
  initialBulletCount = 0,
  bulletsDetailOnly = false,
  onOpenChange,
  problemLabel = "The problem",
  impactLabel = "The impact",
  clampMobileLines,
}: ExpandableWorkDetailProps) => {
  const [open, setOpen] = useState(false);
  const [textExpanded, setTextExpanded] = useState(false);
  const isMobileClamp = useMaxWidth(767);
  const shouldClampText =
    Boolean(clampMobileLines) &&
    isMobileClamp &&
    !textExpanded &&
    !open;
  const hasLongCopy =
    problem.length > 90 || (impact !== undefined && impact.length > 90);
  const showReadMore =
    Boolean(clampMobileLines) && isMobileClamp && hasLongCopy && !textExpanded;

  const hasBriefCopy = Boolean(problemBrief || impactBrief);
  const hasExtraStack = stack.length > briefStackCount;
  const hasHiddenBullets = Boolean(
    bullets &&
      bullets.length > 0 &&
      (bulletsDetailOnly || bullets.length > initialBulletCount),
  );
  const canExpand = Boolean(
    caseStudy || hasBriefCopy || hasExtraStack || hasHiddenBullets
  );

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      onOpenChange?.(next);
      return next;
    });
  };

  const showProblem = open || !problemBrief ? problem : problemBrief;
  const showImpact =
    impact === undefined ? undefined : open || !impactBrief ? impact : impactBrief;
  const visibleStack = open ? stack : stack.slice(0, briefStackCount);
  const hiddenStackCount = Math.max(0, stack.length - briefStackCount);
  const showBulletsInline = Boolean(bullets?.length) && !bulletsDetailOnly;
  const visibleBullets = showBulletsInline
    ? open
      ? bullets
      : bullets!.slice(0, initialBulletCount)
    : undefined;

  return (
    <section
      className={`expandable-work-detail${compact ? " expandable-work-detail--compact" : ""}${open ? " expandable-work-detail--open" : ""}${textExpanded ? " expandable-work-detail--text-open" : ""}${shouldClampText ? " expandable-work-detail--mobile-clamp" : ""}`}
    >
      <h4>{problemLabel}</h4>
      <p className="expandable-work-detail__clampable">{showProblem}</p>

      {showImpact !== undefined && (
        <>
          <h4>{impactLabel}</h4>
          <p className="expandable-work-detail__clampable">{showImpact}</p>
        </>
      )}

      {showReadMore && (
        <button
          type="button"
          className="expandable-work-detail__read-more"
          onClick={() => setTextExpanded(true)}
          data-cursor="disable"
          aria-expanded={false}
        >
          Read more
        </button>
      )}

      {textExpanded && isMobileClamp && hasLongCopy && !open && (
        <button
          type="button"
          className="expandable-work-detail__read-more"
          onClick={() => setTextExpanded(false)}
          data-cursor="disable"
          aria-expanded={true}
        >
          Show less
        </button>
      )}

      {visibleBullets && visibleBullets.length > 0 && (
        <ul className="wip-bullets expandable-work-detail__bullets">
          {visibleBullets.map((bullet) => (
            <li key={bullet.slice(0, 48)}>{bullet}</li>
          ))}
        </ul>
      )}

      <h4>Tech stack</h4>
      <section className="work-tags">
        {visibleStack.map((tag) => (
          <span key={tag} className="work-tag">
            {tag}
          </span>
        ))}
        {!open && hiddenStackCount > 0 && (
          <span className="work-tag work-tag--more">+{hiddenStackCount}</span>
        )}
      </section>

      {canExpand && (
        <section className={`case-study-inline${compact ? " case-study-inline--compact" : ""}`}>
          <button
            type="button"
            className="case-study-btn"
            onClick={toggle}
            data-cursor="disable"
            aria-expanded={open}
          >
            {open ? "Hide details" : "More detail"}
            {open ? <MdExpandLess aria-hidden="true" /> : <MdExpandMore aria-hidden="true" />}
          </button>

          {open && caseStudy && (
            <section className="case-study-inline__body">
              {bulletsDetailOnly && bullets && bullets.length > 0 && (
                <>
                  <h5>{impactLabel}</h5>
                  <ul>
                    {bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>{bullet}</li>
                    ))}
                  </ul>
                </>
              )}

              <h5>Approach</h5>
              <ul>
                {caseStudy.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>

              <h5>Why this stack</h5>
              <ul className="case-study-inline__stack">
                {caseStudy.stackRationale.map((row) => (
                  <li key={row.tech}>
                    <strong>{row.tech}</strong> — {row.why}
                    {row.alternative ? ` (vs ${row.alternative})` : ""}
                  </li>
                ))}
              </ul>

              <h5>Results</h5>
              <ul className="case-study-outcomes">
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </section>
          )}
        </section>
      )}
    </section>
  );
};

export default ExpandableWorkDetail;
