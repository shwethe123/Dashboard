import React, { useEffect, useState } from 'react';

export default function Condition2() {
  const [gOutData, setGOutData] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("condition2"); // Change this as needed

  useEffect(() => {
    const fetchLocoData = async () => {
      try {
        // Fetch data from both endpoints simultaneously
        // api မှ လာတဲ့ data တွေကို ပြန်သိမ်းထားတယ်
        const [
          accounting,
          audit,
          car_order,
          chack,
          response_g,
          order_in_two,
          outjuty,
          response_sale_in,
          sale_out,
          cashier_two,
          Car_go2,
          Car_order2,
          G_out2,
          Order_in2,
          Sale_in2,
          Sale_out2,
          Accounting3,
          Car_go3,
          Car_order3,
          G_out3,
          Order_in3,
          Sale_in3,
          Sale_out3,
          ] = await Promise.all([
            // api တွေ
            fetch('https://dashboard-yfuz.onrender.com/api/accounting'),
            fetch('https://dashboard-yfuz.onrender.com/api/audit'),
            fetch('https://dashboard-yfuz.onrender.com/api/car_order'),
            fetch('https://dashboard-yfuz.onrender.com/api/chack'),
            fetch('https://dashboard-yfuz.onrender.com/api/dashboard'),
            fetch('https://dashboard-yfuz.onrender.com/api/order_in_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/outjuty'),
            fetch('https://dashboard-yfuz.onrender.com/api/sales_in'),
            fetch('https://dashboard-yfuz.onrender.com/api/sale_out'),
            fetch('https://dashboard-yfuz.onrender.com/api/cashier_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/cargo_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/carOrder_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/gout_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/orderIn_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/salesIn_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/saleOut_two'),
            fetch('https://dashboard-yfuz.onrender.com/api/cashier_three'),
            fetch('https://dashboard-yfuz.onrender.com/api/cargo_three'),
            fetch('https://dashboard-yfuz.onrender.com/api/carOrder_three'),
            fetch('https://dashboard-yfuz.onrender.com/api/gout_three'),
            fetch('https://dashboard-yfuz.onrender.com/api/orderIn_three'),
            fetch('https://dashboard-yfuz.onrender.com/api/salesIn_three'),
            fetch('https://dashboard-yfuz.onrender.com/api/saleOut_three')
        ]);

        // Check if the responses are successful
        // api ကနေ လာတာ သိမ်းထားတာတွေ responses ဖြစ်လာ ပြန်စစ်ထာ
        if (!accounting.ok || !audit.ok ||
          !car_order.ok || !chack.ok ||
          !response_g.ok || !outjuty.ok ||
          !order_in_two.ok || 
          !response_sale_in.ok || !sale_out.ok

          ) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        //api ကနေ လာတာ သိမ်းထားတာတွေ json အဖြစ်ပြန်ပြောင်းတာ
        const data_accouting = await accounting.json();
        const data_audit = await audit.json();
        const data_car_order = await car_order.json();
        const data_chack = await chack.json();
        const data_g = await response_g.json();
        const data_order_in_two = await order_in_two.json();
        const data_outjuty = await outjuty.json();
        const data_sale_in = await response_sale_in.json();
        const data_sale_out = await sale_out.json();
        const data_cashier_two = await cashier_two.json();
        const data_car_go2 = await Car_go2.json();
        const data_Car_order2 = await Car_order2.json();
        const data_G_out2 = await G_out2.json();
        const data_Order_in2 = await Order_in2.json();
        const data_sale_in2 = await Sale_in2.json();
        const data_Sale_out2 = await Sale_out2.json();
        const data_Accounting3 = await Accounting3.json();
        const data_Car_go3 = await Car_go3.json();
        const data_Car_order3 = await Car_order3.json();
        const data_G_out3 = await G_out3.json();
        const data_Order_in3 = await Order_in3.json();
        const data_Sale_in3 = await Sale_in3.json();
        const data_Sale_out3 = await Sale_out3.json();

        // Combine both datasets (adjust this depending on how you need to merge them)
        // api ကနေ လာတဲ့ tada တွေ ကို ဖြေချပြီး combinedData မှာ ပြန်သိမ်းထားမယ်

        const combinedData = [
          ...data_accouting, ...data_audit, ...data_car_order, ...data_chack,
          ...data_g, ...data_order_in_two, ...data_outjuty,
          ...data_sale_in, ...data_sale_out, ...data_cashier_two, ...data_car_go2,
          ...data_Car_order2, ...data_G_out2, ...data_Order_in2, ...data_sale_in2,
          ...data_Sale_out2, ...data_Accounting3, ...data_Car_go3, ...data_Car_order3,
          ...data_G_out3, ...data_Order_in3, ...data_Sale_in3, ...data_Sale_out3,
        ];

        // Log the combined data to ensure it's correct

        // console.log(combinedData);

        // Filter the combined data based on the selected condition
        // combinedData မှာ သိမ်းထားတဲ့ Data တွေကို ပြန်ပြီး ကိုလိုချင်တဲ့ အရာနဲ့ စစ်ထုတ်မယ်
        const filteredData = combinedData.filter((item) => item.condition === selectedCondition);

        // Log the filtered data for debugging
        // console.log(filteredData);

        // Set the filtered data to gOutData
        // ကိုယ်လိုချင်တဲ့ data တွေ စစ်ထုတ်ပြီးသားတွေ ကို ထုတ်ပြဖို့ setGoutData မှာထည့်ထားမယ် useState သုံး
        setGOutData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLocoData();
  }, [selectedCondition]); // Re-run effect if selectedCondition changes

  return (
    <div>
        <div className="flex flex-col bg-sky-200 mt-2 p-2 rounded-md">
        <p className='mb-2 box-decoration-clone text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-xs font-bold'>ခွင့် တစ်ပိုင်း</p>
        {gOutData.length > 0 ? (
            gOutData.map((item) => (
              <div className='flex justify-between items-center' key={item._id}>
              <div className="flex items-center">
                <p className="bg-gradient-to-r from-fuchsia-600 to-blue-600 w-2 h-2 rounded-sm"></p>
                <p className=" p-1 rounded-md text-gray-600 cursor-pointer text-xs">{item.Name}</p>
              </div>
              <div >
                <p className='text-xs text-gray-600'>{item.selection}</p>
              </div>
            </div>
            ))
        ) : (
            <p className='text-red-500 text-xs'>! No Data</p>
        )}
        </div>
    </div>
  );
}
