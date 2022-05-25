import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import MessageIcon from '@mui/icons-material/Message';
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function Ichat() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
  const handleSend = () => {
   alert('funcionou')
  };
    return (
        <Box sx={{ width: 500 }}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Button sx={{ position: 'fixed', bottom: 50, right: 50, background: '#1976d2', padding: 3, borderRadius: 100, }} onClick={handleClick('top')}>
                        {open ?
                            <CloseIcon sx={{ color: 'white' }} />
                            : <MessageIcon sx={{ color: 'white' }} />}
                    </Button>
                </Grid>
            </Grid>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper sx={{ marginRight: 6, marginBottom: 3 }}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardMedia
                                />
                                <Typography sx={{ background: '#1976d2', color: 'white', p: 2, textAlign: 'center' }}>Chat Bot React</Typography>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Stack
                                        component="form"
                                        sx={{
                                            width: '100%',
                                        }}
                                        spacing={2}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            hiddenLabel
                                            id="filled-hidden-label-normal"
                                            defaultValue=""
                                            variant="filled"
                                            InputProps={{
                                                endAdornment: <SendIcon position="end" sx={{ cursor: 'pointer'}} onClick={handleSend}/>
                                              }}
                                        />
                                    </Stack>
                                        
                                </CardActions>
                            </Card>
                        </Paper>
                    </Fade>
                )}
            </Popper>

        </Box>
    );
}
