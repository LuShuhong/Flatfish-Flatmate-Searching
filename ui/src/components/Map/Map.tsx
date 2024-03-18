import React, { useRef, useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  Marker,
  Pin,
  useApiLoadingStatus,
  APILoadingStatus,
} from "@vis.gl/react-google-maps";

const MapComponent: React.FC = () => {
  const markersData = [
    {
      id: "marker1",
      position: { lat: 53.4746741, lng: -2.2529036 },
      info: "Location Info 1",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Deansgate_Square_%26_Elizabeth_Tower_Manchester_Winter_2020.jpg",
    },
    {
      id: "marker2",
      position: { lat: 53.47464, lng: -2.226 },
      info: "Location Info 2",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tower_Blocks_over_Knott_Mill%2C_geograph_6866152_by_David_Dixon.jpg/248px-Tower_Blocks_over_Knott_Mill%2C_geograph_6866152_by_David_Dixon.jpg",
    },
  ];

  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  // Use `any` type for marker refs as a temporary solution
  const markerRefs = useRef<{ [key: string]: any }>({});

  const toggleInfoWindow = (id: string) => {
    setSelectedMarker((prevSelectedMarker) =>
      prevSelectedMarker === id ? null : id
    );
  };

  const status = useApiLoadingStatus();

  useEffect(() => {
    if (status === APILoadingStatus.LOADED) {
      console.log(":(");

      return;
    }
  }, [status]);

  return (
    
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}>
      <Map
        className={"h-5/6 w-1/2 border-x-8 border-transparent ml-16"}
        defaultZoom={14}
        defaultCenter={{ lat: 53.4746741, lng: -2.2529036 }}
        mapId={"5870b0fa6e7ef7ce"}
      >
        {markersData.map((marker) => (
          <React.Fragment key={marker.id}>
            <AdvancedMarker
              position={marker.position}
              ref={(ref) => {
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

                <p>This is an Info Window</p>
                <img src={marker.imageUrl} />
              </InfoWindow>
            )}
          </React.Fragment>
        ))}
      </Map>
    </APIProvider>
    
  );
};
export default MapComponent;
