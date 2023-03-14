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
  name: 'Map',
  mounted() {
    const sizeMapModify = document.querySelector('#italy');
    sizeMapModify.style = 'height:400px'
  },

  setup() {
    const mapRef = ref('italy');
    const id = <? php echo json_encode($apartment -> id, JSON_HEX_TAG); ?>;


    onMounted(async () => {
      let apartment;
      await axios.get(`${window.location.origin}/api/apartments/${id}`)
        .then(resp => {
          apartment = resp.data;
        });
      const centerLat = apartment.latitude - 0.001
      const centerLon = apartment.longitude - 0.001
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

      addMarker(map, apartment.longitude, apartment.latitude, apartment.address);


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