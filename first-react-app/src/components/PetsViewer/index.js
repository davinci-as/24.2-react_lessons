import React from "react";
import PetCard from "../PetCard";

const PetsViewer = ({pets}) => pets
    .filter(mascota => mascota.habilitado)
    .map(mascota => <PetCard {...mascota}/>)

export default PetsViewer;