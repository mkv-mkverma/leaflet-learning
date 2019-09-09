// import { Component, OnInit } from '@angular/core';
// import up_dist_geojson from './up_dist_geojson.json';
// declare let L: any;
// declare let turf: any;
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'angular-leaflet';
//   map: any;
//   marker1: any;
//   mapGeoJSON: any;
//   googleMap: any;
//   baseMaps: any;
//   marker: any;
//   redIcon: any;
//   greenIcon: any;
//   geoJson = up_dist_geojson;
//   // geoJSONToAddress: any;
//   constructor() {
//     // this.geoJson =
//     console.log(this.geoJson);
//   }
//   ngOnInit() {
//     this.mapSetup();
//   }
//   mapSetup() {
//     // Base Map
//     const satellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
//       maxZoom: 20,
//       subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     });

//     const satelliteWithLabel = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
//       maxZoom: 20,
//       subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     });

//     const terrain = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//       maxZoom: 20,
//       subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     });

//     const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
//       maxZoom: 20,
//       subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//     });
//     // initialize the map on the "map" div with a given center and zoom
//     this.map = L.map('map', {
//       // map options
//       center: [21.1827733, 78.9436609],
//       zoom: 6,
//       minZoom: 6,
//       maxZoom: 20,
//       layers: [satellite],
//       attributionControl: false,
//       zoomControl: true
//     });

//     this.baseMaps = {
//       Terrain: terrain,
//       Satellite: satellite,
//       'Satellite With Label': satelliteWithLabel
//     };

//     this.redIcon = L.icon({
//       iconUrl: '../assets/red_icon.svg',
//       // shadowUrl: 'leaf-shadow.png',

//       iconSize: [38, 95], // size of the icon
//       // shadowSize:   [50, 64], // size of the shadow
//       iconAnchor: [16, 94], // point of the icon which will correspond to marker's location
//       // shadowAnchor: [4, 62],  // the same for the shadow
//       popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
//     });
//     this.greenIcon = L.icon({
//       iconUrl: '../assets/green_icon.svg',
//       // shadowUrl: 'leaf-shadow.png',

//       iconSize: [38, 95], // size of the icon
//       // shadowSize:   [50, 64], // size of the shadow
//       iconAnchor: [16, 94], // point of the icon which will correspond to marker's location
//       // shadowAnchor: [4, 62],  // the same for the shadow
//       popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
//     });
//     // L.marker([25.5726, 86.3639], { icon: this.redIcon }).addTo(this.map)
//     // .bindPopup('Icon Popup')
//     // .openPopup();

//     L.control
//       .layers(this.baseMaps, null, {
//         position: 'bottomright'
//       })
//       .addTo(this.map);

//     L.control
//       .scale({
//         imperial: false,
//         position: 'topright'
//       })
//       .addTo(this.map);

//     L.circle([24.5726, 88.3639], 50000, {
//       color: 'red',
//       fillColor: '#f03',
//       fill: true, // boolean for fill - true/false
//       weight: 2, // stroke weight
//       opacity: 1, // border a value between 0 and 1
//       stroke: true, // true/false for stroke
//       fillOpacity: 0.5
//     }).addTo(this.map).bindPopup('I am a circle.');

//     L.circle([24.5726, 85.3639], 50000, {
//       color: 'grey',
//       fillColor: 'white',
//       fill: true, // boolean for fill - true/false
//       weight: 4, // stroke weight
//       opacity: 1, // border a value between 0 and 1
//       stroke: true, // true/false for stroke
//       fillOpacity: 1
//     }).addTo(this.map).bindPopup('I am a new circle.');
//     const text = L.tooltip({
//         permanent: true,
//         direction: 'center',
//         className: 'text'
//       })
//         .setContent('12')
//         .setLatLng([24.5726, 85.3639]);
//     text.addTo(this.map);
//     // CircleMarker
//     const cm2 = new L.circleMarker([22.5726, 80.3639], {
//       radius: 20,
//       stroke: true,
//       color: 'black',
//       opacity: 1,
//       weight: 1,
//       fill: true,
//       fillColor: 'green',
//       fillOpacity: 0.3
//     }).addTo(this.map).bindPopup('I am a new circle marker');

//     // to add icon and popup message
//     L.marker([22.5726, 88.3639]).addTo(this.map)
//       .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//       .openPopup();

//     const latitudeLongitude = [];
//     const markers = [];
//     const addeGeoJSON = L.geoJSON(this.geoJson, {
//       style: (feature) => {
//         return {
//           fillColor: '#000000',
//           fillOpacity: .8,
//           weight: 1,
//           color: '#000000'
//         };
//       },
//       pointToLayer(feature, latlng) {
//         return new L.marker(latlng, {
//           icon: this.redIcon
//         });
//       },

