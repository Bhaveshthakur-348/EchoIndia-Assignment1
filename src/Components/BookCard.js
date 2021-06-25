import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "250px",
    margin: "16px",
    width: "20%",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover, &:focus": {
      transform: "scale(1.1)",
    },
  },

  title: {
    fontSize: 14,
    fontColor: theme.primary,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard({
  title,
  authors,
  pages,
  city,
  country,
  year,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {authors}
        </Typography>
        <Typography variant="body2" component="p" style={{ textAlign: "left" }}>
          Year : {year}
          <br />
          Country : {country}
          <br />
          City : {city}
          <br />
          Pages : {pages}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
