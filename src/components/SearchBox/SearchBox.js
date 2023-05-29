import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';
import css from './SearchBox.module.css';

export const SearchBox = ({ onChange, value }) => {
  return (
    <div className={css.search}>
      <h1>Find the superhero</h1>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        className={css.search_input}
        type="text"
        value={value}
        placeholder="Nickname superhero"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
SearchBox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