//       onEachFeature(feature, layer) {
//         if (feature.geometry.type === 'Polygon') {
//           feature.latitudeLongitude = [];
//           const centroid = turf.centroid(feature);
//           const lon = centroid.geometry.coordinates[0];
//           const lat = centroid.geometry.coordinates[1];
//           latitudeLongitude.push([lat, lon]);
//           // console.log(latitudeLongitude);
//           feature.latitudeLongitude = [lat, lon];
//           console.log(latitudeLongitude);
//           layer.bindPopup(feature.properties.district);
//         }

//       }
//     }).addTo(this.map);
//     // Represents a rectangular geographical area on a map.
//     this.map.fitBounds(addeGeoJSON.getBounds(), { padding: [50, 50] });
// // CircleMarker
// // var circle3 = L.circle([21.5726, 85.3639], 50000, {
// //   stroke: true, //true/false for stroke
// //   color: 'yellow', //stroke color
// //   opacity: 1, //a value between 0 and 1
// //   weight: 10, //stroke weight
// //   fill: true, //boolean for fill - true/false
// //   fillColor: 'red', //HEX or color name
// //   fill0pacity: 1, //opacity 0-1 of fill
// //  }).addTo(this.map);
//     // {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
//     // L.circle([21.5726, 85.3639], 50000, {
//     //   color: 'red',
//     //   fillColor: '#f03',
//     //   fillOpacity: 0.5
//     // }).addTo(this.map).bindPopup('I am a circle.');

//     // for displaying icons
//     // this.geoJson.features.forEach(e => {
//     //   const marker = L.circle(e['latitudeLongitude'], 50000, {
//     //     icon: this.redIcon
//     //   }).on('mouseover', (event) => {
//     //     console.log(event);
//     //     event.target.setIcon(this.greenIcon);
//     //   }).on('mouseout', (event) => {
//     //     event.target.setIcon(this.redIcon);
//     //   }).bindPopup(e.properties.district);
//     //   markers.push(marker);
//     // });

//     // To add circle
//     // this.geoJson.features.forEach(e => {
//     //   const marker = L.circle(e['latitudeLongitude'], 10000, {
//     //     color: 'red',
//     //     fillColor: '#f03',
//     //     fillOpacity: 0.5
//     //   }).on('mouseover', (event) => {
//     //     console.log(event);
//     //     event.target.setIcon(this.greenIcon);
//     //   }).on('mouseout', (event) => {
//     //     event.target.setIcon(this.redIcon);
//     //   }).bindPopup(e.properties.district);
//     //   markers.push(marker);
//     // });
//     const Classroomsbyamount = new L.LayerGroup();
//     this.geoJson.features.forEach(e => {
//       const marker = L.circle(e['latitudeLongitude'], 10000 , {
//       // const marker = new L.CircleMarker(e['latitudeLongitude'], { radius: 10 }, {
//         color: 'grey',
//       fillColor: 'white',
//       fill: true, // boolean for fill - true/false
//       weight: 4, // stroke weight
//       opacity: 1, // border a value between 0 and 1
//       stroke: true, // true/false for stroke
//       fillOpacity: 1
//       }).bindPopup(e.properties.district);

//       const text = L.tooltip({
//         permanent: true,
//         direction: 'center',
//         className: 'text'
//       })
//         .setContent('12')
//         .setLatLng(e['latitudeLongitude']);
//       text.addTo(this.map);

//       // const text2 = L.tooltip({
//       //   direction: 'top',
//       //   className: 'text'
//       // })
//       //   .setContent('12')
//       //   .setLatLng(e['latitudeLongitude']);
//       // L.bindTooltip(text2);


//       markers.push(marker);
//     });

//     const featureGroup = L.featureGroup(markers)
//       // .bindPopup('Icon Popup marker3')
//       .openPopup()
//       .addTo(this.map);

//     const marker2 = L.marker([25.5726, 80.3639], { icon: this.redIcon });
//     // marker2.addTo(this.map)
//     // .bindPopup('Icon Popup marker2')
//     // .openPopup();

//     const marker3 = L.marker([25.5726, 82.3639], { icon: this.redIcon });
//     // marker3.addTo(this.map)
//     // .bindPopup('Icon Popup marker3')
//     // .openPopup();

//     // const featureGroup = L.featureGroup([marker2, marker3])
//     // .bindPopup('Icon Popup marker3')
//     // .openPopup()
//     // .addTo(this.map);
//     this.map.fitBounds(featureGroup.getBounds(), { padding: [50, 50] });

