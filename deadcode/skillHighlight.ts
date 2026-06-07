export const HIGHLIGHT_SKILL_EVENT = "portfolio-highlight-skill";

export function highlightSkill(skillLabel: string) {
  window.dispatchEvent(
    new CustomEvent(HIGHLIGHT_SKILL_EVENT, { detail: skillLabel })
  );
}

export function normalizeSkill(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9+]/g, "");
}
