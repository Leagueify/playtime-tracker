export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-orange-400 font-semibold">Playtime Tracker</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">

          {/* Meta Information */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wider">Effective Date</p>
                <p className="text-white font-semibold mt-1">October 17th, 2025</p>
              </div>
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wider">Last Updated</p>
                <p className="text-white font-semibold mt-1">October 17th, 2025</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-white/80 mb-10 leading-relaxed">
            Leagueify ("we", "our", or "us") respects your privacy. This Privacy Policy explains how Playtime Tracker ("the App") handles user information.
          </p>

          {/* Sections */}
          <div className="space-y-8">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm font-bold">1</span>
                Information We Do Not Collect
              </h2>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-white/80 mb-4">Playtime Tracker does not collect, store, share, or process any personal or usage data.</p>
                <ul className="space-y-3">
                  {[
                    "We do not require account registration.",
                    "We do not collect names, email addresses, or contact details.",
                    "We do not track location or device information.",
                    "We do not use analytics or third-party tracking tools.",
                    "We do not transmit or store any user data on our servers."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/80">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 mt-4 text-sm italic">All information entered into the app (such as player names or timers) is stored only on your device and is deleted when you remove the app or clear its data.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm font-bold">2</span>
                Third-Party Services
              </h2>
              <p className="text-white/80">Playtime Tracker does not integrate with any third-party services that collect personal information.</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm font-bold">3</span>
                Children's Privacy
              </h2>
              <p className="text-white/80">The App does not knowingly collect data from anyone, including children under 13. Because no data is collected or transmitted, it is safe for use by all audiences.</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm font-bold">4</span>
                Data Security
              </h2>
              <p className="text-white/80">Since no personal data is collected, there is no risk of unauthorized access, disclosure, or misuse of user information.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm font-bold">5</span>
                Changes to This Policy
              </h2>
              <p className="text-white/80">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The most recent version will be available at: <a href="/privacy" className="text-orange-400 hover:text-orange-300 font-semibold transition">https://playtime.leagueify.io/privacy</a>.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm font-bold">6</span>
                Contact Us
              </h2>
              <p className="text-white/80 mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10 space-y-3">
                <div className="flex gap-3">
                  <span className="text-orange-400 font-semibold whitespace-nowrap">Email:</span>
                  <a href="mailto:support@leagueify.io" className="text-white/80 hover:text-orange-400 transition">support@leagueify.io</a>
                </div>
                <div className="flex gap-3">
                  <span className="text-orange-400 font-semibold whitespace-nowrap">Website:</span>
                  <a href="https://leagueify.io/contact" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-orange-400 transition">https://leagueify.io/contact</a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white/40 text-sm">
          <p>© 2025 Leagueify. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
