"use client";

import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 13.338414, lat: 52.507932 };
  const [zoom] = useState(12);
  const [mapStyle, setStyle] = useState("basic");

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });
    const markers = [
      { lat: 52.507932, lng: 13.338414, title: "Berlin" },
      { lat: 48.856613, lng: 2.352222, title: "Paris" },
      { lat: 51.507351, lng: -0.127758, title: "London" },
    ];
    markers.forEach((marker) => {
      L.marker([marker.lat, marker.lng], {
        title: marker.title,
      }).addTo(map.current);
    });
    // Create a MapTiler Layer inside Leaflet
    const mtLayer = new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
      apiKey: "sVFJHsTwBKqffAJtRJCI",
    }).addTo(map.current);
  }, [center.lng, center.lat, zoom, mapStyle]);
  return (
    <div>
      <div className="group p-4 flex flex-wrap gap-4"></div>
      <div ref={mapContainer} className="h-[100vh] max-w-full z-10 " />
    </div>
  );
};

export default Map;
