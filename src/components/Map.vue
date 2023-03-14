<template>
    <h1>Vue 3 TomTom Maps Demo</h1>
    <div id='map' ref="mapRef"></div>
  </template> 
   
  <script>
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        'apartmentList': []
      }
    },
    props:{
      appartmentId: String,
      appartmentLatitude: Number,
      appartmentLongitude: Number,
      appartmentAddress: String,
  
    },
    name: 'Map',
  
    setup(props) {
      const mapRef = ref(null);
      const id = props.appartmentId;

      onMounted(async () => {
        
        let apartment;
        await axios.get(`http://127.0.0.1:8000/api/apartments/${id}`)
          .then(resp => {
            apartment = resp.data;
          });
        const centerLat = props.appartmentLatitude - 0.001
        const centerLon = props.appartmentLongitude - 0.001
        const tt = window.tt;
        var map = tt.map({
          key: 'C1SeMZqi2HmD2jfTGWrbkAAknINrhUJ3',
          container: mapRef.value,
          style: 'tomtom://vector/1/basic-main/',
          zoom: 13,
          center: [centerLon, centerLat],
        });
        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());
  
        addMarker(map, props.appartmentLongitude, props.appartmentLatitude, props.appartmentAddress);
  
  
      })
  
      function addMarker(map, longitude, latitude, address) {
  
        const tt = window.tt;
        var location = [longitude, latitude];
        var popupOffset = 25;
  
        var marker = new tt.Marker().setLngLat(location).addTo(map);
        var popup = new tt.Popup({
          offset: popupOffset
        }).setHTML(address);
        marker.setPopup(popup).togglePopup();
  
        const mapboxglPopupContent = document.querySelector('.mapboxgl-popup-content');
        mapboxglPopupContent.classList.add('text-black');
      }
  
      return {
        mapRef,
      };
    },
  }
  </script>
  <style> #map {
     height: 512px;
     width: 512px;
   }
  </style>