export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Left Side - Description */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
        <p>
          Recent MCA graduate from Dr. D.Y. Patil Institute of Management and Research, Pune, with hands-on internship
          experience at PRGX India Pvt. Ltd. and Vyosim TechLab. Passionate about backend development and full-stack web
          application engineering.
          <br /><br />
          Skilled in developing robust applications using Java, Spring Boot, Python, Django, Node.js, and frontend
          technologies like HTML, CSS, JavaScript, and Shadcn UI. Proficient in working with MySQL, PostgreSQL,
          MongoDB, and tools such as Git, Docker, Postman and more.
          <br /><br />
          I enjoy building practical, scalable software solutions and continuously expanding my technical skill set.
          Actively seeking full-time opportunities in backend or full-stack development roles.
          <br /><br />
          If you are interested in contacting me in regards to a position with your company, please email me at
          <a href="mailto:nvshingare67@gmail.com" className="text-blue-600 dark:text-blue-400 ml-1">
            nvshingare67@gmail.com
          </a>
          , or feel free to connect with me on LinkedIn.
        </p>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <img
          src="/images/Ninad_Profile.jpg" // Place your image in `public/images/profile.jpg`
          alt="Ninad Shingare"
          className="rounded-full w-48 h-48 object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
