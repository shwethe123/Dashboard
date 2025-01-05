import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

export default function UserCreate() {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  const [Id, setId ] = useState('');
  const [Ag, setAg ] = useState('');
  const [ Name, setName ] = useState('');
  const [ Phone, setPhone ] = useState('');
  const [ loca_work, setLoca_work ] = useState('');
  const [ condition, setCondition ] = useState('');
  const [ error, setError] = useState(null);


  useEffect(() => {
    if (id) {
      const fetchSale_in = async () => {
        try {
          const res = await axios.get('https://dashboard-yfuz.onrender.com/api/sales_in/'+id);
          if (res.status === 200) {
            const data = res.data;
            console.log(data)
            setId(data.Id);
            setAg(data.Ag);
            setName(data.Name);
            setPhone(data.Phone);
            setLoca_work(data.Phone);
            setCondition(data.condition);
          }
        } catch (error) {
          console.error('Error fetching sale in data:', error);
        }
      };
      fetchSale_in();
    }
  }, [id]);

  const submit = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      if (!Id || !Ag || !Name || !Phone || !loca_work || !condition) {
        setError('ကျေးဇူးပြုပြီးအချက်အလက်ဖြည့်ပါ။')
      }
      let addPost = {
        Id,
        Ag,
        Name,
        Phone,
        loca_work,
        condition
      };
      let res;
      if (id) {
        res = await axios.patch('https://dashboard-yfuz.onrender.com/api/sales_in/' + id, addPost);
      } else {
        res = await axios.post('https://dashboard-yfuz.onrender.com/api/sales_in', addPost);
      }
      if (res.status == 200) {
        navigate('/LocaOne');
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-4 m-5" onSubmit={submit}>
        <h1>User {id ? 'Edit' : 'Create'} Form</h1>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label htmlFor="id-name" className="block text-sm font-medium text-gray-700">ID Name</label>
          <input
            value={Id}
            onChange={e => setId(e.target.value)}
            type="number"
            id="id-name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>


        <div>
          <label htmlFor="ag" className=" block text-sm font-medium text-gray-700">AG</label>
          <input
            value={Ag}
            onChange={e => setAg(e.target.value)}
            type="text"
            id="ag"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>


        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            value={Name}
            onChange={e => setName(e.target.value)}
            type="text"
            id="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>


        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            value={Phone}
            onChange={e => setPhone(e.target.value)}
            type="number"
            id="phone"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">အလုပ်ဌာနာ</label>
          <select
            value={loca_work}
            onChange={e => setLoca_work(e.target.value)}
            id="status"
            name="status"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          >
            <option value="us">Normal</option>
            <option value="Gထွက်">Gထွက်</option>
            <option value="လက်လီ">လက်လီ</option>
            <option value="လက်ကား">လက်ကား</option>
            <option value="ကားအောင်">ကားအောင်</option>
            <option value="အဝင်ပိုင်း">အဝင်ပိုင်း</option>
            <option value="ပစ္စည်းမှာ">ပစ္စည်းမှာ</option>
            <option value="စာရင်းကိုင်">စာရင်းကိုင်</option>
            <option value="စက်ကိုင်">စက်ကိုင်</option>
            <option value="အပြင်သွား">အပြင်သွား</option>
            <option value="စီစစ်ရေး">စီစစ်ရေး</option>
          </select>
        </div>


        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={condition}
            onChange={e => setCondition(e.target.value)}
            id="status"
            name="status"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          >
            <option value="us">Normal</option>
            <option value="condition1">အလုပ်နောက်ကျ</option>
            <option value="condition2">ခွင့် တစ်ပိုင်း</option>
            <option value="condition3">ခွင့် တစ်ရက်</option>
            <option value="condition4">ခွင့်ရက်ရှည်</option>
            <option value="condition5">ခွင့်မဲ့</option>
            <option value="condition6">ဖိုင်း အပြစ်ပေး</option>
            <option value="condition7">အလုပ်ထွက်မည့်သူ</option>
            <option value="condition8">အလုပ်ထွက်သူ</option>
            <option value="condition9">ကြိုတင်ခွင့်တိုင်သူ</option>
          </select>
        </div>


        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {id ? 'Update' : 'Create'} User
          </button>
        </div>
      </form>
    </div>
  )
}
