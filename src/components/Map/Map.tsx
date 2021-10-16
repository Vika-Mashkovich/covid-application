import React, { ReactElement, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import './Map.scss';
import ellipse from '../../assets/png/ellipse.png';
import { useActions } from '../../store/hooks/useActions';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';

const Map:React.FC = ():ReactElement => {
  const { geoData } = useTypedSelector(
    (state) => state.geoData,
  );
  const { countries } = useTypedSelector((state) => state.countriesData);
  const action = useActions();

  useEffect(() => {
    action.fetchGeoData();
  }, []);

  const ellipseIcon = L.icon({
    iconUrl: ellipse,
    iconSize: [20, 20],
    iconAnchor: [22, 22],
    popupAnchor: [-3, -20],
  });

  const markers = geoData.map((geo) => {
    const countryData = countries.find((country) => country.countryCode === geo.code);

    return (
      countryData ? (
        <Marker position={geo.geoPoint} icon={ellipseIcon} key={geo.code}>
          <Popup>
            <div className='popup-flag-block'>
              {countryData.flag ? <img src={countryData.flag} alt='flag' className='flag-img' /> : ''}
              <span className='country-name'>{countryData?.country}</span>
            </div>
            <div className='popup-info-block'>
              <span className='text'>{`Total confirmed: ${countryData.totalConfirmed}`}</span>
              <span className='text'>{`New confirmed: ${countryData.newConfirmed}`}</span>
              <span className='green-text'>{`Total recovered: ${countryData.totalRecovered}`}</span>
              <span className='red-text'>{`Total deaths: ${countryData.totalDeaths}`}</span>
              <span className='red-text'>{`New deaths: ${countryData.newDeaths}`}</span>
            </div>
          </Popup>
        </Marker>
      ) : ''
    );
  });

  return (
    <MapContainer className='map' center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers}
    </MapContainer>
  );
};

export default Map;
