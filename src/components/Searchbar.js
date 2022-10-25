import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Searchbar = () => {
	return (
		<div className="searching">
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Search Pokemon"
						aria-label="Search Pokemon"
						aria-describedby="basic-addon2"
					/>
					<Button variant="outline-secondary" id="button-addon2">
						Search
					</Button>
				</InputGroup>
		</div>
	);
};

export default Searchbar;
