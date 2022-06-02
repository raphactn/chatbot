import * as React from 'react';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
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
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function Ichat() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [valueInput, setValueInput] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const handleQuestion = () => {
        setTimeout(function () {
            const ichat2 = document.getElementById('ichat');
            const text2 = document.createElement("p");
            text2.setAttribute("class", "bg-light pergunta");
            ichat2.appendChild(text2);
            if (valueInput !== "") {
                text2.innerText = 'Digite a opção desejada: \n 1. Primeira opção \n 2. Segunda opção \n 3. Terceira opção'
            }
            if (valueInput == '1') {
                text2.innerText = 'Você escolheu a primeira opção!'
            }
            if (valueInput == '2') {
                text2.innerText = 'Você escolheu a segunda opção!'
            }
            if (valueInput == '3') {
                text2.innerText = 'Você escolheu a terceira opção!'
            }
            text2.scrollIntoView()
        }, 700)
    }

    const handleSend = () => {
        const input = document.getElementById('filled-hidden-label-normal');
        if (input.value === "") {
            return
        }
        else {
            const ichat = document.getElementById('ichat');
            const text = document.createElement("p");
            text.setAttribute("class", "resposta");
            ichat.appendChild(text);
            text.innerText = valueInput;
            handleQuestion();
            input.value = "";
            text.scrollIntoView()
        }
    };


    return (
        <>
            <Button sx={{
                background: "#1976d2",
                '&:hover': {
                    background: "#1976d2",
                },
                position: 'fixed',
                bottom: 50,
                right: 50,
                padding: 2,
                borderRadius: 1,
            }}
                onClick={handleClick('top')}>
                {open ?
                    <CloseIcon sx={{ color: 'white' }} />
                    : <MessageIcon sx={{ color: 'white' }} />}

            </Button>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper sx={{ marginRight: 6, marginBottom: 3 }}>
                            <Card sx={{ width: 320, height: 490 }}>
                                <CardMedia>
                                    <Box sx={{ background: '#1976d2', flexGrow: 1, display: 'flex', gap: 2, p: 1 }}>
                                        <Avatar alt="Remy Sharp" src="botao-chatbot-icon.png" />
                                        <Typography sx={{
                                            marginTop: 1,
                                            color: 'white'
                                        }}>Chat Bot React</Typography>
                                    </Box>

                                    <CardContent sx={{ padding: '0px' }}>
                                        <Paper
                                            id="ichat"
                                            sx={{
                                                height: 360,
                                                boxShadow: 'none',
                                                background: '#f0f0f0',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: '5px',
                                                overflow: 'auto'
                                            }}>
                                            <p className='pergunta'>Olá, como posso te ajudar?</p>
                                        </Paper>
                                    </CardContent>
                                    <CardActions>
                                        <Stack
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
                                                onChange={(e) => setValueInput(e.target.value)}
                                                variant="filled"
                                                multiline
                                                InputProps={{
                                                    endAdornment: <SendIcon id="btn" position="end" sx={{ cursor: 'pointer' }} onClick={handleSend} />
                                                }}
                                            />
                                        </Stack>
                                    </CardActions>
                                </CardMedia>
                            </Card>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    );
}
