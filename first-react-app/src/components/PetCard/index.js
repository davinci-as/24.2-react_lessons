import React from "react";
import styles from './styles.module.css';

const PetCard = ({ nombre, imagen }) => <div className={styles.container}>
    <p>{nombre}</p>
    <img src={imagen} className={styles.image}/>
    <button className={styles.callToAction}>Agregar a carrito</button>
</div>

export default PetCard;