import Image from 'next/image';

const About = () => {
  const sessions = [
    {
      host: "Shahbaz Asif",
      title: "Next JS | TypeScript | Figma for Web Design",
      time: "6:00 to 7:00 PM (Sunday off)",
      description: "Figma for Web & Mobile Apps",
      discordLink: "https://discord.gg/GKRK7AUswr",
      youtubeLink: "https://www.youtube.com/@LearnthenDesign/streams",
      linkedinLink: "https://www.linkedin.com/events/basicweblayout-buttonsandfonts-7280738364230688768/theater/",
      emoji: "💻"
    },
    {
      host: "Rabia Noreen",
      title: "Day 2: English Speaking Practice | Personal Pronouns",
      time: "7:00 to 8:00 PM (Sunday, Wednesday off)",
      description: "Beginners to Advance | Mastering in English",
      discordLink: "https://discord.gg/hKPuwpQbgS",
      youtubeLink: "https://www.youtube.com/live/e7kktLjaVbY?si=IveS3DSn7GvYLpZN",
      linkedinLink: "https://www.linkedin.com/events/day2-englishspeakingpracticeonl7280700168629370880/theater/",
      emoji: "🗣️"
    },
    {
      host: "Minahil Nawaz",
      title: "Lec-3: Python | String Complete | Conditional Statements",
      time: "8:00 PM to 9:00 PM",
      description: "Basic To Advance Full Course",
      discordLink: "https://discord.gg/Pgw2nf2ewn",
      youtubeLink: "https://youtube.com/live/0m3Q0a2UkIw?feature=share",
      linkedinLink: "https://www.linkedin.com/events/lec-3-python-stringcomplete-con7280748479679782913/theater/",
      emoji: "🐍"
    },
    {
      host: "Minahil Nawaz",
      title: "Agent AI PIAIC201",
      time: "9:00 PM to 11:59 PM",
      description: "Agent AI Exploring LLM Models Generation & Script Analysis + LangChain RAG",
      discordLink: "https://discord.gg/Pgw2nf2ewn",
      youtubeLink: "https://youtube.com/live/0m3Q0a2UkIw?feature=share",
      linkedinLink: "https://www.linkedin.com/events/langchainrag-llmmodelsforcreati7280751452996722688/theater/",
      emoji: "🤖"
    },
    {
      host: "Muhammad Tahir",
      title: "FastAPI PostgreSQL with Next.js",
      time: "10:00 PM to 11:00 PM",
      description: "Implementing FastAPI with PostgreSQL and Next.js",
      discordLink: "https://discord.gg/72AjJzquu8",
      youtubeLink: "https://youtube.com/live/YLHenP2i980?feature=share",
      linkedinLink: "https://www.linkedin.com/events/implementingstudentsapiwithfast7280754291022192640/theater/",
      channelLink: "https://www.youtube.com/@motivation2code",
      emoji: "⚙️"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <Image
          src="/logo1.jpg"
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
        <p className="mt-2 text-lg text-gray-600">We offer a variety of online courses to help you improve your skills.</p>
        <p className="mt-2 text-lg text-gray-600">TypeScript 🟨 | Next.js ⚛️ | Figma 🎨</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {sessions.map((session, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50" style={{ backgroundImage: 'url(/logo1.png)' }}></div>
            <div className="p-6 relative z-10">
              <h2 className="text-2xl font-semibold  text-slate-950">
                {session.title} {session.emoji}
              </h2>
              <p className="mt-2 text-lg text-slate-950"><strong>Host:</strong> {session.host}</p>
              <p className="mt-2 text-lg  text-slate-950"><strong>Time:</strong> {session.time}</p>
              <p className="mt-4  text-slate-950">{session.description}</p>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 relative z-10">
              <div className="flex space-x-4">
                <a href={session.discordLink} className="text-blue-500 hover:underline">Discord</a>
                <a href={session.youtubeLink} className="text-blue-500 hover:underline">YouTube</a>
                <a href={session.linkedinLink} className="text-blue-500 hover:underline">LinkedIn</a>
                {session.channelLink && (
                  <a href={session.channelLink} className="text-blue-500 hover:underline">Channel</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
