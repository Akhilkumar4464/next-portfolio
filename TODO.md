# Backend Deployment Steps

## 1. Set up MongoDB Atlas Database
- Go to https://www.mongodb.com/atlas and sign up/login.
- Create a new project and cluster (free tier M0).
- Create a database user and whitelist IP (0.0.0.0/0 for all).
- Get the connection string: mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
- Replace <password> and <dbname> (use 'portfolio' or similar).

## 2. Deploy to Render
- Go to https://render.com and sign up/login.
- Click "New" > "Web Service".
- Connect your GitHub account and select repo: Akhilkumar4464/next-portfolio
- Set Root Directory: backend
- Build Command: npm install
- Start Command: npm start
- Add Environment Variable: MONGODB_URI = your Atlas connection string
- Click Create Web Service.

## 3. Test the Deployment
- Once deployed, get the URL from Render dashboard.
- Test the /contact endpoint with POST request (e.g., using Postman or curl).
- Example curl: curl -X POST https://your-app.onrender.com/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Hello"}'

## Notes
- Ensure the backend code is pushed to GitHub.
- If issues, check Render logs.
