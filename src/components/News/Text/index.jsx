import React from 'react';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import style from './style.module.css';

class Text extends React.Component {
    state = {
        value: this.props.text,
        copied: false
    }

    render() {
        return (
            <Grid container item>
                <FormControl variant="outlined" className={style.textField}>
                    <InputLabel htmlFor="outlined-adornment-text">{this.props.label}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-text"
                        type="text"
                        value={this.state.value}
                        onChange={({target: {value}}) => this.setState({value, copied: false})}
                        className={style.outlinedInput}
                        endAdornment={
                            <InputAdornment position="end">
                                <Divider className={style.divider} orientation="vertical"/>
                                <CopyToClipboard text={this.state.value}
                                                 onCopy={() => this.setState({copied: true})}>
                                    <IconButton className={style.iconButton} aria-label="directions">
                                        <FileCopyIcon/>
                                    </IconButton>
                                </CopyToClipboard>
                            </InputAdornment>
                        }
                        labelWidth={this.props.label.length * 8 + 15}
                    />
                </FormControl>
            </Grid>
        );
    }
}

export default Text;
