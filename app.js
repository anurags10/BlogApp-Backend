import express  from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();

// app.use('/',(req,res,next) => {
//     res.send("Hello world");
// });
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog',blogRouter);
mongoose.connect(
    'mongodb+srv://admin:password@cluster0.kq5eocf.mongodb.net/Blog?retryWrites=true&w=majority'
    ).then(()=>app.listen(5000)).then(()=> console.log('Database is connected')).catch((err)=>console.log(err));



