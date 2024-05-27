import React from "react";
import PropTypes from "prop-types";

export default function ThirdComponent({ name, lastName, card }) {
  return (
    <div>
      <h2>Comunicación entre componentes</h2>
      <ul>
        <li>{name}</li>
        <li>{lastName}</li>
        <li>{card.heightCM}</li>
      </ul>
    </div>
  );
}

ThirdComponent.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  card: PropTypes.shape({
    heightCM: PropTypes.number.isRequired,
    bloodType: PropTypes.string.isRequired,
    allergies: PropTypes.string.isRequired,
  }).isRequired,
};
