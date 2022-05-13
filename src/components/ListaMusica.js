import { PlayArrow, QueueMusic } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

import {useQuery } from '@apollo/client'
import { GET_SONGS } from '../graphql/quejy';



export default function ListaMusica() {

    const { data , loading, error } = useQuery(GET_SONGS);

    if(loading){
        return <div>Carregando...</div>
    }

    if(error){
        console.log(error)
        return <div>Deu um erro ai</div>
    }

    const musicaFake = {
        titulo: 'Titulo da Musica',
        artista: 'Artista da musica',
        imagem: 'https://pbs.twimg.com/profile_images/1217784855368470531/epouecHA_400x400.jpg'
    }


    function Musica({ musica }) {
        const { thumbnail, artist,  title} = musica;

        return (
            <Card style={{ display: 'flex', alignItems: 'center', margin: '10px'}}>

                <CardMedia image={thumbnail} style={{ objectFit: 'cover', width: '140px', height: '140px' }} />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant='h5' component="h2" >{title}</Typography>
                        <Typography variant='subtitle1' component="h3">{artist}</Typography>

                    </CardContent>
                    <CardActions>
                        <IconButton><PlayArrow color="secondary" /></IconButton>
                        <IconButton><QueueMusic color="secondary" /></IconButton>

                    </CardActions>
                </div>

            </Card>
        )
    }

    return (

        <div>

            { data.songs.map((song) => {

                return (<Musica key={song.id} musica={song} />)
            })}
        </div>

    )

}



