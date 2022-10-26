import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Searchbar = (props) => {
	const [search, setSearch] = useState("");
	const {onSearch} = props
	const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

	const onButtonClickHandler = () => {
        onSearch(search)
    }

	return (
		<div className="searching">
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Search Pokemon"
						aria-label="Search Pokemon"
						aria-describedby="basic-addon2"
						onChange={onChangeHandler}
					/>
					<Button variant="outline-secondary" id="button-addon2" onClick={onButtonClickHandler}>
						Search
					</Button>
				</InputGroup>
		</div>
	);
};

export default Searchbar;
