import React from "react";

const PetCard = ({ nombre, imagen }) => <div>
    <p>{nombre}</p>
    <img src={imagen} />
</div>

export default PetCard;