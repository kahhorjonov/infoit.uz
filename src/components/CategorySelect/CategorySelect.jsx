import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Styles from './CategorySelect.module.scss';

function CategorySelect({ options = [], onChange = () => {} }) {
  const [value, setValue] = useState();
  return (
    <label htmlFor='select' className={Styles.select}>
      <select
        value={value}
        onChange={e => {
          onChange(e.target.value);
          setValue(e.target.value);
        }}
      >
        {options.map(option => (
          <option key={v4()} value={JSON.stringify({ id: option.id, child: option.children })}>
            {option.nameUz}
          </option>
        ))}
      </select>
    </label>
  );
}

CategorySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategorySelect;
