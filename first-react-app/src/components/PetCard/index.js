import React from "react";
import styles from './styles.module.css';

const PetCard = ({ nombre, imagen }) => <div className={styles.hide}>
    <p>{nombre}</p>
    <img src={imagen} className={styles.image}/>
</div>

export default PetCard;