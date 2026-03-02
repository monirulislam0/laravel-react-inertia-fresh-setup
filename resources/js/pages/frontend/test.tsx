import { useState } from "react";

// ── Shared primitives ───────────────────────────────────────────────────────
const PulseDot = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
);

const Badge = ({ variant, children }) => {
  const styles = {
    active:    "bg-emerald-400/10 text-emerald-400 border border-emerald-400/25",
    suspended: "bg-red-500/10 text-red-400 border border-red-400/25",
    pending:   "bg-amber-400/10 text-amber-400 border border-amber-400/25",
    setup:     "bg-sky-400/10 text-sky-400 border border-sky-400/25",
  };
  return (
    <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
};

const GlassCard = ({ children, className = "", ...p }) => (
  <div className={`bg-[#0f1e35] border border-[#1a2f4a] rounded-xl ${className}`} {...p}>
    {children}
  </div>
);

const Input = ({ className = "", ...p }) => (
  <input
    className={`w-full bg-[#0a1628]/80 border border-[#1a2f4a] rounded-lg text-[#e2eaf5] px-3.5 py-2.5 text-sm outline-none placeholder-[#6b8aaa] focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition-all ${className}`}
    {...p}
  />
);

const BtnPrimary = ({ children, className = "", ...p }) => (
  <button
    className={`bg-gradient-to-br from-sky-500 to-cyan-500 text-white font-semibold rounded-lg px-5 py-2.5 text-sm cursor-pointer hover:opacity-90 hover:-translate-y-px transition-all ${className}`}
    {...p}
  >
    {children}
  </button>
);

const BtnOutline = ({ children, className = "", ...p }) => (
  <button
    className={`bg-transparent text-sky-400 border border-[#1a2f4a] rounded-lg px-4 py-2 text-sm font-medium cursor-pointer hover:border-sky-500 hover:bg-sky-500/10 transition-all ${className}`}
    {...p}
  >
    {children}
  </button>
);

const GradText = ({ children }) => (
  <span className="bg-gradient-to-br from-sky-400 to-cyan-400 bg-clip-text text-transparent">
    {children}
  </span>
);

const LogoMark = ({ size = "w-9 h-9", letter = "N" }) => (
  <div className={`${size} bg-gradient-to-br from-sky-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-extrabold text-sm select-none`}>
    {letter}
  </div>
);

// ── Sidebar Nav Item ────────────────────────────────────────────────────────
const NavItem = ({ active, emoji, children, badge, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-all select-none
      ${active
        ? "bg-sky-500/15 border-l-[3px] border-sky-400 text-[#e2eaf5] font-medium pl-[9px]"
        : "text-[#6b8aaa] hover:bg-sky-500/10 hover:text-[#e2eaf5]"}`}
  >
    <span className="text-base leading-none w-5 text-center">{emoji}</span>
    <span className="flex-1">{children}</span>
    {badge && (
      <span className="bg-sky-500 text-white text-[11px] px-1.5 py-0.5 rounded-full leading-none">
        {badge}
      </span>
    )}
  </div>
);

// ── LANDING ──────────────────────────────────────────────────────────────────
const Landing = ({ onNav }) => (
  <div className="min-h-screen bg-[#050d1a] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.18)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(6,182,212,0.10)_0%,transparent_60%)]">
    {/* Navbar */}
    <nav className="sticky top-0 z-50 border-b border-[#1a2f4a] backdrop-blur-lg bg-[#050d1a]/85">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-extrabold text-xl tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
            NetServe<GradText>Pro</GradText>
          </span>
        </div>
        <div className="flex gap-2">
          <BtnOutline onClick={() => onNav("login")}>Tenant Login</BtnOutline>
          <BtnPrimary onClick={() => onNav("login")}>Admin Portal</BtnPrimary>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
      <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/25 rounded-full px-4 py-1.5 mb-7">
        <PulseDot />
        <span className="text-sky-400 text-sm">Serving 1,200+ Apartments</span>
      </div>
      <h1
        className="text-6xl font-extrabold leading-tight mb-6"
        style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-1.5px" }}
      >
        Internet Service<br /><GradText>Management Portal</GradText>
      </h1>
      <p className="text-[#6b8aaa] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        A complete platform for property managers to offer ISP services — tenant billing,
        service activation, payment tracking, and tech support all in one place.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <BtnPrimary className="px-8 py-3.5 text-base" onClick={() => onNav("admin")}>View Admin Demo</BtnPrimary>
        <BtnOutline className="px-8 py-3.5 text-base" onClick={() => onNav("tenant")}>View Tenant Demo</BtnOutline>
      </div>
    </div>

    {/* Stats */}
    <div className="max-w-6xl mx-auto px-6 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          ["1,200+", "Active Apartment Units"],
          ["99.7%",  "Network Uptime"],
          ["$0",     "Late Payments Missed"],
          ["3 min",  "Avg. Activation Time"],
        ].map(([val, label]) => (
          <GlassCard
            key={label}
            className="p-7 text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all cursor-default"
          >
            <div className="text-4xl font-extrabold mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
              <GradText>{val}</GradText>
            </div>
            <div className="text-[#6b8aaa] text-sm">{label}</div>
          </GlassCard>
        ))}
      </div>
    </div>

    {/* Features */}
    <div className="max-w-6xl mx-auto px-6 mb-24">
      <h2 className="text-center text-4xl font-bold mb-12" style={{ fontFamily: "Syne, sans-serif" }}>
        Everything You Need to Manage<br /><GradText>Internet Services at Scale</GradText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { emoji: "🖥️", title: "Tenant Self-Service Portal",   desc: "Tenants can view bills, make payments, submit support tickets, and track service status — without calling your office." },
          { emoji: "💰", title: "Automated Billing System",      desc: "Monthly invoices generated automatically. Track paid/unpaid status in real time, with automated reminders sent before due dates." },
          { emoji: "🚫", title: "Auto Service Suspension",       desc: "Flag or suspend service automatically when payment is overdue. Restore instantly when tenant pays — no manual intervention needed." },
          { emoji: "👥", title: "New Tenant Onboarding",         desc: "Auto-notifications when new tenants move in. Admin sets up the account, tenant receives credentials via email." },
          { emoji: "📊", title: "Admin Analytics Dashboard",     desc: "Revenue charts, tenant payment history, unit-level reports, and exportable CSV/PDF reports for accounting purposes." },
          { emoji: "💬", title: "Tech Support Communication",    desc: "Built-in ticketing system for tenants to report issues. Assign to technicians, track status, resolve, and close tickets." },
        ].map(({ emoji, title, desc }) => (
          <GlassCard
            key={title}
            className="p-7 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.08)] transition-all cursor-default"
          >
            <div className="text-3xl mb-4">{emoji}</div>
            <h4 className="font-bold text-lg mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{title}</h4>
            <p className="text-[#6b8aaa] text-sm leading-relaxed">{desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>

    <footer className="border-t border-[#1a2f4a] py-8 text-center text-[#6b8aaa] text-sm">
      © 2025 NetServePro — Internet Service Management Platform. Built with Laravel.
    </footer>
  </div>
);

// ── LOGIN ────────────────────────────────────────────────────────────────────
const Login = ({ onNav }) => {
  const [role, setRole] = useState("tenant");
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050d1a] bg-[radial-gradient(ellipse_60%_80%_at_30%_50%,rgba(14,165,233,0.12)_0%,transparent_60%),radial-gradient(ellipse_50%_60%_at_70%_60%,rgba(6,182,212,0.08)_0%,transparent_50%)]">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-extrabold">
            N
          </div>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>NetServePro</h2>
          <p className="text-[#6b8aaa] text-sm mt-1">Sign in to your account</p>
        </div>

        <div className="flex bg-[#0f1e35] border border-[#1a2f4a] rounded-xl p-1 mb-7">
          {[["tenant", "Tenant Login"], ["admin", "Admin Login"]].map(([r, label]) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all
                ${role === r
                  ? "bg-gradient-to-br from-sky-500 to-cyan-500 text-white"
                  : "bg-transparent text-[#6b8aaa] hover:text-[#e2eaf5]"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <GlassCard className="p-8">
          {role === "tenant" ? (
            <div className="flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-3.5 py-2.5 mb-6">
              <span className="text-base">👤</span>
              <span className="text-emerald-400 text-sm font-medium">Tenant Portal — Apt #0000</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-sky-400/10 border border-sky-400/20 rounded-lg px-3.5 py-2.5 mb-6">
              <span className="text-base">🛡️</span>
              <span className="text-sky-400 text-sm font-medium">Admin Portal — Property Manager</span>
            </div>
          )}

          <label className="block text-xs text-[#6b8aaa] mb-1.5">Email Address</label>
          <Input type="email" placeholder="you@example.com" className="mb-4" />

          <label className="block text-xs text-[#6b8aaa] mb-1.5">Password</label>
          <Input type="password" placeholder="••••••••" className="mb-2" />

          <div className="text-right mb-6">
            <a href="#" className="text-xs text-sky-400 hover:underline">Forgot password?</a>
          </div>

          <BtnPrimary className="w-full py-3 text-base" onClick={() => onNav(role)}>
            Sign In →
          </BtnPrimary>
        </GlassCard>

        <p className="text-center text-[#6b8aaa] text-sm mt-5">
          Need help? <a href="#" className="text-sky-400 hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

// ── TENANT DASHBOARD ─────────────────────────────────────────────────────────
const TenantDashboard = ({ onNav }) => {
  const payments = [
    { month: "March 2025",    amount: "$49.99", date: "—",           status: "pending", label: "Due Mar 15" },
    { month: "February 2025", amount: "$49.99", date: "Feb 3, 2025", status: "active",  label: "Paid" },
    { month: "January 2025",  amount: "$49.99", date: "Jan 7, 2025", status: "active",  label: "Paid" },
    { month: "December 2024", amount: "$49.99", date: "Dec 2, 2024", status: "active",  label: "Paid" },
  ];

  return (
    <div className="flex min-h-screen bg-[#050d1a] text-[#e2eaf5]">
      {/* Sidebar */}
      <aside className="w-60 min-h-screen bg-[#0a1628] border-r border-[#1a2f4a] px-4 py-6 flex flex-col fixed left-0 top-0 z-10">
        <div className="flex items-center gap-2.5 px-2 mb-8">
          <LogoMark size="w-8 h-8" />
          <span className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>
            NetServe<GradText>Pro</GradText>
          </span>
        </div>

        <div className="bg-sky-500/10 border border-sky-500/15 rounded-xl p-3.5 mb-6">
          <div className="text-[10px] text-[#6b8aaa] mb-0.5 tracking-widest uppercase">Tenant</div>
          <div className="font-semibold">Marcus Johnson</div>
          <div className="text-sm text-[#6b8aaa]">Unit #4B · Building A</div>
          <div className="flex items-center gap-1.5 mt-2.5">
            <PulseDot />
            <span className="text-xs text-emerald-400">Service Active</span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5">
          <NavItem active emoji="⊞">Dashboard</NavItem>
          <NavItem emoji="📄">My Bills</NavItem>
          <NavItem emoji="💳">Make Payment</NavItem>
          <NavItem emoji="💬">Support Tickets</NavItem>
          <NavItem emoji="📡">Service Status</NavItem>
        </nav>

        <NavItem emoji="↩" onClick={() => onNav("login")}>Sign Out</NavItem>
      </aside>

      {/* Main */}
      <main className="ml-60 flex-1 p-8">
        <div className="mb-7">
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
            Good Morning, Marcus 👋
          </h2>
          <p className="text-[#6b8aaa] text-sm mt-1">Here's your internet service overview for March 2025.</p>
        </div>

        {/* Alert */}
        <div className="flex items-center justify-between bg-amber-400/10 border border-amber-400/25 rounded-xl px-5 py-3.5 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="text-amber-400 text-lg">⚠️</span>
            <span className="text-amber-400 text-sm font-medium">
              March 2025 invoice of <strong>$49.99</strong> is due on <strong>March 15</strong>
            </span>
          </div>
          <BtnPrimary className="py-1.5 px-4 text-xs">Pay Now</BtnPrimary>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-7">
          <GlassCard className="p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.10)] transition-all cursor-default">
            <div className="text-xs text-[#6b8aaa] uppercase tracking-wider mb-2">Monthly Plan</div>
            <div className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
              <GradText>$49.99</GradText>
            </div>
            <div className="text-xs text-[#6b8aaa] mt-1">100 Mbps · Unlimited</div>
          </GlassCard>

          <GlassCard className="p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.10)] transition-all cursor-default">
            <div className="text-xs text-[#6b8aaa] uppercase tracking-wider mb-2">Account Balance</div>
            <div className="text-2xl font-extrabold text-emerald-400" style={{ fontFamily: "Syne, sans-serif" }}>$0.00</div>
            <div className="text-xs text-[#6b8aaa] mt-1">No outstanding dues</div>
          </GlassCard>

          <GlassCard className="p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.10)] transition-all cursor-default">
            <div className="text-xs text-[#6b8aaa] uppercase tracking-wider mb-2">Service Status</div>
            <div className="flex items-center gap-2 mt-1">
              <PulseDot />
              <span className="text-xl font-extrabold text-emerald-400" style={{ fontFamily: "Syne, sans-serif" }}>ACTIVE</span>
            </div>
            <div className="text-xs text-[#6b8aaa] mt-2">Since Jan 2024</div>
          </GlassCard>

          <GlassCard className="p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.10)] transition-all cursor-default">
            <div className="text-xs text-[#6b8aaa] uppercase tracking-wider mb-2">Open Tickets</div>
            <div className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>1</div>
            <div className="text-xs text-amber-400 mt-1">In progress</div>
          </GlassCard>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-3 gap-5">
          <GlassCard className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>Payment History</h4>
              <BtnOutline className="py-1.5 px-3 text-xs">View All</BtnOutline>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#1a2f4a]">
                  {["Month", "Amount", "Date Paid", "Status"].map(h => (
                    <th key={h} className="text-left py-2 text-xs text-[#6b8aaa] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {payments.map(({ month, amount, date, status, label }) => (
                  <tr key={month} className="border-b border-[#1a2f4a]/50 hover:bg-sky-500/5">
                    <td className="py-3 text-sm">{month}</td>
                    <td className="py-3 text-sm">{amount}</td>
                    <td className="py-3 text-sm text-[#6b8aaa]">{date}</td>
                    <td className="py-3"><Badge variant={status}>{label}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          <div className="flex flex-col gap-4">
            <GlassCard className="p-5">
              <h4 className="font-bold mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Quick Pay</h4>
              <div className="text-center py-3 bg-sky-500/10 rounded-xl mb-4">
                <div className="text-3xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>
                  <GradText>$49.99</GradText>
                </div>
                <div className="text-xs text-[#6b8aaa] mt-1">March 2025 Invoice</div>
              </div>
              <BtnPrimary className="w-full py-3 mb-2.5">Pay with Card</BtnPrimary>
              <BtnOutline className="w-full py-2.5">Bank Transfer</BtnOutline>
            </GlassCard>

            <GlassCard className="p-5">
              <h4 className="font-bold text-sm mb-3" style={{ fontFamily: "Syne, sans-serif" }}>Open Support Ticket</h4>
              <div className="flex flex-col gap-2">
                <select className="w-full bg-[#0a1628]/80 border border-[#1a2f4a] rounded-lg text-[#e2eaf5] px-3 py-2 text-xs outline-none focus:border-sky-500 transition-all">
                  <option>Select issue type...</option>
                  <option>No internet connection</option>
                  <option>Slow speeds</option>
                  <option>Billing question</option>
                </select>
                <textarea
                  className="w-full bg-[#0a1628]/80 border border-[#1a2f4a] rounded-lg text-[#e2eaf5] px-3 py-2 text-xs outline-none resize-none h-20 placeholder-[#6b8aaa] focus:border-sky-500 transition-all"
                  placeholder="Describe your issue..."
                />
                <BtnPrimary className="py-2 text-xs">Submit Ticket</BtnPrimary>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
};

// ── ADMIN DASHBOARD ───────────────────────────────────────────────────────────
const AdminDashboard = ({ onNav }) => {
  const bars = [
    { label: "Oct", h: 90  },
    { label: "Nov", h: 75  },
    { label: "Dec", h: 100 },
    { label: "Jan", h: 95  },
    { label: "Feb", h: 110 },
    { label: "Mar", h: 117, active: true },
  ];

  const tenants = [
    { unit: "#4B",  name: "Marcus Johnson", plan: "100 Mbps", status: "pending",   balance: "$49.99", balColor: "text-red-400",     actions: ["view", "suspend"] },
    { unit: "#7A",  name: "Diana Ross",     plan: "200 Mbps", status: "active",    balance: "$0.00",  balColor: "text-emerald-400", actions: ["view"] },
    { unit: "#2C",  name: "James Walker",   plan: "100 Mbps", status: "suspended", balance: "$99.98", balColor: "text-red-400",     actions: ["view", "restore"] },
    { unit: "#11D", name: "Keisha Brown",   plan: "50 Mbps",  status: "active",    balance: "$0.00",  balColor: "text-emerald-400", actions: ["view"] },
    { unit: "#9F",  name: "NEW TENANT",     plan: "—",        status: "setup",     balance: "—",      balColor: "text-[#6b8aaa]",   actions: ["activate"] },
  ];

  const statusLabel = { pending: "Overdue", active: "Active", suspended: "Suspended", setup: "Setup Required" };

  return (
    <div className="flex min-h-screen bg-[#050d1a] text-[#e2eaf5]">
      {/* Sidebar */}
      <aside className="w-60 min-h-screen bg-[#0a1628] border-r border-[#1a2f4a] px-4 py-6 flex flex-col fixed left-0 top-0 z-10">
        <div className="flex items-center gap-2.5 px-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-extrabold text-xs">
            A
          </div>
          <span className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif" }}>
            Admin<GradText>Panel</GradText>
          </span>
        </div>

        <div className="bg-sky-500/10 border border-sky-500/15 rounded-xl p-3 mb-6">
          <div className="text-[10px] text-[#6b8aaa] mb-0.5 tracking-widest uppercase">Property Manager</div>
          <div className="font-semibold text-sm">Tarquen (Admin)</div>
          <div className="text-xs text-[#6b8aaa]">1,247 active units</div>
        </div>

        <nav className="flex-1 flex flex-col gap-0.5">
          <NavItem active emoji="⊞">Overview</NavItem>
          <NavItem emoji="👥">Tenants</NavItem>
          <NavItem emoji="📄">Billing & Invoices</NavItem>
          <NavItem emoji="🔌">Service Control</NavItem>
          <NavItem emoji="💬" badge={8}>Support Tickets</NavItem>
          <NavItem emoji="📊">Reports</NavItem>
          <NavItem emoji="⚙️">Settings</NavItem>
        </nav>

        <NavItem emoji="↩" onClick={() => onNav("login")}>Sign Out</NavItem>
      </aside>

      {/* Main */}
      <main className="ml-60 flex-1 p-8">
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif" }}>Admin Dashboard</h2>
            <p className="text-[#6b8aaa] text-sm mt-1">March 2025 — All Buildings Overview</p>
          </div>
          <BtnPrimary>＋ Add New Tenant</BtnPrimary>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Tenants",      val: "1,247",   sub: "▲ +14 this month",  subCls: "text-emerald-400", grad: true },
            { label: "Monthly Revenue",    val: "$62,350", sub: "▲ 94.2% collected", subCls: "text-emerald-400", grad: true },
            { label: "Unpaid Bills",       val: "73",      sub: "$3,649 outstanding", subCls: "text-red-400",    valCls: "text-red-400" },
            { label: "Suspended Accounts", val: "12",      sub: "For non-payment",   subCls: "text-[#6b8aaa]",  valCls: "text-amber-400" },
          ].map(({ label, val, sub, subCls, grad, valCls }) => (
            <GlassCard key={label} className="p-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(14,165,233,0.10)] transition-all cursor-default">
              <div className="text-xs text-[#6b8aaa] uppercase tracking-wider mb-2.5">{label}</div>
              <div className={`text-3xl font-extrabold ${valCls ?? ""}`} style={{ fontFamily: "Syne, sans-serif" }}>
                {grad ? <GradText>{val}</GradText> : val}
              </div>
              <div className={`text-xs mt-1.5 ${subCls}`}>{sub}</div>
            </GlassCard>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          <GlassCard className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold" style={{ fontFamily: "Syne, sans-serif" }}>Revenue Collected (2025)</h4>
              <select className="bg-[#0a1628]/80 border border-[#1a2f4a] rounded-lg text-[#e2eaf5] px-2.5 py-1.5 text-xs outline-none">
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
            <div className="flex items-end gap-2 h-36 px-1">
              {bars.map(({ label, h, active }) => (
                <div key={label} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded-t-md ${active ? "bg-gradient-to-b from-cyan-400 to-sky-500" : "bg-gradient-to-b from-sky-500 to-blue-900"}`}
                    style={{ height: h }}
                  />
                  <span className={`text-[11px] ${active ? "text-sky-400 font-semibold" : "text-[#6b8aaa]"}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-[#6b8aaa]">Mar Target: <strong className="text-[#e2eaf5]">$65,000</strong></span>
              <span className="text-xs text-[#6b8aaa]">Collected: <strong className="text-emerald-400">$62,350</strong></span>
              <div className="flex-1 h-1 bg-[#1a2f4a] rounded-full overflow-hidden">
                <div className="h-full w-[95.9%] bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full" />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="font-bold mb-5" style={{ fontFamily: "Syne, sans-serif" }}>Account Status</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "Active",    count: 1162, barCls: "w-[93.2%] bg-emerald-400", textCls: "text-emerald-400" },
                { label: "Suspended", count: 12,   barCls: "w-[1%] bg-amber-400",      textCls: "text-amber-400"  },
                { label: "Overdue",   count: 73,   barCls: "w-[5.9%] bg-red-400",      textCls: "text-red-400"    },
              ].map(({ label, count, barCls, textCls }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <span className={`text-sm ${textCls}`}>● {label}</span>
                    <span className="text-sm font-semibold">{count}</span>
                  </div>
                  <div className="h-1 bg-[#1a2f4a] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${barCls}`} />
                  </div>
                </div>
              ))}
              <div className="border-t border-[#1a2f4a] pt-4 flex gap-2">
                <Input placeholder="Search unit # or tenant..." className="text-xs py-2" />
                <BtnPrimary className="py-2 px-3 text-xs whitespace-nowrap">Go</BtnPrimary>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Tenant table */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-bold" style={{ fontFamily: "Syne, sans-serif" }}>Recent Tenant Activity</h4>
            <div className="flex gap-2">
              <BtnOutline className="py-1.5 px-3 text-xs">Export CSV</BtnOutline>
              <BtnOutline className="py-1.5 px-3 text-xs">Filter ▾</BtnOutline>
            </div>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#1a2f4a]">
                {["Unit", "Tenant", "Plan", "Status", "Balance", "Actions"].map(h => (
                  <th key={h} className="text-left py-2 px-3 text-xs text-[#6b8aaa] font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tenants.map(({ unit, name, plan, status, balance, balColor, actions }) => (
                <tr key={unit} className="border-b border-[#1a2f4a]/40 hover:bg-sky-500/5">
                  <td className="py-3 px-3 text-sm font-semibold">{unit}</td>
                  <td className="py-3 px-3 text-sm">{name}</td>
                  <td className="py-3 px-3 text-sm text-[#6b8aaa]">{plan}</td>
                  <td className="py-3 px-3"><Badge variant={status}>{statusLabel[status]}</Badge></td>
                  <td className={`py-3 px-3 text-sm ${balColor}`}>{balance}</td>
                  <td className="py-3 px-3">
                    <div className="flex gap-1.5">
                      {actions.includes("view") && <BtnOutline className="py-1 px-2.5 text-xs">View</BtnOutline>}
                      {actions.includes("suspend") && (
                        <button className="bg-red-500/10 text-red-400 border border-red-400/25 rounded-lg py-1 px-2.5 text-xs cursor-pointer hover:bg-red-500/20 transition-all">Suspend</button>
                      )}
                      {actions.includes("restore") && (
                        <button className="bg-emerald-400/10 text-emerald-400 border border-emerald-400/25 rounded-lg py-1 px-2.5 text-xs cursor-pointer hover:bg-emerald-400/20 transition-all">Restore</button>
                      )}
                      {actions.includes("activate") && <BtnPrimary className="py-1 px-2.5 text-xs">Activate</BtnPrimary>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </main>
    </div>
  );
};

// ── APP SHELL ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("landing");

  const pages = {
    landing: <Landing onNav={setPage} />,
    login:   <Login onNav={setPage} />,
    tenant:  <TenantDashboard onNav={setPage} />,
    admin:   <AdminDashboard onNav={setPage} />,
  };

  const tabs = [
    { id: "landing", label: "🏠 Landing" },
    { id: "login",   label: "🔐 Login"   },
    { id: "tenant",  label: "👤 Tenant"  },
    { id: "admin",   label: "⚙️ Admin"   },
  ];

  return (
    <div className="min-h-screen text-[#e2eaf5]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {/* Demo switcher */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[9999] flex gap-1 bg-[#050d1a]/90 backdrop-blur-xl border border-[#1a2f4a]/80 rounded-full px-2 py-1.5">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setPage(id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border
              ${page === id
                ? "bg-sky-500/15 text-sky-400 border-sky-500/30"
                : "text-[#6b8aaa] border-transparent hover:text-[#e2eaf5]"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {pages[page]}
    </div>
  );
}