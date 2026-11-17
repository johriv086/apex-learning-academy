import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  GraduationCap,
  Laptop,
  Menu,
  MessageCircle,
  MonitorPlay,
  Palette,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
} from 'lucide-react'

const programs = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Learn how modern websites are planned, designed and built from the ground up.',
    duration: '12 weeks',
    level: 'Beginner friendly',
    icon: Code2,
    tone: 'blue',
  },
  {
    number: '02',
    title: 'Programming Foundations',
    description: 'Build strong problem-solving skills with practical programming exercises.',
    duration: '10 weeks',
    level: 'Beginner friendly',
    icon: Laptop,
    tone: 'violet',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description: 'Turn ideas into clear, useful digital experiences through design thinking.',
    duration: '8 weeks',
    level: 'All levels',
    icon: Palette,
    tone: 'orange',
  },
]

const benefits = [
  {
    icon: Target,
    title: 'Practical learning',
    description: 'Learn by working through guided exercises and portfolio-style projects.',
  },
  {
    icon: Users,
    title: 'Supportive mentors',
    description: 'Get structured guidance, helpful feedback and a clear learning path.',
  },
  {
    icon: ShieldCheck,
    title: 'Skills for real work',
    description: 'Focus on useful skills and habits that transfer to real-world projects.',
  },
]

