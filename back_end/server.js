import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/useRoute.js';
import productRouter from './routes/productRoute.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/reservations', reservationRouter)

app.get('/', (req, res)=>{
    res.send("API Working ")
})

// Hàm khởi động server an toàn
const startServer = async () => {
    try {
        // Chờ kết nối database và cloudinary thành công
        await connectDB();
        connectCloudinary(); // Giả sử hàm này không cần await, nếu cần hãy thêm await

        // Chỉ sau khi kết nối thành công, mới khởi động server
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server started successfully on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1); // Dừng ứng dụng nếu có lỗi nghiêm trọng
    }
};

// Gọi hàm để bắt đầu
startServer();