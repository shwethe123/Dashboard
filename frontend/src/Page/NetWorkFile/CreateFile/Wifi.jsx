import React, { useState } from 'react';

export default function WifiSaleIncreCaculate() {
    const [wifiData, setWifiData] = useState({
        name: '',
        update_date: new Date()
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/wifi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(wifiData)
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Wi-Fi data saved:', data);
            } else {
                console.error('Error:', data);
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'update_date') {
            setWifiData((prevData) => ({
                ...prevData,
                [name]: new Date(value)
            }));
        } else {
            setWifiData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    return (
        <div>
            <h1>Wi-Fi Sale Increment Calculation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Wi-Fi Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={wifiData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="update_date">Update Date</label>
                    <input
                        type="datetime-local"
                        id="update_date"
                        name="update_date"
                        value={wifiData.update_date.toISOString().slice(0, 16)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
