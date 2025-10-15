export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-5xl font-bold text-white sm:text-7xl">
            Oscar Eduardo Oceguera Bibriesca
          </h1>
          <p className="mb-8 text-2xl text-slate-300 sm:text-3xl">
            Fullstack JavaScript Engineer
          </p>
          <p className="mb-8 max-w-2xl text-lg text-slate-400">
            Building innovative web solutions with React, Node.js, and modern JavaScript.
            Passionate about sharing knowledge and tackling challenging problems.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/oscaroceguera"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/oscaroceguerab"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-800/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-slate-300">
                I&apos;m a software developer who enjoys challenges and loves building innovative
                solutions. As a team builder, I believe in the power of collaboration and knowledge
                sharing.
              </p>
              <p className="text-lg text-slate-300">
                Currently working at Clip, I bring perseverance, capability, and innovation to
                every project I work on.
              </p>
            </div>
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Location</h3>
              <p className="mb-4 text-slate-300">Culiacán, Sinaloa, Mexico</p>
              <h3 className="mb-4 text-xl font-semibold text-white">Community</h3>
              <p className="text-slate-300">
                Organizer at Eventloop • Volunteer at JSConfMX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">Technical Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'React.js',
              'Node.js',
              'JavaScript/TypeScript',
              'Frontend Development',
              'Fullstack Development',
              'UX Design',
              'AngularJS',
              'Web Technologies',
              'Modern Web Architecture',
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg bg-slate-700/50 px-6 py-4 text-center text-slate-200 transition hover:bg-slate-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-slate-800/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">Education & Certifications</h2>
          <div className="space-y-6">
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Instituto Tecnologico de Culiacan
              </h3>
              <p className="text-slate-300">2005 - 2010</p>
            </div>
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Professional Certifications</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Professional Frontend Course - Platzi</li>
                <li>• React.js Professional Course</li>
                <li>• AngularJS Course</li>
                <li>• UX Design Course</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <p>&copy; 2025 Oscar Eduardo Oceguera Bibriesca. All rights reserved.</p>
      </footer>
    </div>
  )
}
