import React from "react";
import PetCard from "../PetCard";
import styles from "./styles.module.css";

const PetsViewer = ({pets}) => {
    const list = []
    return <><div className={styles.container}>
        { pets
            .filter(({habilitado}) => habilitado)
            .map((mascota, index) => 
                <PetCard key={index} {...mascota}/>
            )
        }
    </div>
    <div>
        <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
    </>
}
export default PetsViewer;