const testimonials = [
  {
    quote: 'The project-based approach made every topic easier to understand. I always knew what I was working towards.',
    name: 'Aarav S.',
    detail: 'Web Development learner',
    initials: 'AS',
  },
  {
    quote: 'The learning path felt organised and the feedback helped me improve my work one step at a time.',
    name: 'Meera K.',
    detail: 'UI/UX Design learner',
    initials: 'MK',
  },
]

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Apex Learning Academy home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#173b78] text-white shadow-lg shadow-blue-950/15">
        <GraduationCap size={24} strokeWidth={2.1} />
      </span>
      <span className="leading-tight">
        <span className="font-display block text-[15px] font-extrabold tracking-tight text-[#17243d]">APEX</span>
        <span className="block text-[10px] font-bold tracking-[.19em] text-slate-500">LEARNING ACADEMY</span>
      </span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Programs', '#programs'],
    ['Why Apex', '#why-apex'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-[78px] items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-[13px] font-semibold text-slate-600 transition hover:text-[#2455a4]">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#2455a4] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#173b78] md:inline-flex">
          Enquire now <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="container-shell flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-[#2455a4] px-4 py-3 text-center text-sm font-bold text-white">
              Enquire now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f4f7fc]">
      <div className="pointer-events-none absolute -right-28 -top-28 h-[470px] w-[470px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-[22%] h-[400px] w-[400px] rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="container-shell relative grid items-center gap-12 py-16 md:grid-cols-[1.04fr_.96fr] md:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#315fbd] shadow-sm">
            <Sparkles size={14} /> Learn with purpose
          </div>
          <h1 className="font-display max-w-[650px] text-[42px] font-extrabold leading-[1.1] tracking-[-.055em] text-[#17243d] sm:text-5xl lg:text-[62px]">
            Build skills that move <span className="text-[#2e60b5]">you forward.</span>
          </h1>
          <p className="mt-6 max-w-[530px] text-[16px] leading-8 text-slate-600">
            Practical learning, supportive mentors and career-focused programs designed to help you turn curiosity into capability.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2455a4] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-900/15 transition hover:-translate-y-1 hover:bg-[#173b78]">
              Explore programs <ArrowRight size={17} />
            </a>
            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-[#233653] transition hover:border-blue-300 hover:bg-blue-50/50">
              Discover Apex <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-200 pt-7">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Check size={17} className="text-emerald-600" /> Hands-on projects</div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Check size={17} className="text-emerald-600" /> Guided learning</div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -left-5 top-14 z-10 hidden rounded-2xl border border-white bg-white p-4 shadow-xl shadow-slate-900/10 sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><BookOpen size={19} /></span>
              <span><span className="block text-xs font-bold text-slate-800">Learn by doing</span><span className="mt-1 block text-[10px] text-slate-500">Projects that build confidence</span></span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[30px] border-[7px] border-white bg-white shadow-2xl shadow-blue-950/15">
            <img
              src="/images/hero-learning.jpg" alt="Graduates celebrating their learning journey"
              className="h-[360px] w-full object-cover sm:h-[445px]"
            />
            <div className="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur sm:bottom-7 sm:right-7 sm:left-auto sm:w-[260px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Your next chapter</span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold text-blue-700">START HERE</span>
              </div>
              <p className="font-display mt-2 text-xl font-extrabold tracking-tight text-[#17243d]">Make learning count.</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Build knowledge, practise with purpose and keep growing.</p>
            </div>
          </div>
          <div className="absolute -bottom-7 -right-3 -z-0 h-28 w-28 rounded-full border-[18px] border-blue-100/80" />
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-7">
      <div className="container-shell grid grid-cols-2 gap-6 sm:grid-cols-4">
        {[
          ['Practical', 'project-led learning'],
          ['Clear', 'guided learning paths'],
          ['Supportive', 'mentor-led approach'],
          ['Flexible', 'learning options'],
        ].map(([heading, sub]) => (
          <div key={heading} className="text-center">
            <p className="font-display text-base font-extrabold tracking-tight text-[#1e3761]">{heading}</p>
            <p className="mt-1 text-xs text-slate-500">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ kicker, title, description, align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-[-.045em] text-[#17243d] sm:text-[42px]">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-7 text-slate-500">{description}</p>}
    </div>
  )
}

function Programs() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          kicker="Explore our programs"
          title="Learn skills you can put into practice."
          description="Choose a learning path that matches your interests. Each program is designed around clear concepts, practical exercises and steady progress."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon
            const tone = {
              blue: 'bg-blue-50 text-blue-700',
              violet: 'bg-violet-50 text-violet-700',
              orange: 'bg-orange-50 text-orange-700',
            }[program.tone]
            return (
              <article key={program.number} className="group rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/8">
                <div className="flex items-start justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tone}`}><Icon size={25} /></span>
                  <span className="font-display text-sm font-extrabold text-slate-300">{program.number}</span>
                </div>
                <h3 className="font-display mt-7 text-xl font-extrabold tracking-tight text-[#1b2b48]">{program.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">{program.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600">{program.duration}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600">{program.level}</span>
                </div>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#2455a4] transition group-hover:gap-3">
                  Ask about this program <ArrowRight size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#f2f6fc] py-20 sm:py-24">
      <div className="container-shell grid items-center gap-12 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -left-7 -top-7 h-36 w-36 rounded-full bg-blue-100" />
          <img
            src="/images/learners-collaborating.jpg" alt="Learners collaborating around a table"
            className="relative z-10 h-[360px] w-full rounded-[28px] object-cover shadow-xl shadow-blue-950/10 sm:h-[430px]"
          />
          <div className="absolute -bottom-6 -right-4 z-20 rounded-2xl bg-white p-5 shadow-xl shadow-slate-900/10 sm:right-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600"><Star size={21} fill="currentColor" /></span>
              <div><p className="font-display text-sm font-extrabold text-[#1b2b48]">Progress with purpose</p><p className="mt-1 text-[11px] text-slate-500">One step at a time</p></div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <SectionHeading
            align="left"
            kicker="A little about Apex"
            title="A better way to learn, practise and grow."
            description="At Apex Learning Academy, we believe learning works best when strong foundations meet practical experience. Our approach helps learners understand the why, practise the how and build confidence along the way."
          />
          <div className="mt-8 space-y-4">
            {['Structured lessons with clear learning goals', 'Practical activities that reinforce each concept', 'Encouraging guidance throughout your journey'].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check size={14} strokeWidth={3} /></span>
                {item}
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#172f59] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#2455a4]">
            Learn more about Apex <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyApex() {
  return (
    <section id="why-apex" className="bg-white py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          kicker="The Apex approach"
          title="The right support makes a difference."
          description="A learning experience should be clear, encouraging and connected to the skills you want to develop."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="text-center">
              <div className="mx-auto grid h-[70px] w-[70px] place-items-center rounded-[23px] bg-[#edf3ff] text-[#2455a4]">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="font-display mt-6 text-lg font-extrabold tracking-tight text-[#1b2b48]">{title}</h3>
              <p className="mx-auto mt-3 max-w-[300px] text-sm leading-7 text-slate-500">{description}</p>
              <span className="mt-5 inline-block text-xs font-extrabold tracking-widest text-slate-300">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-[#f7f9fc] py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          kicker="Learner stories"
          title="A supportive place to make progress."
          description="A few sample stories that show the kind of learning experience this academy aims to create."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-[25px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex gap-1 text-amber-400" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />)}
              </div>
              <blockquote className="mt-5 text-[15px] leading-7 text-slate-600">“{item.quote}”</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-100 text-xs font-extrabold text-blue-800">{item.initials}</span>
                <span><span className="block text-sm font-extrabold text-[#1b2b48]">{item.name}</span><span className="mt-1 block text-xs text-slate-500">{item.detail}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-slate-400">Demo content: replace these sample stories with approved, genuine testimonials before using this site for a real business.</p>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', program: 'Web Development', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[30px] bg-[#173b78] shadow-2xl shadow-blue-950/15">
          <div className="grid md:grid-cols-[.9fr_1.1fr]">
            <div className="relative overflow-hidden p-8 text-white sm:p-12">
              <div className="absolute -right-24 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
              <div className="relative z-10">
                <p className="text-xs font-extrabold uppercase tracking-[.17em] text-blue-200">Take the next step</p>
                <h2 className="font-display mt-5 max-w-sm text-3xl font-extrabold leading-tight tracking-[-.045em] sm:text-[40px]">Your learning journey can start today.</h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">Have a question about a program? Share your details and our team can help you explore the next step.</p>
                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-3 text-sm text-blue-50"><MessageCircle size={18} /> Enquiry support</div>
                  <div className="flex items-center gap-3 text-sm text-blue-50"><MonitorPlay size={18} /> Program information</div>
                  <div className="flex items-center gap-3 text-sm text-blue-50"><GraduationCap size={18} /> Learning guidance</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-7 sm:p-10">
              <h3 className="font-display text-xl font-extrabold tracking-tight text-[#17243d]">Send an enquiry</h3>
              <p className="mt-2 text-sm text-slate-500">Fill in the form and we’ll help you find the right program.</p>
              <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold text-slate-700">Your name</label>
                  <input id="name" name="name" required value={form.name} onChange={updateField} placeholder="Enter your name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold text-slate-700">Email address</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={updateField} placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50" />
                </div>
                <div>
                  <label htmlFor="program" className="mb-2 block text-xs font-bold text-slate-700">Program of interest</label>
                  <div className="relative">
                    <select id="program" name="program" value={form.program} onChange={updateField} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50">
                      {programs.map((program) => <option key={program.title}>{program.title}</option>)}
                    </select>
                    <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-bold text-slate-700">Message <span className="font-normal text-slate-400">(optional)</span></label>
                  <textarea id="message" name="message" rows="3" value={form.message} onChange={updateField} placeholder="Tell us what you'd like to know..." className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2455a4] px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#173b78]">
                  Submit enquiry <Send size={16} />
                </button>
                {submitted && (
                  <p role="status" className="rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
                    Demo form only: your entries have not been sent or stored. Connect this form to an email service or backend before using the site for a real institute.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#101f39] py-10 text-white">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white"><GraduationCap size={22} /></span>
              <span><span className="font-display block text-sm font-extrabold tracking-tight">APEX</span><span className="block text-[9px] font-bold tracking-[.19em] text-blue-200">LEARNING ACADEMY</span></span>
            </div>
            <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">A demonstration website concept for a modern learning and training institute.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#programs" className="transition hover:text-white">Programs</a>
            <a href="#why-apex" className="transition hover:text-white">Why Apex</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-9 border-t border-white/10 pt-6 text-[11px] text-slate-500">
          © {new Date().getFullYear()} Apex Learning Academy. Portfolio demonstration project. All sample details are fictional.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Programs />
        <About />
        <WhyApex />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
