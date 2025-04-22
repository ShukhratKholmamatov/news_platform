import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';  // Import your CSS file

function App() {
    const [route, setRoute] = useState([]);
    const [distance, setDistance] = useState(5);

    const generateRoute = async () => {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ distance }),
        });
        const data = await res.json();
        setRoute(data.coordinates.map(c => [c.lat, c.lng]));
    };

    return (
        <div className="app-container">
            <h2>RunMyRoute 🏃‍♂️</h2>

            <div>
                <select
                    className="select-distance"
                    onChange={e => setDistance(Number(e.target.value))}
                >
                    <option value={3}>3 km</option>
                    <option value={5}>5 km</option>
                    <option value={10}>10 km</option>
                </select>
                <button onClick={generateRoute}>Generate Route</button>
            </div>

            <div className="map-container">
                <MapContainer center={[41.31, 69.28]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {route.length > 0 && (
                        <>
                            <Polyline positions={route} color="blue" />
                            <Marker position={[41.32, 69.29]} />
                        </>
                    )}
                </MapContainer>
            </div>
        </div>
    );
}

export default App;

