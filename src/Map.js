import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
import geojsonvt from 'geojson-vt';
import fromJS from 'immutable';
import stateData from './data/us-state';

export default class Map extends Component {
    state = {
        mapStyle:'mapbox://styles/mapbox/dark-v10',
        something: 1,
        viewport: {
            width : Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            latitude: 37.7577,
            longitude: -98.4376,
            zoom: 3.5,
        }
    };
    temp = () =>{
        console.log(process.env,process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN,"pk.eyJ1Ijoic2hhbmUtcGlvbmVlciIsImEiOiJjampyN2YwZ3MzeGQxM3JteGh6YWM3Yjg5In0.joFZOIVkzx9ZVpX5B0BsZA")
    }
    componentDidMount(){
        const mapStyle = {
            layers: [
                {
                    id: 'my-layer',
                    type: 'circle',
                    source: 'points',
                    paint: {
                        'circle-color': '#f00',
                        'circle-radius': '4'
                    }
                }
            ]
        };
        this.setState({mapStyle:mapStyle})
    }
    render() {
        const token = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;
        const mapStyle = "mapbox://styles/mapbox/dark-v9";
        return (
            <div>
                Hello world
            <ReactMapGL
                mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
                {...this.state.viewport}
                mapStyle = {mapStyle}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
            </div>
        );
    }
}