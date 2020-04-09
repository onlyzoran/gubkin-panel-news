import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    textField: {
        width: '100%',
    },
}));

const Text = (props) => {
    const classes = useStyles();

    const textAreaRef = useRef(null);

    return (
        <Grid container item>
            <FormControl variant="outlined" className={classes.textField}>
                <InputLabel htmlFor="outlined-adornment-text">{props.label}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-text"
                    type="text"
                    ref={textAreaRef}
                    value={props.text}
                    // endAdornment={
                    //     <InputAdornment position="end">
                    //         <Divider className={classes.divider} orientation="vertical"/>
                    //             <IconButton className={classes.iconButton} aria-label="directions">
                    //                 <FileCopyIcon/>
                    //             </IconButton>
                    //     </InputAdornment>
                    // }
                    labelWidth={props.label.length * 8 + 15}
                />
            </FormControl>
        </Grid>
    );
}

export default Text;
