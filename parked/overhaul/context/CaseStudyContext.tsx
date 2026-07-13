import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { CaseStudy } from "../data/portfolio";

type CaseStudyTarget = {
  title: string;
  category?: string;
  caseStudy: CaseStudy;
};

type CaseStudyContextValue = {
  open: CaseStudyTarget | null;
  showCaseStudy: (target: CaseStudyTarget) => void;
  closeCaseStudy: () => void;
};

const CaseStudyContext = createContext<CaseStudyContextValue | null>(null);

export const CaseStudyProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<CaseStudyTarget | null>(null);

  const showCaseStudy = useCallback((target: CaseStudyTarget) => setOpen(target), []);
  const closeCaseStudy = useCallback(() => setOpen(null), []);

  const value = useMemo(
    () => ({ open, showCaseStudy, closeCaseStudy }),
    [open, showCaseStudy, closeCaseStudy]
  );

  return <CaseStudyContext.Provider value={value}>{children}</CaseStudyContext.Provider>;
};

export const useCaseStudy = () => {
  const ctx = useContext(CaseStudyContext);
  if (!ctx) throw new Error("useCaseStudy must be used within CaseStudyProvider");
  return ctx;
};
