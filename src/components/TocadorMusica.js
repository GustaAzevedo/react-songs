import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardMedia, IconButton, Slider, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import FilaMusica from './FilaMusica';




export default function TocadorMusica() {

    const telaGrande = useMediaQuery('(min-width: 900px)');


    return (

        <>
            <Card style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardContent >
                        <Typography variant='h5' component='h2'>Titulo da musica</Typography>
                        <Typography variant='subtitle1' component='h3'>Nome do artista</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><SkipPrevious /></IconButton>
                        <IconButton><PlayArrow /></IconButton>
                        <IconButton><SkipNext /></IconButton>
                        <Typography>00:32:17</Typography>
                    </CardActions>
                    <CardMedia image="https://pbs.twimg.com/profile_images/1217784855368470531/epouecHA_400x400.jpg" style={{width: '140px', height: '140px'}}  />
                </div>
                <Slider type="range" min={0} max={1} step={0.01} style={{marginLeft: '30px', width: '90%'}} />

            </Card>
                
            {
                telaGrande &&
                <FilaMusica/>
            }
            
        </>

    )

}