//     // to add shape on map
//     L.polygon([
//       [22.5726, 87.3639],
//       [21.5726, 88.3739],
//       [22.5726, 88.3639]
//     ], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5
//       }).addTo(this.map).bindPopup('I am a polygon.');
//   }
// }


// clustring
import { Component, OnInit } from '@angular/core';
import up_dist_geojson from './up_dist_geojson.json';
declare let L: any;
declare let turf: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-leaflet';
  map: any;
  marker1: any;
  mapGeoJSON: any;
  googleMap: any;
  baseMaps: any;
  marker: any;
  redIcon: any;
  greenIcon: any;
  clusterGroup: any;
  geoJson = up_dist_geojson;
  // geoJSONToAddress: any;
  constructor() {
    console.log(this.geoJson);
  }
  ngOnInit() {
    this.mapSetup();
  }
  mapSetup() {
    // Base Map
    const satellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    const satelliteWithLabel = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    const terrain = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    // initialize the map on the "map" div with a given center and zoom
    this.map = L.map('map', {
      // map options
      center: [21.1827733, 78.9436609],
      zoom: 6,
      minZoom: 0,
      maxZoom: 20,
      layers: [satellite],
      attributionControl: false,
      zoomControl: true
    });

    this.baseMaps = {
      Terrain: terrain,
      Satellite: satellite,
      'Satellite With Label': satelliteWithLabel
    };

    this.redIcon = L.icon({
      iconUrl: '../assets/red_icon.svg',
      iconSize: [38, 95], // size of the icon
      iconAnchor: [16, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    this.greenIcon = L.icon({
      iconUrl: '../assets/green_icon.svg',
      // shadowUrl: 'leaf-shadow.png',

      iconSize: [38, 95], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor: [16, 94], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.control
      .layers(this.baseMaps, null, {
        position: 'bottomright'
      })
      .addTo(this.map);

    L.control
      .scale({
        imperial: false,
        position: 'topright'
      })
      .addTo(this.map);

    const latitudeLongitude = [];
    const markers = [];
    const statesGeoJSON = L.geoJSON(this.geoJson, {
      style: (feature) => {
        return {
          fillColor: '#000000',
          fillOpacity: .8,
          weight: 1,
          color: '#000000'
        };
      },
      onEachFeature(feature, layer) {
        if (feature.geometry.type === 'Polygon') {
          feature.latitudeLongitude = [];
          const centroid = turf.centroid(feature);
          const lon = centroid.geometry.coordinates[0];
          const lat = centroid.geometry.coordinates[1];
          latitudeLongitude.push([lat, lon]);
          feature.latitudeLongitude = [lat, lon];
          layer.bindPopup(feature.properties.district);
        }

      }
    }).addTo(this.map);
    // Represents a rectangular geographical area on a map.
    this.map.fitBounds(statesGeoJSON.getBounds(), { padding: [50, 50] });

    const point = this.geoJson.features.forEach(e => {
      const marker = L.marker(e['latitudeLongitude'], 10000, {
        color: 'grey',
        fillColor: 'white',
        fill: true, // boolean for fill - true/false
        weight: 4, // stroke weight
        opacity: 1, // border a value between 0 and 1
        stroke: true, // true/false for stroke
        fillOpacity: 1
      }).bindPopup(e.properties.district);
      markers.push(marker);
    });

    // const featureGroup = L.featureGroup(markers)
    //   // .bindPopup('Icon Popup marker3')
    //   .openPopup()
    //   .addTo(this.map);
    // this.map.fitBounds(featureGroup.getBounds(), { padding: [50, 50] });


    // const mcg = L.markerClusterGroup();
    // tslint:disable-next-line: prefer-for-of
    // for (let i = 0; i < latitudeLongitude.length; i++) {
    //   const a = latitudeLongitude[i];
    //   const title = a[2];
    //   const marker1 = L.marker(new L.LatLng(a[0], a[1]), { title });
    //   marker1.bindPopup(title);
    //   mcg.addLayer(marker1);
    // }
    // this.map.addLayer(mcg);

    // const points = L.geoJson(this.geoJson, {
    //   pointToLayer(feature, latlng) {
    //     return L.marker(latlng)
    //       .bindPopup(feature.properties.NOM);
    //   }
    // });
    this.clusterGroup = L.markerClusterGroup();


    // this.clusterGroup.addLayer(point);
    for (let i = 0; i < latitudeLongitude.length; i++) {
      const a = latitudeLongitude[i];
      const title = a[2];
      const cluster = L.marker(new L.LatLng(a[0], a[1]), {
        title
      });
      cluster.bindPopup(title);
      this.clusterGroup.addLayer(cluster);
    }
    this.map.addLayer(this.clusterGroup);
  }
}

