import { Delete } from '@mui/icons-material'
import { Avatar, IconButton, Typography } from '@mui/material'
import React from 'react'




export default function FilaMusica() {

    const musicaFake = {
        titulo: 'Titulo da Musica',
        artista: 'Artista da musica',
        imagem: 'https://pbs.twimg.com/profile_images/1217784855368470531/epouecHA_400x400.jpg'
    }

    function MusicaNafila({ musica }) {
        const { imagem, titulo, artista } = musica

        return (

            <div style={{display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', margin: '10px'  }}>
                <Avatar src={imagem} alt="Capa do album" style={{width: '40px', heigth: '40px'}}/>
                <div>
                    <Typography variant="subtitle1">{titulo}</Typography>
                    <Typography variant="body2">{artista}</Typography>

                </div>
                <IconButton><Delete color="error"/></IconButton>
            </div>
        )

    }
    return (

        <div>
            <Typography>Próximos da fila (5)</Typography>
            {Array.from({ length: 5 }, () => musicaFake).map((musica, index) => {

                return (<MusicaNafila key={index} musica={musica} />)
            })
            }


        </div>

    )

}






