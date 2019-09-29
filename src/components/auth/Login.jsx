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
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import storeUser from '../../_helpers/_storeUser';

const useStyles = makeStyles(theme => ({
    textField: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(3),
    },
    button: {
        width: '100%'
    }
}));

export default function Login() {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [loading, setLoading] = useState(false);
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target['email'].value;
        const password = event.target['password'].value;        
        if (email !== '' && password !== '') {
            setLoading(true);
            axios.post('http://localhost:5000/api/user/login', {
                email: email,
                password: password
            }).then(function (response) {
                console.log(response.data);
                storeUser(response.data);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
                setLoading(false);
            });
        }
    }
    return (
        <div className="app-login-register">
            <div className="ALR-inner">
                <div className="logo">
                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-circle-6/1024/iTunes-512.png" alt="" className="img-fluid" />
                </div>
                <form method="post" className='login-form' noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                        name="password"
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
                    <Button type="submit" variant="contained" color="primary" size="large" component="button" className={classes.button}>
                        {
                            loading ?
                                <CircularProgress className={classes.progress} color="secondary" size={26} />
                                :
                                <span>Login</span>
                        }
                    </Button>
                </form>
                <div className="add-info">
                    <p>
                        Don't have an account? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
