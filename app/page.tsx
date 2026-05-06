export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Async standups your team{" "}
          <span className="text-[#58a6ff]">actually fills out</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Team members submit updates on their own time. OpenAI distills everything into a crisp manager summary — no meetings, no chasing.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📝", title: "Simple Form or Slack", body: "Team submits updates via a clean web form or a Slack slash command — zero friction." },
          { icon: "🤖", title: "AI-Powered Summaries", body: "OpenAI reads every response and writes a concise, actionable digest for managers." },
          { icon: "📬", title: "Morning Delivery", body: "Summaries land in your inbox before your first coffee. Stay in sync without a single meeting." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.body}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · unlimited team members</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited standup submissions",
              "Daily AI-generated summaries",
              "Slack + web form integration",
              "Email delivery to managers",
              "7-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do team members submit their standup?",
              a: "They visit a unique team link and fill out a short form — what they did, what they're doing, and any blockers. Slack integration lets them submit with a slash command."
            },
            {
              q: "When do managers receive the summary?",
              a: "Summaries are generated and emailed each morning at a time you configure. You can also view them anytime in the dashboard."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} StandupSync. Built for remote teams.
      </footer>
    </main>
  );
}
