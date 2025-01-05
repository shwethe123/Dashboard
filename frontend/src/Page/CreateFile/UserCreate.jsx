import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserCreate() {
  const navigate = useNavigate();

  const [Id, setId ] = useState('');
  const [Ag, setAg ] = useState('');
  const [ Name, setName ] = useState('');
  const [ Phone, setPhone ] = useState('');
  const [ Selection, setSelection ] = useState('');

  const createPost = async (e) => {
    try {
      e.preventDefault();
      let addPost = {
        Id,
        Ag,
        Name,
        Phone,
        Selection
      };
      let response = await axios.post('https://dashboard-yfuz.onrender.com/api/sales_in', addPost);
      if (response.status == 200) {
        navigate('/LocaOne');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-4" onSubmit={createPost}>
        <h1>User Create Form</h1>
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
          <label htmlFor="ag" className="block text-sm font-medium text-gray-700">AG</label>
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
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={Selection}
            onChange={e => setSelection(e.target.value)}
            id="status"
            name="status"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          >
            <option value="us">US</option>
            <option value="ca">CA</option>
            <option value="eu">EU</option>
          </select>
        </div>


        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}
