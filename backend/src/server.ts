import express from "express";
import mongoose, { mongo, Mongoose } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import { log, timeStamp } from "console";
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';
import { setupSwagger } from "./docs/swagger";
import { errorHandler, notFound } from "./middleware/errorHanler";
import v1Routes from './routes/v1';
// import { version } from "os";
import { requestLogger } from "./middleware/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Middleware 
app.use(cors());
app.use(express.json());
app.use(requestLogger);


// MongoDB connection with atlas
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log('connnected to mongoDB Atlas');
        
    } catch (error) {
        console.error('mongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Basic route
app.get('/api/v1/health', (req, res) => {
    res.json({
        message: 'Backend API is running!',
        timeStamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

//swegger setup
setupSwagger(app);


//error handlers
app.use(notFound);
app.use(errorHandler);



//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // console.log(`MongoDB Atlas: Connected`);
    
    
});

