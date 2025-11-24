import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const wareHouses = useLoaderData();
    const mapRaf= useRef(null)
    //console.log(wareHouses)


    const handleSearch = e => {
        e.preventDefault();
        const location= e.target.location.value;
        const district = wareHouses.find(h => h.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const coord = [district.latitude, district.longitude];
            console.log(district,coord)
            mapRaf.current.flyTo(coord,14)
        }
    }

    return (
        <div>
            <h2 className="text-5xl">We are available in 64 districts</h2>
            <div>
                {/* search */}
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" name='location' />
                    </label>
                </form>
            </div>
            <div className='border h-[600px]'>
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className='h-[600px]'
                    ref={mapRaf}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        wareHouses.map((house, index) => (
                            <Marker key={index} position={[house.latitude, house.longitude]}>
                                <Popup>
                                    <strong>{house.district}</strong> <br /> Warehouse:{house.covered_area.join()}.
                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>

    );
};

export default Coverage;