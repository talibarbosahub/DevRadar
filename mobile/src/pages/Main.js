
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // biblioteca para usar os mapas
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location' // pegar a permissão e localização atual

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null); //
    useEffect(() => {
        async function loadInitialPosition() {  // vai carregar posição inicial do mapa
            const { granted } = await requestPermissionsAsync() // retorna objeto com informações do usuário

            if (granted) { // granted para saber se o usuário deu permissão
                const { coords } = await getCurrentPositionAsync({ // location. se deu permissão obtem a localização atual
                    enableHighAccuracy: true, // utiliza o gps para obter a posição do usuário
                })
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04, // Delta = calculos navais para ter zoom dentro do mapa
                    longitudeDelta: 0.04,
                })
            }

        }
        loadInitialPosition();
    }, [])
    if (!currentRegion) { // enquanto o currentRegion for nullo reorna nullo para não renderizar nada, só vai mostrar o mapa quando carregar a localização do usuário
        return null;
    }
    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{latitude: -23.5238849, longitude : -46.7837878 }}/>
        </MapView>
    )
}
const styles = StyleSheet.create({
    map: {
        flex: 1 //  Para ocupar toda a área 
    },
})

export default Main;