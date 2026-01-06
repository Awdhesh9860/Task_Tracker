Task_Tracker is a clean and powerful productivity app designed to help users track tasks, manage goals, and stay focused using a built-in focus timer. It is suitable for students, developers, professionals, and anyone who wants a distraction-free productivity system.

SEO Keywords (for Google ranking):
Task Tracker App, Productivity App, Daily Planner, MERN Task Manager, React Task Tracker, Task Management System, Focus Timer App, Pomodoro Timer App, Goal Tracking App, To-Do List App, Time Management Tool, Work Management App, Project Management App.

Features

Task Management

Create, edit, update, and delete tasks

Set deadlines, priorities, and categories

Mark tasks as completed

Simple and minimal interface

Goal Tracking

Add short-term and long-term goals

Track progress visually

Connect related tasks to goals

Stay motivated with progress indicators

Focus Timer

Pomodoro style focus timer

Custom focus and break durations

Helps in deep work and reducing distractions

Productivity Dashboard

Daily and weekly insights

Completed task history

Total focus time statistics

Goal progress charts

Tech Stack (MERN)

Frontend:

React.js

Tailwind CSS

Context API or Redux (optional)

Backend:

Node.js

Express.js

MongoDB

JWT Authentication

Folder Structure

FocusHub/
client/
components/
pages/
context/
hooks/
styles/

server/
controllers/
models/
routes/
middleware/
config/

package.json
README.md
.env

Installation Guide

Step 1: Clone the repository
git clone [https://github.com/your-username/Task_Tracker.git](https://github.com/Awdhesh9860/Task_Tracker.git)

cd Task_Tracker

Step 2: Setup Backend
cd server
npm install
npm run dev

Create .env file:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

Step 3: Setup Frontend
cd client
npm install
npm start

API Endpoints

User Authentication:
POST /api/auth/register
POST /api/auth/login

Tasks:
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

Goals:
GET /api/goals
POST /api/goals
PUT /api/goals/:id
DELETE /api/goals/:id

Why FocusHub?

Simple interface

Fast performance

Distraction-free

Great for students and professionals

Works offline

Future Enhancements

Google login

Team collaboration

Cloud sync

Mobile app version

AI-powered productivity suggestions

License
MIT License
