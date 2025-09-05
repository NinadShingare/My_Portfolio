export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <div className="glass-container max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-4 pb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          I am a Software Developer passionate about building modern web applications.
        </p>
        <p className="mb-4">
          Recent MCA graduate with hands-on experience at PRGX India Pvt. Ltd. and Vyosim TechLab.
          Passionate about backend development and full-stack web application engineering.
        </p>
        <p className="mb-4">
          Skilled in Java, Spring Boot, Python, Django, Node.js, and frontend technologies.
          Experienced with MySQL, PostgreSQL, MongoDB, Git, Docker, and more.
        </p>
        <p className="mb-6">
          If you'd like to contact me: <span className="font-semibold">nvshingare67@gmail.com</span>
        </p>
        <a
          href="https://drive.google.com/file/d/1s3us55MDrABGHtl2EHQPOaYv3o5o1ZKx/view?usp=sharing"
          className="inline-block bg-gradient-to-r from-blue-800 to-purple-800 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
