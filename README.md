An portfolio web application developed using Spring Boot for backend and Next JS with tailwind CSS for frontend with PostgreSQL as database.

To run the app follow the steps:

1. Install Docker Desktop
2. Open cmd in My_Portfolio directory
3. Run docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build(to build before running it for first time)
   docker-compose -f docker-compose.yml -f docker-compose.override.yml up(for running later)
4. Open http://localhost:3000/ to view the homepage
Note: Takes 3-4 mins to run app. Will show error at beginning. Stay patient. No need to install PostgreSQL, it will be fetched from docker
