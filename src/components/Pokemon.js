import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
        className="pokemon-image"
      />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
      </Card.Body>
        {pokemon.abilities.map((abilities, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              <ListGroup.Item>
                Abilities : {abilities.ability.name}
              </ListGroup.Item>
            </div>
          );
        })}

        <ListGroup.Item>Height : {pokemon.height}</ListGroup.Item>
        <ListGroup.Item>Species : {pokemon.species.name}</ListGroup.Item>
        <p>Stats</p>
        {pokemon.stats.map((stat, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              <ListGroup.Item>
                <strong>{stat.stat.name}</strong>
                <ProgressBar now={stat.base_stat} />
              </ListGroup.Item>
            </div>
          );
        })}
        
    </Card>
  );
};

export default Pokemon;
