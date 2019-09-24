import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import './scss/login-and-register.scss';

const useStyles = makeStyles(theme => ({
    textField: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(3),
    },
    button: {
        width: '100%'
    }
}));

export default function Register() {
    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    });
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    return (
        <div className="app-login-register">
            <div className="ALR-inner">
                <div className="logo">
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-circle-6/1024/iTunes-512.png" alt="" className="img-fluid" />
                </div>
                <form className='login-form' noValidate autoComplete="off">
                    <TextField
                        id="outlined-first-name"
                        label="First Name"
                        className={classes.textField}
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-last-name"
                        label="Last Name"
                        className={classes.textField}
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        onChange={handleChange('email')}
                        value={values.email}
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-adornment-password"
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        type={values.showPassword ? 'text' : 'password'}
                        label="Password"
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                    <TextField
                        id="outlined-adornment-confirm-password"
                        className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        type={values.showPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" size="large" component="button" className={classes.button}>
                        Register
                    </Button>
                </form>
                <div className="add-info">
                    <p>
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
