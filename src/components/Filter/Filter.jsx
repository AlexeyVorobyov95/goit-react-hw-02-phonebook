import PropTypes from 'prop-types';
import {FilterContainer, Input} from 'components/Filter/Filter.styled'

export const Filter = ({ value, filterChange }) => {
  return (
    <FilterContainer>
      <h2>Finde contact</h2>
      <label htmlFor="">
        <Input type="text" value={value} onChange={filterChange} />
      </label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired
};
