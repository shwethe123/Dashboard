import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from '../helpers/axios';

function Recharts() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("https://dashboard-yfuz.onrender.com/api/allScore");
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const openVisible = () => {
    setIsOpenModel(!isOpenModel);
  };

  const datas = [
    { name: "ထွန်းလင်းအောင်", value: 50 },
    { name: "ဇင်မျိုး", value: 40 },
    { name: "အာကာထက်", value: 60 },
    { name: "နေမျိုးဦး", value: 70 },
    { name: "နေရှိုင်း", value: 4},
    { name: "ထက်ပိုင်ကျော်", value: 6 },
    { name: "မီလျှံစိုး", value: 20 },
    { name: "နှင်းပွင့်ဖြူ", value: 9 },
    { name: "ယဉ်ယဉ်လှိုင်", value: 9 },
    { name: "လှလှဝင်း", value: 10 },
    { name: "မီလျှံစိုး", value: 9 },
    { name: "နှင်းပွင့်ဖြူ", value: 9 },
    { name: "ယဉ်ယဉ်လှိုင်", value: 9 },
    { name: "လှလှဝင်း", value: 9 },
    { name: "လွင်မင်းသန့်", value: 4 },
    { name: "ရဲမင်းအောင်", value: 30 },
    { name: "ထွန်းလင်းအောင်", value: 50 },
    { name: "ဇင်မျိုး", value: 40 },
    { name: "အာကာထက်", value: 6 },
    { name: "နေမျိုးဦး", value: 7},
    { name: "နေရှိုင်း", value: 40 },
    { name: "ထက်ပိုင်ကျော်", value: 6 },
    { name: "မီလျှံစိုး", value: 9},
    { name: "နှင်းပွင့်ဖြူ", value: 9},
    { name: "ယဉ်ယဉ်လှိုင်", value: 9 },
  ];
  console.log(data);

  return (
      <>
        <div className="flex">
          <div className="flex-1">
            <div className="p-2">
              <div className="bg-white/50 rounded-xl backdrop-blur-md">
                <div className="flex items-center justify-between pt-2 pl-4 pr-4">
                  <h5 className="font-semibold text-black pt-2 pl-4 mb-4">ဒါဏ်ကြေး</h5>
                  <div className="flex items-center space-x-4 pr-2">
                    <p onClick={openVisible} className="text-green-500 cursor-pointer hover:text-green-400 hover:underline">View</p>
                    <Link to="/GoutAllTable">
                        <p className="text-green-500 cursor-pointer hover:text-green-400 hover:underline">Edit</p>
                    </Link>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="ag" 
                      tick={{ fontSize: 11 }} 
                      tickFormatter={(score) => score}
                    />
                    <YAxis tick={{ fontSize: 10 }} /> 
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#fff", borderRadius: "5px", padding: "10px" }} 
                      labelStyle={{ fontWeight: "bold", color: "#333" }}
                      itemStyle={{ color: "#555" }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="#82ca9d" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        {isOpenModel && (
          //absolute top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-5 flex items-center justify-center ဉပမာ
          <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
            <div className="w-screen">
              <p className="text-center text-green-600 text-3xl cursor-pointer pb-4 hover:font-bold" onClick={() => setIsOpenModel(false)}>⨉</p>
                <div className=" bg-white pt-6 pr-2">
                  <ResponsiveContainer width="100%" height={260}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fontSize: 11 }} 
                        tickFormatter={(score) => score}
                      />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#fff", borderRadius: "5px", padding: "10px" }} 
                        labelStyle={{ fontWeight: "bold", color: "#333" }}
                        itemStyle={{ color: "#555" }} 
                      />
                      <Legend />
                      <Line type="monotone" dataKey="score" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
            </div>
          </div>
        )}
      </>
  );
}

export default Recharts;
