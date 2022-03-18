import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { registerUser } from '../store/actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText'; //maybe to give tips on password
import ModalAlert from './ModalAlert';
import { clearErrors } from '../store/actions/errActions';
import '../styles/registration.css';

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
});

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: 'url(https://source.unsplash.com/lySzv_cqxH8)',
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            country: '',
            modalState: false,
            termsConditions: false,
            showPassword: false,
            usernameError: false,
            passwordError: false,
            emailError: false,
            firstNameError: false,
            lastNameError: false,
            countryError: false,
            errorTitle: '',
            errorMsg: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    handleTandC = () => {
        this.setState({ termsConditions: !this.state.termsConditions });
    };

    handlePhoto = async (e) => {
        console.log(this.state.avatar); //not needed
        await this.setState({ avatar: e.target.files[0] });
        console.log(this.state.avatar); //not needed
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        //destructure fields from state
        const { avatar, username, password, email, firstName, lastName, country } = this.state;
        //created form data to be able to upload image (and include registerForm)
        const fd = new FormData(document.getElementById('registerForm'));
        fd.append('avatar', avatar);
        console.log(fd);

        //toogle UI error
        if (username === '') {
            this.setState({ usernameError: true });
        } else {
            this.setState({ usernameError: false });
        }
        if (password === '') {
            this.setState({ passwordError: true });
        } else {
            this.setState({ passwordError: false });
        }
        if (email === '') {
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
        if (firstName === '') {
            this.setState({ firstNameError: true });
        } else {
            this.setState({ firstNameError: false });
        }
        if (lastName === '') {
            this.setState({ lastNameError: true });
        } else {
            this.setState({ lastNameError: false });
        }
        if (country === '') {
            this.setState({ countryError: true });
        } else {
            this.setState({ countryError: false });
        }

        //toggle modal msg
        if (
            username === '' ||
            password === '' ||
            email === '' ||
            firstName === '' ||
            lastName === '' ||
            country === ''
        ) {
            this.setState({ errorMsg: 'Please enter all fields.', modalState: true });
            //else, submit form
        }
        //uncomment!
        // else {
        //   this.props.registerUser({ avatar, username, password, email, firstName, lastName, country });
        // }
        console.log('Form was sent');
    };

    handleCloseAlert = async () => {
        if (this.props.error.status !== null) {
            this.props.clearErrors();
        } else if (this.state.modalState) {
            await this.setState({ modalState: false });
        }
    };

    render() {
        const { classes, isAuthenticated, error } = this.props;
        const {
            avatar,
            username,
            password,
            showPassword,
            email,
            firstName,
            lastName,
            country,
            termsConditions,
        } = this.state;

        if (isAuthenticated) {
            return <Redirect to='/' />;
        } else {
            return (
                <div className={classes.root}>
                    {error.status !== null ? (
                        <ModalAlert
                            title={`Error ${error.status}: Cannot Register`}
                            msg={error.msg}
                            handleCloseAlert={this.handleCloseAlert}
                        />
                    ) : this.state.modalState ? (
                        <ModalAlert
                            title={'Cannot register'}
                            msg={this.state.errorMsg}
                            handleCloseAlert={this.handleCloseAlert}
                        />
                    ) : null}
                    <form id='registerForm' onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='Form-mui-parent'>


                            <div className='Form-avatar' style={{ backgroundImage: avatar }}></div>

                            <input
                                name='avatar'
                                type='file'
                                accept='/images/*'
                                id='upload-button'
                                hidden
                                onChange={(e) => this.handlePhoto(e)}
                            />
                            <InputLabel htmlFor='upload-button'>
                                <Button color='primary' component='span' size='small'>
                                    Change Photo
                                </Button>
                            </InputLabel>



                            <FormControl fullWidth className={classes.margin} variant='outlined'>
                                <InputLabel htmlFor='register-username'>Username</InputLabel>
                                <OutlinedInput
                                    id='register-username'
                                    name='username'
                                    value={username}
                                    onChange={this.handleChange}
                                    placeholder='billtravel97'
                                    labelWidth={75}
                                    error={this.state.usernameError}
                                />
                            </FormControl>
                            <FormControl fullWidth className={clsx(classes.margin)} variant='outlined'>
                                <InputLabel htmlFor='register-password'>Password</InputLabel>
                                <OutlinedInput
                                    id='register-password'
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={this.handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                                edge='end'
                                                id='show-password'>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                    error={this.state.passwordError}
                                    helper
                                />
                                <FormHelperText>Minimum 6 characters</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth className={classes.margin} variant='outlined'>
                                <InputLabel htmlFor='register-email'>E-mail</InputLabel>
                                <OutlinedInput
                                    id='register-email'
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    splaceholder='billjohnson@email.com'
                                    labelWidth={45}
                                    error={this.state.emailError}
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin} variant='outlined'>
                                <InputLabel htmlFor='register-firstName'>First Name</InputLabel>
                                <OutlinedInput
                                    id='register-firstName'
                                    name='firstName'
                                    value={firstName}
                                    onChange={this.handleChange}
                                    placeholder='William'
                                    labelWidth={80}
                                    error={this.state.firstNameError}
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin} variant='outlined'>
                                <InputLabel htmlFor='register-lastName'>Last Name</InputLabel>
                                <OutlinedInput
                                    id='register-lastName'
                                    name='lastName'
                                    value={lastName}
                                    onChange={this.handleChange}
                                    placeholder='Johnson'
                                    labelWidth={80}
                                    error={this.state.lastNameError}
                                />
                            </FormControl>
                            <FormControl fullWidth variant='outlined' className={classes.formControl}>
                                <InputLabel id='demo-simple-select-outlined-label'>Country</InputLabel>
                                <Select
                                    labelId='demo-simple-select-outlined-label'
                                    id='demo-simple-select-outlined'
                                    value={country}
                                    onChange={this.handleChange}
                                    name='country'
                                    labelWidth={55}
                                    error={this.state.countryError}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <ArrowDropDownIcon
                                                aria-label='drop down menu'
                                                onMouseDown={this.handleMouseDownPassword}
                                                edge='end'
                                                id='dropdown'></ArrowDropDownIcon>
                                        </InputAdornment>
                                    }>
                                    <MenuItem value=''>
                                        <em>Choose</em>
                                    </MenuItem>
                                    <MenuItem value='AU'>Australia</MenuItem>
                                    <MenuItem value='BR'>Brazil</MenuItem>
                                    <MenuItem value='NL'>Netherlands</MenuItem>
                                    <MenuItem value='PE'>Peru</MenuItem>
                                    <MenuItem value='ES'>Spain</MenuItem>
                                    <MenuItem value='SW'>Sweden</MenuItem>
                                    <MenuItem value='UK'>United Kingdom</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                id='checkbox'
                                control={
                                    <Checkbox onClick={this.handleTandC} value='termsConditions' color='primary' />
                                }
                                label='I agree to the terms and conditions of MYtinerary'
                            />
                            <FormControl fullWidth className={classes.formControl}>
                                <Button
                                    disabled={!termsConditions}
                                    type='submit'
                                    name='submit'
                                    id='submit-button'
                                    variant='contained'
                                    className={`register ${termsConditions ? 'active' : null}`}>
                                    Sign Up
                                </Button>
                            </FormControl>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.users.isAuthenticated,
        isFetching: state.users.isFetching,
        error: state.errors,
    };
};

export default connect(mapStateToProps, { registerUser, clearErrors })(
    withStyles(styles)(RegisterForm)
);