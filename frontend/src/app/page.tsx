export default function HomePage() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        I am a Software Developer passionate about building modern web applications.
      </p>
      <p>
        Recent MCA graduate from Dr. D.Y. Patil Institute of Management and Research, Pune, with hands-on internship
        experience at PRGX India Pvt. Ltd. and Vyosim TechLab. Passionate about backend development and full-stack web
        application engineering.
      </p>
      <p>
        Skilled in developing robust applications using Java, Spring Boot, Python, Django, Node.js, and frontend
        technologies like HTML, CSS, JavaScript, and Shadcn UI. Proficient in working with MySQL, PostgreSQL, MongoDB,
        and tools such as Git, Docker, Postman and more. I enjoy building practical, scalable software solutions and
        continuously expanding my technical skill set. Actively seeking full-time opportunities in backend or full-stack
        development roles.
      </p>
      <p>
        If you are interested in contacting me in regards to a position with your company please email me at
        nvshingare67@gmail.com, or feel free to connect me on LinkedIn.
      </p>

      <div className="mt-6">
        <a
          href="https://drive.google.com/file/d/1s3us55MDrABGHtl2EHQPOaYv3o5o1ZKx/view?usp=sharing" // <-- Place your resume file in `public/resume/`
          download
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
