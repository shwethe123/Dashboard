import React, { useEffect, useState } from 'react';

export default function LocaAllTable() {
  const [locaIndexes, setLocaIndexes] = useState(Array(10).fill([]));
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocaIndexes = async () => {
      try {
        const responses = await Promise.all([
          fetch('http://localhost:8000/api/dashboard'),
          fetch('http://localhost:8000/api/sales_in'),
          fetch('http://localhost:8000/api/sale_out'),
          fetch('http://localhost:8000/api/car_order'),
          fetch('http://localhost:8000/api/dashboard'),
          fetch('http://localhost:8000/api/order_in_two'),
          fetch('http://localhost:8000/api/accounting'),
          fetch('http://localhost:8000/api/audit'),
          fetch('http://localhost:8000/api/outjuty'),
          fetch('http://localhost:8000/api/chack'),
        ]);

        if (!responses.every((res) => res.status === 200)) {
          throw new Error('One or more APIs did not respond correctly');
        }

        const data = await Promise.all(responses.map((res) => res.json()));
        setLocaIndexes(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLocaIndexes();
  }, []);

  const headers = [
    'Gထွက်',
    'လက်လီ',
    'လက်ကား',
    'corder',
    'အဝင်',
    'ပစ္စည်းမှာ',
    'စာရင်းကိုင်',
    'စက်ကိုင်',
    'စီစစ်ရေး',
    'အပြင်သွား',
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse text-center ">
      <thead className='bg-blue-400 hover:bg-green-400 transition-all duration-500 ease-in-out text-white'>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className=" py-2 text-xs font-bold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {locaIndexes.some((data) => data.length > 0) ? (
            <tr>
              {locaIndexes.map((data, index) => (
                <td
                  key={index}
                  className="cursor-pointer py-2"
                >
                  <div className="flex justify-center text-black">
                    <div className=" text-blue-600">
                      <p className="flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full">
                        {data.length - 1 + 1}
                      </p>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {error && (
        <div className="mt-4 text-red-600 text-sm text-center">
          Error: {error}
        </div>
      )}
    </div>
  );
}
