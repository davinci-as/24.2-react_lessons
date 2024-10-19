import React from "react";
import styles from './styles.module.css';

const PetCard = ({ nombre, imagen, addItem }) => <div className={styles.container}>
    <p>{nombre}</p>
    <img src={imagen} className={styles.image}/>
    <button className={styles.callToAction} onClick={
        () => addItem(nombre)
    }>Agregar a carrito</button>
</div>

export default PetCard;