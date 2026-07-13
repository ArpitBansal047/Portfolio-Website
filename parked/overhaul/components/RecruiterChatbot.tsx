import { useMemo, useState } from "react";
import { MdClose, MdSend } from "react-icons/md";
import { FAQ_STARTER_IDS, recruiterFaq, type FaqCategory } from "../data/recruiterFaq";
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

  const starters = useMemo(
    () => recruiterFaq.filter((f) => FAQ_STARTER_IDS.includes(f.id)),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recruiterFaq.filter((item) => {
      const catOk = activeCategory === "All" || item.category === activeCategory;
      const textOk =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return catOk && textOk;
    });
  }, [query, activeCategory]);

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
          placeholder="Search questions…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="recruiter-chat-chips">
          <button
            type="button"
            className={activeCategory === "All" ? "is-active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={activeCategory === cat ? "is-active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {!activeAnswer && !query && (
          <section className="recruiter-chat-starters">
            <p className="recruiter-chat-starters__label">Popular questions</p>
            {starters.map((item) => (
              <button
                key={item.id}
                type="button"
                className="recruiter-chat-starter"
                onClick={() => setActiveAnswer({ q: item.question, a: item.answer })}
              >
                {item.question}
              </button>
            ))}
          </section>
        )}

        {activeAnswer ? (
          <section className="recruiter-chat-answer">
            <button type="button" className="recruiter-chat-back" onClick={() => setActiveAnswer(null)}>
              ← Back to questions
            </button>
            <h3>{activeAnswer.q}</h3>
            <p>{activeAnswer.a}</p>
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
      </aside>
    </div>
  );
};

export const RecruiterChatFab = ({ onOpen }: { onOpen: () => void }) => (
  <button type="button" className="recruiter-chat-fab" onClick={onOpen} aria-label="Ask about Arpit">
    Ask me <MdSend aria-hidden="true" />
  </button>
);

export default RecruiterChatbot;
