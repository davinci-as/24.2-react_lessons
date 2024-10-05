import React from "react";

const PetCard = mascota => <div>
    <p>{mascota.nombre}</p>
    <img src={mascota.imagen} />
</div>

export default PetCard;