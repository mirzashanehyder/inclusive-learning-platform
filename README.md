📚 Classroom LMS – MERN Stack

  A full-stack Learning Management System (LMS) built using the MERN stack, designed with role-based access for students and teachers, secure authentication, and detailed quiz analytics.
  
  This project focuses on real-world LMS behavior, secure authentication, and clean system design.

🚀 Features Implemented:

🔐 Authentication & Authorization

  JWT-based authentication stored securely in HttpOnly cookies
  
  Persistent login across page refresh
  
  Role-based access control for students and teachers
  
  Protected routes on both frontend and backend

  

👩‍🏫 Teacher Features:

  Create and manage courses
  
  Add video-based learning content
  
  Create quizzes using dynamic forms
  
  View quizzes inside courses
  
  Course-wise quiz analytics
  
  Student-wise quiz performance analysis
  
  Question-level correct answer analysis
  
  View students enrolled in a course
  
  Track individual student quiz progress

  

👨‍🎓 Student Features:
  
  Register and log in securely
  
  Enroll in courses
  
  Watch course videos
  
  Attempt and reattempt quizzes
  
  Best-score retention logic for quizzes
  
  View personal quiz performance

  

📊 Analytics & Insights:

  Total attempts, average score, and best score per quiz
  
  Student-wise quiz attempts and performance
  
  Detailed breakdown of quiz questions and correct answers
  
  Visual student progress tracking for teachers
  

🛠 Tech Stack:

Frontend:

  React.js
  
  React Router
  
  React Hook Form
  
  Bootstrap
  
  Axios

Backend:

  Node.js
  
  Express.js
  
  MongoDB
  
  Mongoose
  
  JWT (HttpOnly Cookies)
  
  bcrypt

  

🔒 Security Highlights

  JWT stored in HttpOnly cookies (no localStorage tokens)
  
  Secure password hashing using bcrypt
  
  Role-based route protection
  
  CORS configured with credentials support



🧠 System Design Highlights:
  
  Clean separation of concerns between frontend and backend
  
  RESTful API architecture
  
  Optimized MongoDB queries for analytics
  
  Centralized authentication state using React Context
  
  Persistent authentication using /profile API

  

📂 Project Structure (Simplified)
client/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── context/
 │   ├── api/
 │   └── App.jsx

server/
 ├── APIs/
 ├── models/
 ├── middleware/
 ├── server.js
 └── .env

 

⚙️ Environment Variables

Create a .env file in the server directory:

    MONGO_URL=mongodb://localhost:27017/classroom
    JWT_SECRET=your_secret_key
    PORT=8000


▶️ Running the Project Locally

Backend
cd server
npm install
npm start

Frontend
cd client
npm install
npm run dev


Frontend runs on:
http://localhost:5173

Backend runs on:
http://localhost:8000



🧪 Authentication Flow:

  User logs in → JWT set in HttpOnly cookie
  
  Cookie sent automatically with every request
  
  On page refresh, frontend calls /user-api/profile
  
  Auth state restored without re-login

  

📌 Current Status:

✅ Core LMS functionality completed

✅ Secure authentication implemented

✅ Quiz analytics and progress tracking completed

🔄 UI and UX improvements ongoing

🔗 GitHub Repository

👉 [](https://github.com/mirzashanehyder/inclusive-learning-platform/)



📈 Future Enhancements:

Quiz publish / lock mechanism
  
  Timed quizzes
  
  Notifications system
  
  Course completion percentage
  
  UI/UX refinements


👤 Author

Shane Hyder Mirza
