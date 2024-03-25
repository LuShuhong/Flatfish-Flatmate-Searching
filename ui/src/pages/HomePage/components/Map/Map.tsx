import React, { useRef, useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useApiLoadingStatus,
  APILoadingStatus,
} from "@vis.gl/react-google-maps";
import { markersData } from "./MarkerData";

const MapComponent: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  // Use `any` type for marker refs as a temporary solution
  const markerRefs = useRef<{ [key: string]: any }>({});

  const toggleInfoWindow = (id: string) => {
    setSelectedMarker((prevSelectedMarker) =>
      prevSelectedMarker === id ? null : id
    );
  };

  const status = useApiLoadingStatus();

  // useEffect(() => {
  //   if (status === APILoadingStatus.LOADED) {
  //     console.log(":(");

  //     return;
  //   }
  // }, [status]);

  return (
    <APIProvider apiKey={"AIzaSyBB1B1ztcrr4wieOXSJAnN11dXTWI7mVuU"}>
      <Map
        className={"h-5/6 w-1/2 border-x-8 border-transparent ml-16"}
        defaultZoom={12}
        defaultCenter={{ lat: 53.4807593, lng: -2.2426305 }}
        mapId={"5870b0fa6e7ef7ce"}
      >
        {markersData.map((marker) => (
          <React.Fragment key={marker.id}>
            <AdvancedMarker
              position={marker.position}
              ref={(ref: any) => {
                markerRefs.current[marker.id] = ref;
              }}
              onClick={() => toggleInfoWindow(marker.id)}
            ></AdvancedMarker>
            {selectedMarker === marker.id && markerRefs.current[marker.id] && (
              <InfoWindow
                anchor={markerRefs.current[marker.id]}
                onCloseClick={() => toggleInfoWindow(marker.id)}
              >
                {marker.info}

                <img className="h-48 w-48" src={marker.imageUrl} />
              </InfoWindow>
            )}
          </React.Fragment>
        ))}
      </Map>
    </APIProvider>
  );
};
export default MapComponent;
