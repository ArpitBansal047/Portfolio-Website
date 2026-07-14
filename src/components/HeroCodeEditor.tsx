import "./styles/HeroCodeEditor.css";

const HeroCodeEditor = () => {
  return (
    <div className="hero-code-editor" aria-label="Developer profile code preview">
      <div className="hero-code-editor__chrome">
        <div className="hero-code-editor__controls" aria-hidden="true">
          <span className="hero-code-editor__dot hero-code-editor__dot--red" />
          <span className="hero-code-editor__dot hero-code-editor__dot--amber" />
          <span className="hero-code-editor__dot hero-code-editor__dot--green" />
        </div>
        <span className="hero-code-editor__tab">arpit-bansal-resume.js</span>
      </div>
      <pre className="hero-code-editor__body">
        <code>
          <span className="tok-comment">{"/* ==================================\n   arpit-bansal-resume.js\n   ================================== */"}</span>
          {"\n"}
          <span className="tok-kw">class</span> <span className="tok-class">DeveloperProfile</span> {"{\n"}
          {"  "}
          <span className="tok-fn">constructor</span>
          {"() {\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">name</span> ={" "}
          <span className="tok-str">&apos;Arpit Bansal&apos;</span>;
          {"\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">location</span> ={" "}
          <span className="tok-str">&apos;Pune, Maharashtra&apos;</span>;
          {"\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">experience</span> ={" "}
          <span className="tok-str">&apos;3+ YOE @ Amdocs&apos;</span>;
          {"\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">techStack</span> = {"{\n"}
          {"      "}
          <span className="tok-prop">ai</span>: [<span className="tok-str">&apos;GenAI Automation&apos;</span>,{" "}
          <span className="tok-str">&apos;Gemini 1.5 Pro&apos;</span>],
          {"\n"}
          {"      "}
          <span className="tok-prop">backend</span>: [<span className="tok-str">&apos;Node.js&apos;</span>,{" "}
          <span className="tok-str">&apos;Python&apos;</span>, <span className="tok-str">&apos;Java&apos;</span>,{" "}
          <span className="tok-str">&apos;REST APIs&apos;</span>],
          {"\n"}
          {"      "}
          <span className="tok-prop">frontend</span>: [<span className="tok-str">&apos;Next.js 14&apos;</span>,{" "}
          <span className="tok-str">&apos;React 18&apos;</span>, <span className="tok-str">&apos;TypeScript&apos;</span>],
          {"\n"}
          {"      "}
          <span className="tok-prop">cloud</span>: [<span className="tok-str">&apos;AWS&apos;</span>,{" "}
          <span className="tok-str">&apos;Jenkins&apos;</span>, <span className="tok-str">&apos;Docker&apos;</span>]
          {"\n    };\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">achievements</span> = [
          {"\n"}
          {"      "}
          <span className="tok-str">&apos;Led ComcastHub dev tooling (15-20% productivity)&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-str">&apos;Automated Cipher EOC workflow (cut 90 min to 40)&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-str">&apos;APEye (reduced test cycles 5h→1h)&apos;</span>
          {"\n    ];\n  }\n}\n\n"}
          <span className="tok-comment">{"// Export profile — open to full-time roles"}</span>
          {"\n"}
          <span className="tok-kw">const</span> <span className="tok-var">profile</span> ={" "}
          <span className="tok-kw">new</span> <span className="tok-class">DeveloperProfile</span>();
          {"\n"}
          <span className="tok-kw">export default</span> <span className="tok-var">profile</span>;
        </code>
      </pre>
    </div>
  );
};

export default HeroCodeEditor;
