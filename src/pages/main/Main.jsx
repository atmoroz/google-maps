import React from 'react'
import mainStyles from './main.module.css'
import DemoApp from '../../components/MapWithAMarkerClusterer/MapWithAMarkerClusterer'
import MapWithControlledZoom from '../../components/MapWithAMarkerClusterer/MapWithAMarkerClusterer'
const Main = () => {
    console.log('main')
    return (
        <>
            <section className={mainStyles.layout}>
            <MapWithControlledZoom />
            </section>
        </>
    )
}
export default Main