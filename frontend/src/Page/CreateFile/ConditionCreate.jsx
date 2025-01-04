import React, { useState } from 'react';

export default function TableCreate() {
  return (
      <div className='flex justify-center items-center'>
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <select className='w-full'>
                  <option value="someOption">Normal</option>
                  <option value="otherOption">အလုပ်နောက်ကျ</option>
                  <option value="otherOption">ခွင့် တစ်ပိုင်း</option>
                  <option value="otherOption">ခွင့်ရက်ရှည်</option>
                  <option value="otherOption">ခွင့်မဲ့</option>
                  <option value="otherOption">ဖိုင်း အပြစ်ပေး</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
              >
              </button>
            </form>
        </div>
      </div>
  );
}