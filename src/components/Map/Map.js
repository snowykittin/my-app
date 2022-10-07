import "./../../App.css";
import React, {useState, useEffect} from "react";
import MapLocation from "./MapLocation";
import DistanceDisplay from "./DistanceDisplay";

export default function Map() {

    const [locations, setLocations] = useState([]);
    const [selectedPoints, setSelectedPoints] = useState([]);

    useEffect(() => {
        fetch("data/data.json")
        .then((res) => res.json())
        .then((dataObject) => {
            dataObject.forEach((entry) => {
                entry.active = false;
            })
            setLocations(dataObject) });
    })

    const locationEls = locations.map((location) => (
        <MapLocation 
            position={location.position} 
            key={location.id} 
            active={location.active} 
            useSelected={
                () => {selectLocation(location);
                }} 
        />
    ));

    let linesList = [];
    //only draw lines if enough selected
    if(selectedPoints.length > 1){
        for(var i = 0; i < selectedPoints.length -1; i++){
            let p1 = selectedPoints[i].position;
            let p2 = selectedPoints[i+1].position;
            linesList.push(<line x1={p1.x} x2={p2.x} y1={p1.y} y2={p2.y} stroke="black" />);
        }
    }

    function selectLocation(location) {
        location.active = true;
        setLocations([...locations]);

        selectedPoints.push(location);
        setSelectedPoints([...selectedPoints]);
        console.log(selectedPoints);
    }

    return (
        <div>
            <svg width="600" height="600">
                <DistanceDisplay locations={selectedPoints} />
                {locationEls}
                {linesList}
                
            </svg>
        </div>
    );
}