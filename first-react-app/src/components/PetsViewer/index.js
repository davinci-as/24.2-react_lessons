import React from "react";
import PetCard from "../PetCard";
import styles from "./styles.module.css";

const PetsViewer = ({pets}) => <div className={styles.container}>
    { pets
        .filter(({habilitado}) => habilitado)
        .map((mascota, index) => 
            <PetCard key={index} {...mascota}/>
        )
    }
</div>

export default PetsViewer;