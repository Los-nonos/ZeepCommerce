import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WebDesing from "@material-ui/icons/FormatPaintSharp";
import WebDev from '@material-ui/icons/Code'
import EditSection from "@material-ui/icons/EditSharp";
import ResponsiveDesing from '@material-ui/icons/ViewArray';
import Android from "@material-ui/icons/Android";
import Database from '@material-ui/icons/DataUsage';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web Designs"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil."
              icon={WebDesing}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web Development"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil."
              icon={WebDev}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Databases"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil."
              icon={Database}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Edit Sections"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil"
              icon={EditSection}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Responsive Desings"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil"
              icon={ResponsiveDesing}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Android"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil."
              icon={Android}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <Button color="transparent" href="/products">See all products</Button>
    </div>
  );
}
