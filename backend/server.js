const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const router = require('./Router/locaOne_router/Dashboard');
const salel_in_router = require('./Router/locaOne_router/Sales_in');
const salel_out_router = require('./Router/locaOne_router/Sales_out');
const car_order_router = require('./Router/locaOne_router/car_order');
const order_in_two_router = require('./Router/locaOne_router/Order_in_two');
const Accounting = require('./Router/locaOne_router/Accounting');
const Audit = require('./Router/locaOne_router/Audit')
const Out_juty_router = require('./Router/locaOne_router/Out_Juty');
const Chack_router = require('./Router/locaOne_router/Check');
// const Rechart_router = require('./Router/RechartsFile/Recharts');
const Wifi_router = require('./Router/NetWorkFile/Wifi');
const mongoose = require('mongoose');
const cors = require('cors');

const cashier_router = require('./Router/locaTwo_router/Cashier');
const car_go_router = require('./Router/locaTwo_router/Cargo');
const carOrder_router = require('./Router/locaTwo_router/CarOrder_two');
const G_Out_two_router = require('./Router/locaTwo_router/G_out')
const orderIn_two_router = require('./Router/locaTwo_router/OrderIn_two');
const salesIn_two_router = require('./Router/locaTwo_router/SalesIn_two');
const salesOut_two_router = require('./Router/locaTwo_router/SalesOut_two');

const Car_go_router = require('./Router/locaThree_router/Cargo_three');
const CarOrder_three_router = require('./Router/locaThree_router/CarOrder_three');
const Cashier_three_router = require('./Router/locaThree_router/Cashier_three');
const G_out_three_router = require('./Router/locaThree_router/G_out');
const OrderIn_three_router = require('./Router/locaThree_router/OrderIn_three');
const SalesIn_three_router = require('./Router/locaThree_router/SalesIn_three');
const SalesOut_three_router = require('./Router/locaThree_router/SalesOut_three');

const Loca1Score_router = require('./Router/GoutScore_router/Loca1_score');
const Loca2Score_router = require('./Router/GoutScore_router/Loca2_score');
const Loca3Score_router = require('./Router/GoutScore_router/Loca3_score')

const WorkerHard_router = require('./Router/WorkHard_router/WorkHard');

const UserStore_router = require('./Router/User_storeFile/User_store');
const GoutAll_score = require('./Router/GoutScore_router/GoutAll_score');
const Order_in_one = require('./Router/locaOne_router/Order_in_one')
const usersRoutes = require('./Router/User_storeFile/User_store');

const app = express();

const mongooseUrl = "mongodb+srv://lovenaing386:lovenaing386@my-dashboard.fquqg.mongodb.net/?retryWrites=true&w=majority&appName=my-dashboard"

mongoose.connect(mongooseUrl).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server is runing on ' + process.env.PORT);
    })
    console.log('Mongoose Database is connected')
})

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {
    return res.json({ msg : 'Hello World'});
});

app.use(router);
app.use(salel_in_router);
app.use(salel_out_router);
app.use(car_order_router);
app.use(order_in_two_router);
app.use(Accounting);
app.use(Audit);
app.use(Out_juty_router);
app.use(Chack_router);
// app.use(Rechart_router);
app.use(Wifi_router);

// loca two 

app.use(cashier_router);
app.use(car_go_router);
app.use(carOrder_router);
app.use(G_Out_two_router);
app.use(orderIn_two_router);
app.use(salesIn_two_router);
app.use(salesOut_two_router);

//loca three
app.use(Car_go_router);
app.use(CarOrder_three_router);
app.use(Cashier_three_router);
app.use(G_out_three_router);
app.use(OrderIn_three_router);
app.use(SalesIn_three_router);
app.use(SalesOut_three_router);

app.use(Loca1Score_router);
app.use(Loca2Score_router);
app.use(Loca3Score_router);

app.use(WorkerHard_router);

// user_store
app.use(UserStore_router);
app.use(GoutAll_score);
app.use(Order_in_one);
app.use( usersRoutes);

app.use('/st-cookies', (req, res) => {
    res.cookie('name', 'lovenaing');
    res.cookie('st_cookie', 'This is a cookie', { httpOnly: true });
    return res.send('Cookie is set');
});