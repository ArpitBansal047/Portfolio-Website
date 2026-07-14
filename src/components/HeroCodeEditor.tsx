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
          <span className="tok-comment">{"/* ==================================\n   arpit-bansal-resume.js\n   spoiler: no mocks — this ships in prod\n   ================================== */"}</span>
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
          <span className="tok-kw">this</span>.<span className="tok-prop">role</span> ={" "}
          <span className="tok-str">&apos;Software Developer @ Amdocs&apos;</span>;
          {"\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">experience</span> ={" "}
          <span className="tok-str">&apos;3+ YOE · telecom billing &amp; dev tooling&apos;</span>;
          {"\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">education</span> ={" "}
          <span className="tok-str">&apos;B.E. Computer Engineering · Thapar · 7.96 CGPA&apos;</span>;
          {"\n\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">techStack</span> = {"{\n"}
          {"      "}
          <span className="tok-prop">ai</span>: [<span className="tok-str">&apos;GenAI Automation&apos;</span>,{" "}
          <span className="tok-str">&apos;Gemini 1.5 Pro&apos;</span>, <span className="tok-str">&apos;Cursor&apos;</span>],
          {"\n"}
          {"      "}
          <span className="tok-prop">backend</span>: [<span className="tok-str">&apos;Node.js&apos;</span>,{" "}
          <span className="tok-str">&apos;Python&apos;</span>, <span className="tok-str">&apos;Java&apos;</span>,{" "}
          <span className="tok-str">&apos;Oracle&apos;</span>],
          {"\n"}
          {"      "}
          <span className="tok-prop">frontend</span>: [<span className="tok-str">&apos;Next.js 14&apos;</span>,{" "}
          <span className="tok-str">&apos;React 18&apos;</span>, <span className="tok-str">&apos;TypeScript&apos;</span>],
          {"\n"}
          {"      "}
          <span className="tok-prop">devops</span>: [<span className="tok-str">&apos;Jenkins&apos;</span>,{" "}
          <span className="tok-str">&apos;Docker&apos;</span>, <span className="tok-str">&apos;AWS&apos;</span>]
          {"\n    };\n\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">impact</span> = {"{\n"}
          {"      "}
          <span className="tok-prop">comcastHub</span>: <span className="tok-str">&apos;15-20% dev productivity ↑&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-prop">cipherEOC</span>: <span className="tok-str">&apos;90min → 40min daily billing&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-prop">bptChargeCode</span>: <span className="tok-str">&apos;Excel → SQL, 90% less manual work&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-prop">apeye</span>: <span className="tok-str">&apos;5hr → 1hr test cycles · 10+ daily users&apos;</span>
          {"\n    };\n\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">sideQuests</span> = [
          {"\n"}
          {"      "}
          <span className="tok-str">&apos;YOU — Gemini wellness app (therapy gap, real-time sync)&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-str">&apos;Comcast Sports League 2026 organizer&apos;</span>,
          {"\n"}
          {"      "}
          <span className="tok-str">&apos;Ex U-19 Badminton Captain — still chases shuttles&apos;</span>
          {"\n    ];\n\n"}
          {"    "}
          <span className="tok-kw">this</span>.<span className="tok-prop">openToRoles</span> = <span className="tok-kw">true</span>;{" "}
          <span className="tok-comment">{"// India · remote-friendly"}</span>
          {"\n  }\n\n"}
          {"  "}
          <span className="tok-fn">shipFeature</span>(<span className="tok-var">idea</span>) {"{\n"}
          {"    "}
          <span className="tok-kw">return</span> <span className="tok-str">&apos;prod-ready before the coffee cools&apos;</span>;
          {"\n  }\n\n"}
          {"  "}
          <span className="tok-fn">isHireable</span>() {"{\n"}
          {"    "}
          <span className="tok-kw">return</span> <span className="tok-kw">this</span>.<span className="tok-prop">openToRoles</span> &amp;&amp;{" "}
          <span className="tok-kw">this</span>.<span className="tok-prop">impact</span>.<span className="tok-prop">apeye</span>.<span className="tok-fn">includes</span>(<span className="tok-str">&apos;10+&apos;</span>);
          {"\n  }\n}\n\n"}
          <span className="tok-comment">{"// npm run hire-arpit --save-team-hours"}</span>
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
