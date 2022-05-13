import { gql } from '@apollo/client';

export const ADD_SONGS = gql `
    mutation INSERT_SONG($url: String!, $title: String!, $thumbnail: String!, $duration: Float!, $artist: String!) {
        insert_songs(objects: {url: $url, 
            title: $title, 
            duration: $duration, 
            thumbnail: $thumbnail, 
            artist: $artist}) {
          affected_rows
        }
      }
`

  