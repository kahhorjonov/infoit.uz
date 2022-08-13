import { useState } from 'react';
import PropTypes from 'prop-types';
import MDButton from 'components/MDButton';
import { TreeView, TreeItem } from '@mui/lab';
import { Fade, Icon, Paper, Popper } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategories } from 'store/actions/actionCreaters';

const style = {
  width: '300px',
  padding: '10px',
};

const TreeViewItem = ({ id, name, child }) => {
  const childs = child && child.length > 0;

  return (
    <TreeItem nodeId={id.toString()} label={name}>
      {childs &&
        child.map(ch => (
          <TreeViewItem
            key={ch.id}
            nodeId={ch.id.toString()}
            id={ch.id}
            name={ch.nameUz}
            child={ch.children}
          />
        ))}
    </TreeItem>
  );
};

TreeViewItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  child: PropTypes.array,
};

function DropDown() {
  const dispatch = useDispatch();
  const { category } = useSelector(store => store);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = newPlacement => event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleChange = (event, nodeIds) => {
    dispatch(setCurrentCategories({ name: event.target.textContent, id: nodeIds }));
  };

  return (
    <div>
      <MDButton variant='outlined' type='button' onClick={handleClick('bottom-end')}>
        {category?.currentCategory?.name || 'Category'}{' '}
        <Icon
          style={{
            marginLeft: '5rem',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          south
        </Icon>
      </MDButton>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Paper style={style}>
              <TreeView
                aria-label='file system navigator'
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ maxHeight: '50vh', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                onNodeSelect={handleChange}
                selected={[category.currentCategory.id.toString()]}
              >
                {category.categories?.map(c => (
                  <TreeViewItem
                    key={c.id}
                    nodeId={c.id.toString()}
                    id={c.id}
                    name={c.nameUz}
                    child={c.children}
                  />
                ))}
              </TreeView>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default DropDown;
