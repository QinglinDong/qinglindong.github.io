import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p>
        Hi, I&apos;m Qinglin Dong. I work on AI agents and evaluation systems.
      </p>
      <p>
        This blog is where I share my thinking on building reliable AI agents,
        designing meaningful evaluations, and the challenges that come with
        making these systems work in practice.
      </p>
      <p>
        I&apos;m particularly interested in:
      </p>
      <ul>
        <li>Agent architectures and tool use</li>
        <li>Evaluation methodology for LLM-based systems</li>
        <li>Bridging the gap between benchmarks and real-world performance</li>
        <li>The craft of prompt engineering and system design</li>
      </ul>
      <hr />
      <p>
        Find me on{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter/X
        </a>
        .
      </p>
    </div>
  );
}
