/*eslint-disable*/
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload, ShoppingCart } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

// core components
import CustomDropdown from '../../Atoms/CustomDropdown/CustomDropdown.js';
import Button from '../../Atoms/CustomButtons/Button.js';
import { isLogged } from '../../../../utils/helpers/isLogged';
import styles from '../../../../styles/zeepCommerceStyle/components/headerLinksStyle.js';
import { pages } from '../../../../utils/helpers/redirectTo';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link href={pages.home}>
          <a className={classes.dropdownLink}>Inicio</a>
        </Link>
        {isLogged ? (
          <Link href={pages.dashboard}>
            <a className={classes.dropdownLink}>Mi Cuenta</a>
          </Link>
        ) : (
            <Link href={pages.signup}>
              <a className={classes.dropdownLink}>Registrate</a>
            </Link>
          )
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={pages.cart}
          color={"white"}
          className={classes.navButton}
          round
        >
          <ShoppingCart className={classes.icons} /> buy now
        </Button>
      </ListItem>
    </List>
  );
}
