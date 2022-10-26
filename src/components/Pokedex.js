import React from "react";
import Paging from "./Paging";
import Pokemon from "./Pokemon";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    const onLeftClickHandler = () => {
    if (page > 0) {
        setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Paging
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>
          <Row xs={1} md={2} className="loading-skeleton inspiration-page g-4 border-white">
            {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./notfound.png" />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
            })}
          </Row>
        </div>
      ) : (
        <div>
          <Row xs={1} md={2} className="inspiration-page g-4 border-white">
            {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
          </Row>
          
        </div>
      )}
    </div>
  );
};

export default Pokedex;
