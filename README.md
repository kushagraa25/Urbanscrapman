# Urban Scrapman

A full-stack web app for selling household scrap online. Users check current scrap rates, log in with their phone number using an OTP, and book a doorstep pickup. Admins manage pickups and scrap rates from an admin panel.

## Features

**Users**
- See scrap rates (name, price, unit, image)
- Passwordless login and signup with a phone OTP
- Book a pickup: weight range, date, time slot, address, pincode, landmark
- Info pages: FAQ, Terms & Conditions, Privacy Policy, plus WhatsApp and app download links

**Admins**
- Dashboard stats: total, completed, upcoming and today's pickups
- List all pickups with a status filter and pagination, view details, mark as completed
- Add and update scrap rates

## Tech stack

| Part | Technologies |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, React Router, Axios, js-cookie, React Toastify |
| Backend | Node.js, Express, Mongoose, JSON Web Tokens, dotenv, CORS |
| Database | MongoDB |
| SMS (OTP) | Fast2SMS |

## Project structure

```
Urbanscrapman/
├── Backend/
│   ├── index.js          # Express app entry point
│   ├── Router/           # API routes
│   ├── Controller/       # Request handlers (users, OTP, pickups, scrap rates)
│   ├── Modal/            # Mongoose models: user, otp, shedule, scrab
│   ├── Middleware/       # Admin check (JWT + role)
│   ├── Authtoken/        # JWT create / verify
│   └── Database/         # MongoDB connection
└── Web Frontend/
    └── src/
        ├── App.jsx       # Routes
        ├── Auth/         # Login / signup
        ├── Admin/        # Admin pages
        ├── User/         # Public pages and components
        ├── Hooks/        # useIsLoggedIn, useIsAdmin
        └── Url.js        # Backend base URL
```

## Getting started

**Requirements:** Node.js 18+ and MongoDB (local or MongoDB Atlas).

### 1. Backend

```bash
cd Backend
npm install
cp .env.example .env      # then edit the values
npx nodemon index.js      # or: node index.js
```

The API runs at `http://localhost:8000`. You should see `Server Started 8000` and `Database Connected Sucessfully`.

### 2. Frontend

```bash
cd "Web Frontend"
npm install
npm run dev
```

Open `http://localhost:5173`. The backend address is set in `Web Frontend/src/Url.js`.

### Logging in during development

If `OTP_API` is empty in `Backend/.env`, no SMS is sent and the OTP is always `123456`.

### Creating an admin

New accounts get the `USER` role. To make an admin, set the user's `role` to `ADMIN` in the `users` collection (for example, with MongoDB Compass), then log out and log in again. The admin panel is under the user menu → **Dashboard**.

## API overview

Base path: `/api/v1/urbanscrapman`

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/otp/getotp` | Public | Send an OTP, returns a `sessionId` |
| POST | `/user/login` | Public | Log in with phone, OTP and `sessionId` |
| POST | `/user/createaccount` | Public | Create an account (name, phone) |
| GET | `/scrab/getrates` | Public | List scrap rates |
| POST | `/scrab/addscrab` | Admin | Add a scrap rate |
| PATCH | `/scrab/updatescrab/:id` | Admin | Update a scrap rate |
| POST | `/shedule/sheduleapickup` | Public | Book a pickup |
| GET | `/shedule/getpersonalshedule/:id` | Public | A user's pickups |
| GET | `/shedule/getallshedule?page=&limit=&option=` | Admin | All pickups (filter + pagination) |
| PATCH | `/shedule/updatestatus/:id` | Admin | Mark a pickup as completed |
| GET | `/shedule/getstatics` | Admin | Pickup statistics |

Admin endpoints need the header `Authorization: Bearer <token>`.

## Scripts

| Folder | Command | What it does |
|---|---|---|
| Web Frontend | `npm run dev` | Start the dev server |
| Web Frontend | `npm run build` | Production build into `dist/` |
| Web Frontend | `npm run lint` | Run ESLint |
| Backend | `npx nodemon index.js` | Start the API with auto-restart |
