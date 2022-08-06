import PropTypes from 'prop-types';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './DropDown.scss';

const categorySelect = [
  {
    id: 1,
    text: 'Select 1',
    child: [
      { id: 1, text: 'Select 1 1' },
      { id: 1, text: 'Select 1 2' },
    ],
  },
  {
    id: 2,
    text: 'Select 2',
    child: [
      { id: 1, text: 'Select 2 1' },
      { id: 1, text: 'Select 2 2' },
    ],
  },
];

function MiniAccordion({ category, children }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{category}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

MiniAccordion.propTypes = {
  category: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Dropdown({ categorySelect }) {
  return (
    <div className='drop_down'>
      <MiniAccordion category='Choose a category'>
        {categorySelect.map(category => (
          <MiniAccordion key={category.id} category={category.text}></MiniAccordion>
        ))}
      </MiniAccordion>

      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>General settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

export default Dropdown;
