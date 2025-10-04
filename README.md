# Backend Developer Intern Assignment

A complete REST API with authentication, role-based access control, and frontend UI built with Node.js, Express, MongoDB, and Next.js.

##  Features

### Backend
-  User registration & login with JWT authentication
-  Password hashing with bcrypt
-  Role-based access (user vs admin)
-  Task CRUD operations
-  API versioning (v1)
-  Input validation & error handling
-  Swagger API documentation
-  MongoDB integration

### Frontend
-  User registration & login
-  Protected dashboard
-  Task creation, viewing
-  Responsive design
-  JWT token handling

##  Tech Stack

**Backend:** Node.js, Express, TypeScript, MongoDB, JWT, bcrypt, Swagger  
**Frontend:** Next.js, TypeScript, Tailwind CSS, Axios

##  Project Structure

backend-intern-assignment/
├── backend/ # Node.js/Express API
│ ├── src/
│ │ ├── models/ # MongoDB models
│ │ ├── routes/ # API routes
│ │ ├── middleware/ # Auth & validation
│ │ └── docs/ # Swagger setup
│ └── package.json
├── frontend/ # Next.js application
│ ├── src/
│ │ ├── app/ # Pages & layout
│ │ ├── context/ # Auth context
│ │ └── lib/ # API client
│ └── package.json
└── README.md


##  Quick Start

### Backend Setup
```bash
cd backend
npm install
npm run dev

API will run on http://localhost:5000

### Frontend Setup
```bash
cd frontend  
npm install
npm run dev


Visit http://localhost:5000/api-docs for Swagger UI documentation





### **B. Create Scalability Notes**

Create `SCALABILITY.md` in your main project folder:
```markdown
# Scalability Considerations

## 🚀 Current Architecture
- **Monolithic REST API** with modular structure
- **JWT-based authentication** with role-based access
- **MongoDB Atlas** for cloud database
- **Environment-based configuration**

## 📈 Scalability Improvements

### 1. Database Optimization
- Add database indexing for frequently queried fields
- Implement database connection pooling
- Use MongoDB sharding for large datasets

### 2. API Improvements  
- Implement rate limiting
- Add request caching with Redis
- Use compression middleware
- Implement API gateway for microservices

### 3. Deployment & Infrastructure
- Containerize with Docker
- Use load balancers (NGINX)
- Implement horizontal scaling
- Add monitoring & logging (ELK stack)

### 4. Security Enhancements
- Implement refresh token rotation
- Add request rate limiting
- Use HTTPS in production
- Regular security audits

### 5. Performance Optimizations
- Implement response caching
- Add database query optimization
- Use CDN for static assets
- Background job processing