# Bowls Club Member Management System

A full-stack application for managing members of a bowls club, built with React, TypeScript, Node.js, Express, and MongoDB.

## Features

- Add new members with auto-generated membership numbers
- View all members in a sortable table
- Search members by name, email, or membership number
- Filter members by status (active/inactive)
- Edit member details
- Delete members
- Responsive design

## Tech Stack

- Frontend: React, TypeScript, CSS
- Backend: Node.js, Express, TypeScript
- Database: MongoDB Atlas
- API: RESTful

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd bowlsclub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Project Structure

```
bowlsclub/
├── src/
│   ├── components/
│   │   ├── AddMemberForm.tsx
│   │   ├── EditMemberForm.tsx
│   │   └── Members.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   └── App.css
└── package.json

backend/
├── src/
│   ├── models/
│   │   └── member.ts
│   ├── routes/
│   │   └── members.ts
│   └── server.ts
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. # bowlsclub
