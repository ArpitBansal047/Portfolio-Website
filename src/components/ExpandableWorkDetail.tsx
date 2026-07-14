import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import type { CaseStudy } from "../data/portfolio";
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
  onOpenChange?: (open: boolean) => void;
  problemLabel?: string;
  impactLabel?: string;
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
  onOpenChange,
  problemLabel = "The problem",
  impactLabel = "The impact",
}: ExpandableWorkDetailProps) => {
  const [open, setOpen] = useState(false);

  const hasBriefCopy = Boolean(problemBrief || impactBrief);
  const hasExtraStack = stack.length > briefStackCount;
  const hasHiddenBullets = Boolean(bullets && bullets.length > initialBulletCount);
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
  const visibleBullets =
    open || !bullets ? bullets : bullets.slice(0, initialBulletCount);

  return (
    <section
      className={`expandable-work-detail${compact ? " expandable-work-detail--compact" : ""}${open ? " expandable-work-detail--open" : ""}`}
    >
      <h4>{problemLabel}</h4>
      <p>{showProblem}</p>

      {showImpact !== undefined && (
        <>
          <h4>{impactLabel}</h4>
          <p>{showImpact}</p>
        </>
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
