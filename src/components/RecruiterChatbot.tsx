import { useEffect, useMemo, useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { matchFaqQuery, recruiterFaq, type FaqCategory } from "../data/recruiterFaq";
import { smoother } from "./utils/scrollSmoother";
import "./styles/RecruiterChatbot.css";

const CATEGORIES: FaqCategory[] = ["Experience", "Projects", "Skills", "Education", "Availability"];

type RecruiterChatbotProps = {
  open: boolean;
  onClose: () => void;
};

const RecruiterChatbot = ({ open, onClose }: RecruiterChatbotProps) => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">("All");
  const [activeAnswer, setActiveAnswer] = useState<{ q: string; a: string } | null>(null);

  const filtered = useMemo(() => {
    return recruiterFaq.filter((item) => {
      const catOk = activeCategory === "All" || item.category === activeCategory;
      return catOk && matchFaqQuery(item, query);
    });
  }, [query, activeCategory]);

  useEffect(() => {
    if (!open) return;

    smoother?.paused(true);
    document.body.classList.add("scroll-locked");

    return () => {
      smoother?.paused(false);
      document.body.classList.remove("scroll-locked");
    };
  }, [open]);

  const stopScrollPropagation = (event: React.WheelEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const selectCategory = (category: FaqCategory | "All") => {
    setActiveCategory(category);
    setActiveAnswer(null);
  };

  if (!open) return null;

  return (
    <div className="recruiter-chat-overlay" role="presentation" onClick={onClose}>
      <aside
        className="recruiter-chat-panel"
        role="dialog"
        aria-label="Ask about Arpit"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="recruiter-chat-panel__head">
          <div>
            <h2>Ask about Arpit</h2>
            <p>Quick answers for recruiters — no AI, instant replies.</p>
          </div>
          <button type="button" className="recruiter-chat-panel__close" onClick={onClose} aria-label="Close chat">
            <MdClose />
          </button>
        </header>

        <input
          type="search"
          className="recruiter-chat-search"
          placeholder="Ask in plain language — e.g. “Are you open to remote?”"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="recruiter-chat-chips">
          <button
            type="button"
            className={activeCategory === "All" ? "is-active" : ""}
            onClick={() => selectCategory("All")}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={activeCategory === cat ? "is-active" : ""}
              onClick={() => selectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <section
          className="recruiter-chat-body"
          onWheel={stopScrollPropagation}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {activeAnswer ? (
            <section className="recruiter-chat-answer">
              <button type="button" className="recruiter-chat-back" onClick={() => setActiveAnswer(null)}>
                ← Back to questions
              </button>
              <h3>{activeAnswer.q}</h3>
              <div className="recruiter-chat-answer__body">
                {activeAnswer.a.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ) : (
            <ul className="recruiter-chat-list">
              {filtered.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveAnswer({ q: item.question, a: item.answer })}
                  >
                    {item.question}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </aside>
    </div>
  );
};

export const RecruiterChatFab = ({ onOpen }: { onOpen: () => void }) => (
  <button type="button" className="recruiter-chat-fab" onClick={onOpen} aria-label="Ask about Arpit">
    <LuMessageCircle aria-hidden="true" />
    <span>Ask about Arpit</span>
  </button>
);

export default RecruiterChatbot;
