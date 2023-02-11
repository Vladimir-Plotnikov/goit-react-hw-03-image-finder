import PropTypes from 'prop-types';
import {Header, Form, Button, Input} from './Searchbar.styled'
import { FcSearch } from "react-icons/fc";
export function Searchbar({ onSubmit }) {
    return (
<Header>
  <Form onSubmit={onSubmit}>
   
    <Button type="submit" className="button">
      <span className="button-label"><FcSearch /></span>
    </Button>

    <Input
      className="input"
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
</Header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}