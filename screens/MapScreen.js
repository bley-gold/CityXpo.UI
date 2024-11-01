// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import MapboxGL from '@rnmapbox/maps';


// MapboxGL.setAccessToken('pk.eyJ1IjoiZ29sZHN0aWFubXVzaWMiLCJhIjoiY20yeHZ3czhjMDk5ajJscjNsYW0ya3BodCJ9.t8uam3t-8c9OozF0hhJGLA');


// const recreationalAreas = [
//   {
//     id: '1',
//     name: 'Kruger National Park',
//     coordinates: [31.485, -23.9884],
//     description: 'Famous wildlife reserve.',
//   },
//   {
//     id: '2',
//     name: 'Table Mountain',
//     coordinates: [18.4197, -33.9258],
//     description: 'Iconic mountain with hiking trails.',
//   },
//   // Add more areas as needed
// ];

// const MapScreen = () => {
//   const [selectedArea, setSelectedArea] = useState(null);

//   const handleMarkerPress = (area) => {
//     setSelectedArea(area);
//   };

//   return (
//     <View style={styles.container}>
//       <MapboxGL.MapView style={styles.map}>
//         <MapboxGL.Camera
//           zoomLevel={5}
//           centerCoordinate={[24.9916, -28.4523]} // Centered on South Africa
//         />

//         {recreationalAreas.map((area) => (
//           <MapboxGL.PointAnnotation
//             key={area.id}
//             id={area.id}
//             coordinate={area.coordinates}
//             onSelected={() => handleMarkerPress(area)}
//           >
//             <View style={styles.marker} />
//           </MapboxGL.PointAnnotation>
//         ))}
//       </MapboxGL.MapView>

//       {selectedArea && (
//         <View style={styles.infoBox}>
//           <Text style={styles.areaName}>{selectedArea.name}</Text>
//           <Text>{selectedArea.description}</Text>
//           <TouchableOpacity
//             style={styles.directionButton}
//             onPress={() => {
//               // Code to open directions (use a maps URL or integrate navigation)
//               alert(`Getting directions to ${selectedArea.name}`);
//             }}
//           >
//             <Text style={styles.directionText}>Get Directions</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   marker: {
//     width: 20,
//     height: 20,
//     backgroundColor: '#ff6347',
//     borderRadius: 10,
//     borderColor: '#fff',
//     borderWidth: 2,
//   },
//   infoBox: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   areaName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   directionButton: {
//     marginTop: 10,
//     paddingVertical: 10,
//     backgroundColor: '#2CA39A',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   directionText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default MapScreen;
