import React, { Component } from 'react'
import { MapContainer, Marker, Popup, ImageOverlay } from 'react-leaflet'

export class Leaflet extends Component {
    render() {
        return (
            <>
                <MapContainer center={[51.505, -0.09]} zoom={0}>
                    <ImageOverlay
                        attribution='Tourify'
                        bounds={[[0, 0], [100, 100]]}
                        url="https://www.viebrockhaus.de/fileadmin/media/haeuser/jette-joop-europe-life-l/6_Grundrisse_EG_OG/life_L_d_b_JJ_15_EG.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </>
        )
    }
}

export default Leaflet
