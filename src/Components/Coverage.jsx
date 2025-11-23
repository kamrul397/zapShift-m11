import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";

const Coverage = () => {
  const servicesCenter = useLoaderData();
  const mapRef = useRef(null);
  //   console.log(servicesCenter);
  const position = [23.685, 90.3563]; // Center of Bangladesh
  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.district.value;
    const district = servicesCenter.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coordi = [district.latitude, district.longitude];
      console.log(district, coordi);
      mapRef.current.flyTo(coordi, 12);
    }
  };
  return (
    <div className="container mx-auto p-4 flex flex-col gap-6">
      <h2 className="text-5xl">We are available in 64 districts</h2>
      {/* search */}
      <div>
        <form onSubmit={handleSearch} className="flex gap-4 items-center">
          <label htmlFor="district">Search by District: </label>
          <input type="text" id="district" name="district" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {/* Map component will go here */}
        <MapContainer
          center={position}
          zoom={8}
          style={{ height: "400px", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {servicesCenter.map((center) => (
            <Marker
              position={[center.latitude, center.longitude]}
              key={center.id}
            >
              <Popup>
                <strong>{center.district}</strong>
                <br />
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
