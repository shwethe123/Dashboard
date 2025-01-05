import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Dashboard from './Page/Dashboard.jsx';
import User from './Page/User.jsx';
import Settings from './Page/Settings.jsx';
import Reports from './Page/Reports.jsx';
import Logout from './Page/Logout.jsx';
import LocaOne from './Component/LocaOne.jsx';
import UserCreate from './Page/CreateFile/UserCreate.jsx';
import TableCreate from './Page/CreateFile/TableCreate.jsx';
import WifiCreate from './Page/NetWorkFile/CreateFile/WifiCreate.jsx';
import GoutTable from './Page/TableFile/GoutTable.jsx';
import GoutTable2 from './Page/TableFile/Gout2Table.jsx';
import GoutTable3 from './Page/TableFile/Gout3Table.jsx';
import G_score_edit from './Page/EditFile/G_score_edit.jsx';
import G_score_edit2 from './Page/EditFile/G_score2_edit.jsx';
import G_score3_edit from './Page/EditFile/G_score3_edit.jsx';
import Worker_edit from './Page/EditFile/Worker_edit.jsx';
import G_edit from './Page/EditFile/Loca1_edit/G_edit.jsx';
import Sale_out_edit from './Page/EditFile/Loca1_edit/Sale_out_edit.jsx';
import Account_edit from './Page/EditFile/Loca1_edit/Account_edit.jsx';
import CarOrder_edit1 from './Page/EditFile/Loca1_edit/Car_order_edit.jsx';
import Audit_edit1 from './Page/EditFile/Loca1_edit/Audit_edit.jsx';
import Chack_edit from './Page/EditFile/Loca1_edit/Chack_edit.jsx';
import OrderIn1_edit from './Page/EditFile/Loca1_edit/Order_in1_edit.jsx';
import OrderIn2_edit from './Page/EditFile/Loca1_edit/Order_in2_edit.jsx'
import Out_juty_edit from './Page/EditFile/Loca1_edit/Out_juty.jsx';
import Cashier2_edit from './Page/EditFile/Loca2_edit/Accounting_edit.jsx';
import CarGo2_edit from './Page/EditFile/Loca2_edit/Car_go2_edit.jsx';
import Car_order2_edit from './Page/EditFile/Loca2_edit/Car_order2_edit.jsx';
import G_out2_edit from './Page/EditFile/Loca2_edit/G_out2_edit.jsx';
import Order_in2_edit from './Page/EditFile/Loca2_edit/Order_in2_edit.jsx';
import Sale_in2_edit from './Page/EditFile/Loca2_edit/Sale_in2_edit.jsx';
import Sale_out2_edit from './Page/EditFile/Loca2_edit/Sale_out2_edit.jsx';
import Accounting3_edit from './Page/EditFile/Loca3_edit/Accounting3_edit.jsx';
import Car_order3_edit from './Page/EditFile/Loca3_edit/Car_order3_edit.jsx';
import G_out3_edit from './Page/EditFile/Loca3_edit/G_out3_edit.jsx';
import Sale_in3_edit from './Page/EditFile/Loca3_edit/Sale_in3_edit.jsx';
import Sale_out3_edit from './Page/EditFile/Loca3_edit/Sale_out3_edit.jsx';
import GoutAllTable from './Page/TableFile/GoutAllTable/GoutAllTable.jsx';
import GoutAllCreate from './Page/CreateFile/GoutAllCreate.jsx';
import Sale_in_edit from './Page/EditFile/Loca1_edit/Sale_in_edit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/User", element: <User /> },
      { path: "/Settings", element: <Settings /> },
      { path: "/Reports", element: <Reports /> },
      { path: "/Logout", element: <Logout /> },
      { path: "/locaone", element: <LocaOne /> },
      { path: "/UserCreate", element: <UserCreate /> },
      { path: "/WifiCreate/Edit/:id", element: <WifiCreate /> },
      { path: "/TableCreate/edit/:id", element: <TableCreate /> },
      { path: "/GoutTable", element: <GoutTable /> },
      { path: "/GoutTable2", element: <GoutTable2 /> },
      { path: "/Gouttable3", element: <GoutTable3 /> },
      { path: "/GoutScore/Edit/:id", element: <G_score_edit /> },
      { path: "/GoutScore2/Edit/:id", element: <G_score_edit2 /> },
      { path: "/GoutScore3/Edit/:id", element: <G_score3_edit/>},
      { path: "/Worker/Edit/:id", element: <Worker_edit/>},
      { path: "/G_edit/Edit/:id", element: <G_edit/>},
      { path: "/G_edit/Edit", element: <G_edit/>},
      { path: "/Sale_in_edit/Edit/:id", element: <Sale_in_edit/>},
      { path: "/Sale_in_edit/Edit", element: <Sale_in_edit/>},
      { path: "/Sale_out/Edit/:id", element: <Sale_out_edit/>},
      { path: "/Sale_out/Edit", element: <Sale_out_edit/>},
      { path: "/Account/Edit/:id", element: <Account_edit/>},
      { path: "/Account/Edit", element: <Account_edit/>},
      { path: "/CarOrder1/Edit/:id", element: <CarOrder_edit1/>},
      { path: "/CarOrder1/Edit", element: <CarOrder_edit1/>},
      { path: "/Audit/Edit/:id", element: <Audit_edit1/>},
      { path: "/Audit/Edit", element: <Audit_edit1/>},
      { path: "/Chack/Edit/:id", element: <Chack_edit/>},
      { path: "/Chack/Edit", element: <Chack_edit/>},
      { path: "/OrderIn1/Edit/:id", element: <OrderIn1_edit/>},
      { path: "/OrderIn1/Edit", element: <OrderIn1_edit/>},
      { path: "/OrderIn2/Edit/:id", element: <OrderIn2_edit/>},
      { path: "/OrderIn2/Edit", element: <OrderIn2_edit/>},
      { path: "/Out_juty/Edit/:id", element: <Out_juty_edit/>},
      { path: "/Out_juty/Edit", element: <Out_juty_edit/>},
      { path: "/Cashier2/Edit/:id", element: <Cashier2_edit/>},
      { path: "/Cashier2/Edit", element: <Cashier2_edit/>},
      { path: "/CarGo2/Edit/:id", element: <CarGo2_edit/>},
      { path: "/CarGo2/Edit", element: <CarGo2_edit/>},
      { path: "/CarOrdr2/Edit/:id", element: <Car_order2_edit/>},
      { path: "/CarOrdr2/Edit", element: <Car_order2_edit/>},
      { path: "/Gout2/Edit/:id", element: <G_out2_edit/>},
      { path: "/Gout2/Edit", element: <G_out2_edit/>},
      { path: "/OrderIn_loc2/Edit/:id", element: <Order_in2_edit/>},
      { path: "/OrderIn_loc2/Edit", element: <Order_in2_edit/>},
      { path: "/SaleIn2/Edit/:id", element: <Sale_in2_edit/>},
      { path: "/SaleIn2/Edit", element: <Sale_in2_edit/>},
      { path: "/SaleOut2/Edit/:id", element: <Sale_out2_edit/>},
      { path: "/SaleOut2/Edit", element: <Sale_out2_edit/>},
      { path: "/Cashier3/Edit/:id", element: <Accounting3_edit/>},
      { path: "/Cashier3/Edit", element: <Accounting3_edit/>},
      { path: "/CarOrder3/Edit/:id", element: <Car_order3_edit/>},
      { path: "/CarOrder3/Edit", element: <Car_order3_edit/>},
      { path: "/G_out3/Edit/:id", element: <G_out3_edit/>},
      { path: "/G_out3/Edit", element: <G_out3_edit/>},
      { path: "/Sale_in3/Edit/:id", element: <Sale_in3_edit/>},
      { path: "/Sale_in3/Edit", element: <Sale_in3_edit/>},
      { path: "/Sale_out3/Edit/:id", element: <Sale_out3_edit/>},
      { path: "/Sale_out3/Edit", element: <Sale_out3_edit/>},
      { path: "/GoutAllTable", element: <GoutAllTable/> },
      { path: "/GoutAllCreate/Edit/:id", element: <GoutAllCreate/> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);