import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4),
    },
  },
}));

export default function PaginationOutlined({ currentPage, onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        page={currentPage}
        onChange={onChange}
      />
    </div>
  );
}
