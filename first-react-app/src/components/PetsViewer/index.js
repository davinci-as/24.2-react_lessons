import React from "react";
import PetCard from "../PetCard";

const PetsViewer = ({pets}) => pets
    .filter(({habilitado}) => habilitado)
    .map(mascota => <PetCard {...mascota}/>)

export default PetsViewer;