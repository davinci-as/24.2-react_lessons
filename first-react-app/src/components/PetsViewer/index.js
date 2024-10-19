import React from "react";
import PetCard from "../PetCard";

const PetsViewer = ({pets}) => pets
    .filter(({habilitado}) => habilitado)
    .map((mascota, index) => <PetCard key={index} {...mascota}/>)

export default PetsViewer;