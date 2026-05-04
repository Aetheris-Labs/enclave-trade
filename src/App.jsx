// Aegis — landing page. Export-ready, single-file React component.
import React from "react";
import {
  Shield,
  Github,
  ArrowUpRight,
  Eye,
  Brain,
  Fingerprint,
  PenLine,
  Zap,
  BookOpen,
  Copy,
  Check,
  AlertTriangle,
} from "lucide-react";

export default function AegisLanding() {
  const navItems = [
    { label: "BOARD", href: "#board" },
    { label: "TRUST", href: "#trust" },
    { label: "LOOP", href: "#loop" },
    { label: "DECISION", href: "#decision" },
    { label: "LAUNCH", href: "#launch" },
  ];

  const trustItems = [
    {
      n: "01",
      title: "The signing key is created inside the enclave.",
      body:
        "It is generated where the operator, the host, and the cloud cannot read it. Nothing outside that boundary ever sees it.",
    },
    {
      n: "02",
      title: "Every trade is checked before it is signed.",
      body:
        "Each cycle is verified against the expected runtime state. If anything has drifted, the signer stays locked and the trade does not happen.",
    },
    {
      n: "03",
      title: "Policy can stop a trade before execution.",
      body:
        "Position size, drawdown, slippage, and cooldowns are evaluated up front. A blocked trade is treated as a normal, expected outcome.",
    },
    {
      n: "04",
      title: "Live capital is the operating mode.",
      body:
        "Aegis runs against Solana mainnet on real funds. There is no demo state to graduate out of.",
    },
    {
      n: "05",
      title: "Every decision is recorded.",
      body:
        "Trades that are signed and trades that are blocked are both written to a permanent record. Nothing about the run is left undocumented.",
    },
  ];

  const loopStages = [
    {
      n: "01",
      icon: Eye,
      title: "Observe",
      body:
        "Read live market state across leading Solana venues to assemble the context the agent will reason over this cycle.",
    },
    {
      n: "02",
      icon: Brain,
      title: "Reason",
      body:
        "Score the opportunity against confidence floors and prior outcomes. Produce a candidate decision, not yet an order.",
    },
    {
      n: "03",
      icon: Fingerprint,
      title: "Attest",
      body:
        "Verify the runtime is exactly what it should be. If the measurement does not match, the signer never unlocks.",
    },
    {
      n: "04",
      icon: PenLine,
      title: "Sign",
      body:
        "Signing happens inside the enclave. The signing key is never exposed to the operator, the host, or the cloud.",
    },
    {
      n: "05",
      icon: Zap,
      title: "Execute",
      body:
        "Submit through verified channels. Aegis acts the moment its checks clear; no second confirmation required.",
    },
    {
      n: "06",
      icon: BookOpen,
      title: "Learn",
      body:
        "Promoted, blocked, and rejected decisions all write structured outcomes. Each cycle informs the next.",
    },
  ];

  const goConditions = [
    "Signal confidence is above the required threshold",
    "Drawdown is within the limits set for the strategy",
    "Position size is inside the approved range",
    "The strategy is not in cooldown after a recent loss",
    "The runtime matches the expected, verified state",
    "Policy gates are clear for this venue and pair",
  ];
  const stopConditions = [
    "Confidence is below the required threshold",
    "Drawdown limits have been reached",
    "Position size is above the approved range",
    "A circuit breaker is active on the venue or pair",
    "The decision looks like a duplicate or replay",
    "The runtime measurement did not verify",
  ];

  const principles = [
    {
      title: "Runtime first, signer last.",
      body:
        "The signing key is the final gate, never the first. Every upstream condition must clear before a signature is possible.",
    },
    {
      title: "A blocked trade is a product outcome.",
      body:
        "Rejected routes, expired quotes, and policy violations are not failures. They are honest signals that improve the next cycle.",
    },
    {
      title: "Autonomy within explicit bounds.",
      body:
        "The agent operates freely inside operator-defined limits — position size, slippage, scope. The envelope is fixed; the agent fills it.",
    },
    {
      title: "Trust is earned from constraints.",
      body:
        "Operator confidence comes from verifiable behavior and an honest record — not from how confident the model sounds.",
    },
  ];

  const signals = [
    {
      strategy: "Meteora DLMM",
      market: "SOL/USDC fee 0.01%",
      action: "Add Liquidity (Bid 138.15 / Ask 138.40)",
      edge: "0.69%",
      conf: 0.83,
      size: "2,180",
      status: "APPROVED",
      tone: "emerald",
    },
    {
      strategy: "Drift",
      market: "SOL-PERP isolated",
      action: "Long (Entry 138.18 / TP 140.20 / SL 133.50)",
      edge: "0.58%",
      conf: 0.68,
      size: "3,360",
      status: "APPROVED",
      tone: "emerald",
    },
    {
      strategy: "Jupiter",
      market: "JUP/USDC spot",
      action: "Buy market",
      edge: "0.40%",
      conf: 0.63,
      size: "790",
      status: "PENDING",
      tone: "amber",
    },
  ];

  const executions = [
    { t: "14:45:02", s: "Meteora DLMM", a: "ADD_LIQ", p: "DLMM", sz: "2,180", tx: "5xYp...a3QvR", tone: "emerald" },
    { t: "14:44:18", s: "Drift", a: "LONG", p: "PERP", sz: "3,360", tx: "8k7m...dGjtT", tone: "emerald" },
    { t: "14:43:30", s: "Jupiter", a: "BUY", p: "SPOT", sz: "815", tx: "Kq2n...8pYxM", tone: "emerald" },
    { t: "14:42:11", s: "Drift", a: "TP_MARKET", p: "PERP", sz: "3,120", tx: "9zL6...f7Hn2", tone: "emerald" },
    { t: "14:41:47", s: "Meteora DLMM", a: "REMOVE_LIQ", p: "DLMM", sz: "1,960", tx: "3nJ8...GkL1p", tone: "amber" },
    { t: "14:40:52", s: "Drift", a: "LONG", p: "PERP", sz: "3,450", tx: "7mQe...kLp9a", tone: "rose" },
    { t: "14:39:14", s: "Jupiter", a: "BUY", p: "SPOT", sz: "640", tx: "2Rf4...nP8wC", tone: "emerald" },
  ];

  const auditRows = [
    { t: "14:45:18", e: "EXECUTION", s: "Meteora DLMM", d: "ADD_LIQ · range 137.5–139.0", tx: "5xYp...a3QvR", pol: "PASS", res: "FINALIZED", tone: "emerald" },
    { t: "14:45:16", e: "ATTESTATION", s: "—", d: "Quote verified · measurement a3f7e..7b2d", tx: "att-2026-04-30-1445", pol: "PASS", res: "ATTESTED", tone: "cyan" },
    { t: "14:44:22", e: "EXECUTION", s: "Drift", d: "LONG · isolated · lev 2.0x", tx: "8k7m...dGjtT", pol: "PASS", res: "FINALIZED", tone: "emerald" },
    { t: "14:43:34", e: "EXECUTION", s: "Jupiter", d: "BUY · route Whirlpool→Meteora", tx: "Kq2n...8pYxM", pol: "PASS", res: "FINALIZED", tone: "emerald" },
    { t: "14:42:15", e: "EXECUTION", s: "Drift", d: "TP_MARKET · realize +1.46%", tx: "9zL6...f7Hn2", pol: "PASS", res: "FINALIZED", tone: "emerald" },
    { t: "14:41:50", e: "POLICY", s: "Meteora DLMM", d: "Cooldown after rebalance", tx: "pol-2026-04-30-1441", pol: "HOLD", res: "DEFERRED", tone: "amber" },
    { t: "14:40:55", e: "EXECUTION", s: "Drift", d: "LONG · stop hit -1.12%", tx: "7mQe...kLp9a", pol: "PASS", res: "STOPPED_OUT", tone: "rose" },
    { t: "14:40:01", e: "RISK_ENGINE", s: "—", d: "Drawdown 1.38% / 5.00% · within bounds", tx: "risk-2026-04-30-1440", pol: "PASS", res: "APPROVED", tone: "emerald" },
  ];

  const reasoningLeft = [
    "Volatility regime: moderate. Funding neutral.",
    "DLMM: concentrated range capture with favorable depth.",
    "Perps: directional long with defined take profit and stop.",
    "Spot: opportunistic accumulation on Jupiter route.",
    "All signals meet confidence threshold and risk policy.",
  ];
  const reasoningRight = [
    { k: "Market Regime", v: "Favorable" },
    { k: "Edge Quality", v: "High" },
    { k: "Liquidity", v: "Adequate" },
    { k: "Risk Limits", v: "Satisfied" },
    { k: "Policy Gate", v: "Approved" },
  ];

  const toneText = (tone) =>
    tone === "emerald"
      ? "text-emerald-400"
      : tone === "amber"
      ? "text-amber-400"
      : tone === "rose"
      ? "text-rose-400"
      : tone === "cyan"
      ? "text-cyan-300"
      : "text-white/60";

  const tonePill = (tone) =>
    tone === "emerald"
      ? "text-emerald-300 bg-emerald-400/10 ring-emerald-400/20"
      : tone === "amber"
      ? "text-amber-300 bg-amber-400/10 ring-amber-400/20"
      : tone === "rose"
      ? "text-rose-300 bg-rose-400/10 ring-rose-400/20"
      : "text-cyan-300 bg-cyan-400/10 ring-cyan-400/20";

  // ——— Small reusable elements (kept inside file per export contract)
  const ShieldMark = ({ className = "h-5 w-5" }) => (
    <Shield className={className} strokeWidth={1.6} />
  );

  const Eyebrow = ({ children }) => (
    <div className="text-[11px] font-medium tracking-[0.22em] text-white/50 uppercase">
      {children}
    </div>
  );

  return (
    <div
      className="min-h-screen bg-[#05070A] text-white/90 font-sans antialiased selection:bg-blue-500/30"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* ——— STICKY NAV ——— */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#05070A]/75 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <span className="text-[13px] font-semibold tracking-[0.28em]">AEGIS</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-[11px] font-medium tracking-[0.22em] text-white/60 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://github.com/Aetheris-Labs/Aegis"
              className="hidden md:grid place-items-center h-8 w-8 rounded-md text-white/60 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#launch"
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-blue-500 hover:bg-blue-400 text-white text-[12px] font-medium tracking-wide transition-colors"
            >
              Launch Aegis
            </a>
          </div>
        </div>
      </header>

      {/* ——— HERO ——— */}
      <section id="top" className="relative overflow-hidden">
        {/* single faint top glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 h-[520px]"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.05) 40%, rgba(5,7,10,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-white/[0.03] ring-1 ring-white/10 text-[11px] tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]" />
              CA:PENDING
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.05]">
              Private keys that never leave the enclave.
            </h1>

            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/60 text-balance">
              Autonomous Solana trading agent. Every trade attested. Every decision logged.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#board"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-colors"
              >
                View the live run
              </a>
              <a
                href="https://github.com/Aetheris-Labs/Aegis/blob/main/ARCHITECTURE.md"
                className="inline-flex items-center gap-1.5 h-11 px-5 rounded-md ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
              >
                Read the architecture <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Dashboard mock */}
          <div id="board" className="mt-12 md:mt-16">
            <DashboardMock
              signals={signals}
              executions={executions}
              auditRows={auditRows}
              reasoningLeft={reasoningLeft}
              reasoningRight={reasoningRight}
              toneText={toneText}
              tonePill={tonePill}
            />
            <p className="mt-4 text-center text-xs md:text-[13px] text-white/45">
              Live mainnet. Every row above is attested, signed inside the enclave, and written to the audit log.
            </p>
          </div>
        </div>
      </section>

      {/* ——— STATS STRIP ——— */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10">
            {[
              { k: "0", v: "Keys ever exposed" },
              { k: "100%", v: "Decisions written to audit" },
              { k: "TDX · SEV-SNP", v: "Attested environments" },
            ].map((s, i) => (
              <div
                key={s.v}
                className={`px-6 md:px-10 py-10 md:py-12 ${
                  i !== 0 ? "md:border-l border-white/10" : ""
                } ${i !== 0 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="text-3xl md:text-5xl font-medium tracking-[-0.02em] text-white">
                  {s.k}
                </div>
                <div className="mt-2 text-[13px] tracking-wide text-white/50">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— TRUST ——— */}
      <section id="trust" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Trust</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
                Trust is structural,
                <br />
                not editorial.
              </h2>
              <p className="mt-6 max-w-md text-white/60 text-[15px] leading-relaxed">
                Each guarantee below is enforced by the runtime itself — not by a promise, a host, or a model.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="divide-y divide-white/10 border-y border-white/10">
                {trustItems.map((it) => (
                  <li key={it.n} className="py-6 md:py-7 grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                    <div className="text-[12px] font-mono text-blue-400/90 tracking-widest pt-1">
                      {it.n}
                    </div>
                    <div>
                      <div className="text-[15px] md:text-base font-medium text-white">
                        {it.title}
                      </div>
                      <p className="mt-2 text-[14px] md:text-[15px] text-white/55 leading-relaxed">
                        {it.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ——— LOOP ——— */}
      <section id="loop" className="relative py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Loop</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
              An operator workflow,
              <br />
              not a black box.
            </h2>
            <p className="mt-6 max-w-2xl text-white/60 text-[15px] leading-relaxed">
              Every decision walks the same six stages. Each one must clear before the next begins. Nothing is signed on faith.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {loopStages.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className="bg-[#07090E] p-6 md:p-7 group hover:bg-[#0A0D12] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-blue-400/90">
                      {s.n}
                    </span>
                    <Icon className="h-4 w-4 text-white/40 group-hover:text-cyan-300 transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="mt-6 text-lg font-medium tracking-tight">{s.title}</div>
                  <p className="mt-2 text-[14px] text-white/55 leading-relaxed">{s.body}</p>
                  {/* faint connector line */}
                  {i < loopStages.length - 1 && (
                    <div className="mt-6 h-px w-10 bg-gradient-to-r from-blue-400/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— DECISION ——— */}
      <section id="decision" className="relative py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Decision</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
              What lets a trade through —<br />
              and what stops it.
            </h2>
            <p className="mt-6 max-w-2xl text-white/60 text-[15px] leading-relaxed">
              Every cycle is judged against the same conditions. A trade only goes through when all of them are met. Any single failure is enough to stop it.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* GO column */}
            <div className="bg-[#07090E] p-6 md:p-10">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />
                <span className="text-[12px] font-mono tracking-[0.2em] text-emerald-300">
                  CONDITIONS TO EXECUTE
                </span>
              </div>
              <ul className="mt-7 space-y-4">
                {goConditions.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] text-white/80">
                    <Check className="h-4 w-4 mt-1 text-emerald-400 shrink-0" strokeWidth={2.5} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* STOP column */}
            <div className="bg-[#07090E] p-6 md:p-10">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]" />
                <span className="text-[12px] font-mono tracking-[0.2em] text-amber-300">
                  REASONS EXECUTION IS BLOCKED
                </span>
              </div>
              <ul className="mt-7 space-y-4">
                {stopConditions.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] text-white/80">
                    <span className="h-4 w-4 mt-1 grid place-items-center shrink-0">
                      <span className="h-1 w-3 rounded-full bg-amber-400/80" />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PRINCIPLES ——— */}
      <section className="relative py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Principles</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
                The rules Aegis
                <br />
                operates by.
              </h2>
              <p className="mt-6 max-w-md text-white/60 text-[15px] leading-relaxed">
                Four operating principles that define what the system is allowed to do — and what it will refuse to do.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {principles.map((p, i) => (
                  <div key={p.title} className="py-7 md:py-8 grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                    <div className="text-[12px] font-mono text-blue-400/90 tracking-widest pt-1">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="text-[15px] md:text-base font-medium text-white">
                        {p.title}
                      </div>
                      <p className="mt-2 text-[14px] md:text-[15px] text-white/55 leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— LAUNCH ——— */}
      <section id="launch" className="relative py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Eyebrow>Launch</Eyebrow>
          <h2 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
            A token for an agent that has to earn every signature.
          </h2>
          <p className="mt-7 mx-auto max-w-2xl text-white/65 text-[15px] md:text-base leading-relaxed">
            Aegis launches on Pump.fun as a fair launch. The contract address is pinned at the top of this page and fills the moment it drops.
          </p>
          <div className="mt-9">
            <a
              href="https://x.com"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md ring-1 ring-white/15 hover:ring-white/30 hover:bg-white/5 text-[14px] text-white/85 transition-colors"
            >
              Follow for the drop: X <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ——— FINAL CTA BAND ——— */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D12] p-10 md:p-16 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 80% at 50% 0%, rgba(59,130,246,0.16) 0%, rgba(5,7,10,0) 70%)",
              }}
            />
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
                Execution you can verify.
              </h3>
              <p className="mt-5 text-white/60 text-[15px] md:text-base">
                An autonomous Solana agent that has to earn every signature.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#launch"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-colors"
                >
                  Launch Aegis
                </a>
                <a
                  href="https://github.com/Aetheris-Labs/Aegis"
                  className="inline-flex items-center gap-1.5 h-11 px-5 rounded-md ring-1 ring-white/15 text-white/85 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  View on GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16">
          <div>
            <div>
              <div className="flex items-center">
                <span className="text-[13px] font-semibold tracking-[0.28em]">AEGIS</span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-10 md:gap-16">
                <div>
                  <div className="text-[11px] tracking-[0.22em] text-white/40">SITE</div>
                  <ul className="mt-4 space-y-2.5 text-[14px] text-white/70">
                    <li><a href="#board" className="hover:text-white">Board</a></li>
                    <li><a href="#trust" className="hover:text-white">Trust</a></li>
                    <li><a href="#loop" className="hover:text-white">Loop</a></li>
                    <li><a href="#decision" className="hover:text-white">Decision</a></li>
                    <li><a href="#launch" className="hover:text-white">Launch</a></li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.22em] text-white/40">PROJECT</div>
                  <ul className="mt-4 space-y-2.5 text-[14px] text-white/70">
                    <li><a href="https://github.com/Aetheris-Labs/Aegis/blob/main/ARCHITECTURE.md" className="hover:text-white">Docs</a></li>
                    <li><a href="#board" className="hover:text-white">Status</a></li>
                    <li>
                      <a href="https://github.com/Aetheris-Labs/Aegis" className="inline-flex items-center gap-1 hover:text-white">
                        GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com" className="inline-flex items-center gap-1 hover:text-white">
                        X <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="text-[11px] tracking-wider text-white/40">
              Aegis  |  Aetheris Labs  |  © 2026
            </div>
            <div className="text-[11px] tracking-wider text-white/40 font-mono">
              v1.3.0 · mainnet
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ————————————————————————————————————————————————————
   Dashboard mock
   ———————————————————————————————————————————————————— */
function DashboardMock({
  signals,
  executions,
  auditRows,
  reasoningLeft,
  reasoningRight,
  toneText,
  tonePill,
}) {
  const SectionLabel = ({ children }) => (
    <div className="flex items-center gap-2 text-[10.5px] font-mono tracking-[0.22em] text-white/55">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </div>
  );

  const Mini = ({ label, value, valueClass = "text-white" }) => (
    <div className="px-3 py-2 min-w-[112px]">
      <div className="text-[9.5px] font-mono tracking-[0.18em] text-white/40 uppercase">
        {label}
      </div>
      <div className={`mt-1 text-[12px] font-mono ${valueClass}`}>{value}</div>
    </div>
  );

  const RiskTile = ({ label, value, sub, tone = "white" }) => {
    const c =
      tone === "emerald"
        ? "text-emerald-300"
        : tone === "amber"
        ? "text-amber-300"
        : tone === "cyan"
        ? "text-cyan-300"
        : "text-white";
    return (
      <div className="px-4 py-3 bg-[#070A0E] border border-white/5">
        <div className="text-[9.5px] font-mono tracking-[0.18em] text-white/40 uppercase">
          {label}
        </div>
        <div className={`mt-1.5 text-[15px] font-mono ${c}`}>{value}</div>
        <div className="text-[10.5px] font-mono text-white/35 mt-0.5">{sub}</div>
      </div>
    );
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#070A0E] overflow-hidden shadow-[0_30px_80px_-30px_rgba(59,130,246,0.25)]">
      {/* TOP HEADER BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-5 py-4 border-b border-white/10 bg-[#0A0D12]">
        <div className="flex items-start">
          <div>
            <div className="flex items-baseline gap-2">
              <div className="text-[13px] font-semibold tracking-[0.28em]">AEGIS</div>
              <div className="text-[11px] font-mono tracking-[0.18em] text-cyan-300">
                Live Execution
              </div>
            </div>
            <div className="mt-0.5 text-[11px] font-mono text-white/45 tracking-wide">
              Autonomous Solana Trading Agent · In-Enclave Key Custody · Attested Execution
            </div>
          </div>
        </div>

        <div className="flex flex-wrap divide-x divide-white/10 border border-white/10 rounded-md bg-[#070A0E]">
          <Mini
            label="System Health"
            value={<span className="text-emerald-400">● OPERATIONAL</span>}
          />
          <Mini
            label="Network"
            value={<span className="text-cyan-300">● MAINNET</span>}
          />
          <Mini label="Uptime" value="24D 03H 21M" valueClass="text-white/85" />
          <Mini label="Version" value="v1.3.0" valueClass="text-white/85" />
          <Mini label="Time (UTC)" value="2026-04-30 14:45:18" valueClass="text-white/85" />
        </div>
      </div>

      {/* BODY GRID */}
      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* LEFT COL */}
        <div className="p-5 md:p-6 space-y-7">
          {/* STRATEGY SIGNALS */}
          <div>
            <SectionLabel>STRATEGY SIGNALS</SectionLabel>
            <div className="mt-3 overflow-x-auto -mx-5 md:-mx-6 px-5 md:px-6">
              <table className="w-full min-w-[760px] text-[11.5px] font-mono">
                <thead>
                  <tr className="text-white/40">
                    {["Strategy", "Market", "Action", "Edge", "Confidence", "Size (USD)", "Status"].map(
                      (h) => (
                        <th key={h} className="text-left font-normal tracking-[0.14em] uppercase pb-2 pr-3 text-[10px]">
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {signals.map((s) => (
                    <tr key={s.strategy + s.market}>
                      <td className="py-2.5 pr-3 text-white/85">{s.strategy}</td>
                      <td className="py-2.5 pr-3 text-white/65">{s.market}</td>
                      <td className="py-2.5 pr-3 text-white/65">{s.action}</td>
                      <td className="py-2.5 pr-3 text-emerald-300">{s.edge}</td>
                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className={`h-full ${
                                s.tone === "emerald"
                                  ? "bg-emerald-400"
                                  : "bg-amber-400"
                              }`}
                              style={{ width: `${Math.round(s.conf * 100)}%` }}
                            />
                          </div>
                          <span className="text-white/70">{s.conf.toFixed(2)}</span>
                        </div>
                      </td>
                      <td className="py-2.5 pr-3 text-white/85">{s.size}</td>
                      <td className="py-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 h-5 px-2 rounded-full text-[10px] tracking-wider ring-1 ${tonePill(
                            s.tone
                          )}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              s.tone === "emerald" ? "bg-emerald-400" : "bg-amber-400"
                            }`}
                          />
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-[10.5px] font-mono text-white/35">
              Signal engine running · Last updated: 2026-04-30 14:45:18.221 UTC · Next refresh: 1.2s
            </div>
          </div>

          {/* RISK ENGINE */}
          <div>
            <SectionLabel>RISK ENGINE</SectionLabel>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
              <RiskTile label="Portfolio Risk" value="2.39%" sub="of equity" />
              <RiskTile label="Daily Drawdown" value="1.38%" sub="limit 5.00%" tone="emerald" />
              <RiskTile label="Confidence Gate" value="0.62" sub="threshold 0.60" tone="cyan" />
              <RiskTile label="Max Leverage" value="2.6x" sub="limit 5.0x" />
              <RiskTile label="Circuit Breaker" value="OK" sub="all systems normal" tone="emerald" />
              <RiskTile label="Risk Status" value="✓ APPROVED" sub="all risk checks passed" tone="emerald" />
            </div>
            <div className="mt-3 flex items-start gap-2 px-3 py-2 bg-amber-400/[0.06] border border-amber-400/15 rounded">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
              <div className="text-[11px] font-mono text-amber-200/85">
                Drift perp funding rate elevated (0.0231%). Monitoring for regime changes.
              </div>
            </div>
          </div>

          {/* EXECUTION REASONING */}
          <div>
            <SectionLabel>EXECUTION REASONING</SectionLabel>
            <div className="mt-3 grid md:grid-cols-2 gap-x-6 gap-y-2">
              <ul className="space-y-1.5 text-[11.5px] font-mono text-white/65">
                {reasoningLeft.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-cyan-400/70 mt-0.5">›</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5 text-[11.5px] font-mono">
                {reasoningRight.map((r) => (
                  <li key={r.k} className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-white/60">{r.k}</span>
                    <span className="text-emerald-300">✓ {r.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COL */}
        <div className="p-5 md:p-6 space-y-7">
          {/* ATTESTATION STATUS */}
          <div>
            <SectionLabel>ATTESTATION STATUS</SectionLabel>
            <div className="mt-3 border border-white/10 rounded-md divide-y divide-white/10 bg-[#080B10]">
              <div className="flex items-center justify-between px-4 py-2.5">
                <div className="text-[11px] font-mono">
                  <span className="text-white/45 tracking-[0.18em] uppercase">Enclave</span>
                  <span className="ml-3 text-white/85">AMD SEV-SNP</span>
                </div>
                <span className="inline-flex items-center gap-1.5 h-5 px-2 rounded-full text-[10px] tracking-wider ring-1 ring-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ATTESTED
                </span>
              </div>
              {[
                { k: "Measurement", v: "a3f7e..7b2d", copy: true },
                { k: "Policy Digest", v: "4e12c..9f3a", copy: true },
                { k: "Quote (Base64)", v: "eyJ0eXAiOiJKV1Qi…", copy: true },
                { k: "Verified At", v: "2026-04-30 14:45:16 UTC", copy: false },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between px-4 py-2.5 text-[11px] font-mono">
                  <span className="text-white/45 tracking-[0.18em] uppercase">{row.k}</span>
                  <span className="flex items-center gap-2 text-white/80">
                    <span>{row.v}</span>
                    {row.copy && <Copy className="h-3 w-3 text-white/35" />}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[10.5px] font-mono text-white/40">
              In-enclave key custody active · Keys never leave enclave
            </div>
          </div>

          {/* RECENT EXECUTIONS */}
          <div>
            <SectionLabel>RECENT EXECUTIONS</SectionLabel>
            <div className="mt-3 overflow-x-auto -mx-5 md:-mx-6 px-5 md:px-6">
              <table className="w-full min-w-[640px] text-[11px] font-mono">
                <thead>
                  <tr className="text-white/40">
                    {["Time (UTC)", "Strategy", "Action", "Protocol", "Size (USD)", "TX Signature", ""].map(
                      (h, i) => (
                        <th
                          key={h + i}
                          className="text-left font-normal tracking-[0.14em] uppercase pb-2 pr-3 text-[10px]"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {executions.map((e) => (
                    <tr key={e.t + e.tx}>
                      <td className="py-2 pr-3 text-white/65">{e.t}</td>
                      <td className="py-2 pr-3 text-white/85">{e.s}</td>
                      <td className="py-2 pr-3 text-white/65">{e.a}</td>
                      <td className="py-2 pr-3 text-white/55">{e.p}</td>
                      <td className="py-2 pr-3 text-white/85">{e.sz}</td>
                      <td className="py-2 pr-3 text-cyan-300/85">{e.tx}</td>
                      <td className="py-2 pr-1">
                        <span className={`text-base ${toneText(e.tone)}`}>●</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-[10.5px] font-mono text-white/40">
              Finalized on Solana mainnet · Explorer verification in progress for 1 tx
            </div>
          </div>

          {/* AUDIT LOG */}
          <div>
            <div className="flex items-center justify-between">
              <SectionLabel>AUDIT LOG</SectionLabel>
              <span className="text-[9.5px] font-mono tracking-[0.18em] text-white/35">
                IMMUTABLE
              </span>
            </div>
            <div className="mt-3 overflow-x-auto -mx-5 md:-mx-6 px-5 md:px-6">
              <table className="w-full min-w-[760px] text-[10.5px] font-mono">
                <thead>
                  <tr className="text-white/40">
                    {["Time", "Event", "Strategy", "Details", "TX · Attestation", "Policy", "Result"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left font-normal tracking-[0.14em] uppercase pb-2 pr-3 text-[9.5px]"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {auditRows.map((r) => (
                    <tr key={r.tx}>
                      <td className="py-1.5 pr-3 text-white/55">{r.t}</td>
                      <td className="py-1.5 pr-3">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[9.5px] tracking-wider ${
                            r.e === "EXECUTION"
                              ? "bg-blue-500/10 text-blue-300"
                              : r.e === "ATTESTATION"
                              ? "bg-cyan-400/10 text-cyan-300"
                              : r.e === "POLICY"
                              ? "bg-amber-400/10 text-amber-300"
                              : "bg-white/5 text-white/60"
                          }`}
                        >
                          {r.e}
                        </span>
                      </td>
                      <td className="py-1.5 pr-3 text-white/75">{r.s}</td>
                      <td className="py-1.5 pr-3 text-white/55">{r.d}</td>
                      <td className="py-1.5 pr-3 text-cyan-300/80">{r.tx}</td>
                      <td className="py-1.5 pr-3 text-white/65">{r.pol}</td>
                      <td className={`py-1.5 ${toneText(r.tone)}`}>{r.res}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-white/10 bg-[#0A0D12]">
        <div className="px-5 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-white/40 tracking-widest uppercase">Key Custody</span>
            <span className="text-white/85">ENCLAVE</span>
          </div>
          <div className="text-white/15">|</div>
          <div>
            <span className="text-white/40 tracking-widest uppercase">Funds at Risk</span>
            <span className="ml-2 text-white/85">$96,452.31</span>
          </div>
          <div className="text-white/15">|</div>
          <div>
            <span className="text-white/40 tracking-widest uppercase">Total Equity</span>
            <span className="ml-2 text-white/85">$268,732.41</span>
          </div>
          <div className="text-white/15">|</div>
          <div>
            <span className="text-white/40 tracking-widest uppercase">P&amp;L (24H)</span>
            <span className="ml-2 text-emerald-400">+$3,842.17 (+1.45%)</span>
          </div>
          <div className="text-white/15 hidden md:inline">|</div>
          <div className="text-white/45 tracking-widest uppercase hidden md:inline">
            Verifiable · Policy-Gated · Attested
          </div>
        </div>
      </div>
    </div>
  );
}
