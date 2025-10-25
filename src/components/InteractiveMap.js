"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveMap({ 
  latitude = 48.8915, 
  longitude = 2.2140, 
  zoom = 15,
  properties = null, // Pour afficher plusieurs biens
  height = "400px",
  showPopup = true 
}) {
  const [isClient, setIsClient] = useState(false);
  const [Map, setMap] = useState(null);

  useEffect(() => {
    setIsClient(true);
    
    // Import dynamique de Leaflet côté client uniquement
    import('leaflet').then((L) => {
      setMap(() => L);
      
      // Fix pour les icônes Leaflet avec Next.js
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    });
  }, []);

  useEffect(() => {
    if (!isClient || !Map) return;

    // Import du CSS Leaflet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Initialisation de la carte
    const mapInstance = Map.map('map').setView([latitude, longitude], zoom);

    // Ajout des tuiles OpenStreetMap
    Map.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapInstance);

    // Icône personnalisée
    const customIcon = Map.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative;">
          <div style="
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          "></div>
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            color: white;
            font-size: 20px;
          ">🏠</div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });

    if (properties && Array.isArray(properties)) {
      // Plusieurs biens sur la carte
      properties.forEach((property) => {
        const marker = Map.marker([property.lat, property.lng], { icon: customIcon })
          .addTo(mapInstance);

        if (showPopup) {
          marker.bindPopup(`
            <div style="min-width: 200px;">
              ${property.image ? `
                <img src="${property.image}" alt="${property.title}" 
                  style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
              ` : ''}
              <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 4px; color: #1f2937;">
                ${property.title}
              </h3>
              <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">
                📍 ${property.location}
              </p>
              ${property.price ? `
                <p style="color: #2563eb; font-weight: bold; font-size: 16px; margin-bottom: 8px;">
                  ${property.price}
                </p>
              ` : ''}
              <a href="/biens-a-vendre/${property.slug}" 
                style="display: inline-block; background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Voir le bien →
              </a>
            </div>
          `);
        }
      });

      // Ajuster la vue pour afficher tous les markers
      if (properties.length > 1) {
        const group = Map.featureGroup(
          properties.map(p => Map.marker([p.lat, p.lng]))
        );
        mapInstance.fitBounds(group.getBounds().pad(0.1));
      }
    } else {
      // Un seul bien
      const marker = Map.marker([latitude, longitude], { icon: customIcon })
        .addTo(mapInstance);

      if (showPopup) {
        marker.bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <div style="font-weight: bold; font-size: 16px; color: #1f2937; margin-bottom: 4px;">
              📍 Emplacement du bien
            </div>
            <p style="color: #6b7280; font-size: 14px;">
              Mont Valérien, Hauts-de-Seine
            </p>
          </div>
        `).openPopup();
      }
    }

    // Cleanup
    return () => {
      mapInstance.remove();
    };
  }, [isClient, Map, latitude, longitude, zoom, properties, showPopup]);

  if (!isClient) {
    return (
      <div 
        style={{ height }}
        className="bg-gray-100 rounded-xl flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        id="map" 
        style={{ height, width: '100%' }}
        className="rounded-xl shadow-lg overflow-hidden border-2 border-gray-200"
      />
    </motion.div>
  );
}

