import React, { useMemo } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import GradeIcon from "@material-ui/icons/Grade";
import HomeIcon from "@material-ui/icons/Home";
import { MOVIE_TYPES } from "../constants";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../redux/movie/movie.action";
import { setFilters } from "../redux/filters/filters.action";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  filterItem: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
  },
  datePicker: { minWidth: 100, color: "white" },
  select: {
    padding: 10,
    minWidth: 75,
  },
  selectIcon: {
    color: "white",
  },
  inputInput: {
    minWidth: 75,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    flexWrap: "wrap",
  },
  submitButton: { marginLeft: theme.spacing(1) },
}));

const Header = () => {
  const classes = useStyles();
  const movieTypeKeys = useMemo(() => Object.keys(MOVIE_TYPES), [MOVIE_TYPES]);
  const { search, date, movieType } = useSelector((state) => state.filters);
  const router = useRouter();
  const showFilters = useMemo(() => {
    switch (router.pathname) {
      case "/":
        return true;

      default:
        return false;
    }
  }, [router.pathname]);
  const dispatch = useDispatch();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie Browser
          </Typography>
          {showFilters && (
            <>
              <div className={classes.filterItem}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search"
                  variant="outlined"
                  value={search}
                  onChange={({ target: { value } }) =>
                    dispatch(setFilters({ search: value, movieType, date }))
                  }
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={classes.filterItem}>
                <Select
                  value={movieType}
                  classes={{
                    root: classes.inputRoot,
                    select: classes.select,
                    icon: classes.selectIcon,
                  }}
                  onChange={({ target: { value } }) => {
                    dispatch(setFilters({ search, movieType: value, date }));
                  }}
                >
                  {movieTypeKeys.map((type) => (
                    <MenuItem key={type} value={MOVIE_TYPES[type]}>
                      {MOVIE_TYPES[type]}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className={classes.filterItem}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    TextFieldComponent={(props) => (
                      <InputBase
                        {...props}
                        placeholder="Year"
                        inputProps={{ "aria-label": "year" }}
                        style={{ color: "white", paddingLeft: 10 }}
                      />
                    )}
                    animateYearScrolling
                    clearable
                    emptyLabel="Year"
                    variant="outlined"
                    placeholder="Year"
                    disableFuture
                    value={date}
                    views={["year"]}
                    onChange={(newDate) => {
                      dispatch(
                        setFilters({ search, movieType, date: newDate })
                      );
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <Button
                disabled={!search}
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => dispatch(getList())}
              >
                GET
              </Button>
            </>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="home"
              color="inherit"
              onClick={() => router.push("/")}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              aria-label="favorites"
              color="inherit"
              onClick={() => router.push("/favorites")}
            >
              <GradeIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
