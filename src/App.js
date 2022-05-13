
import { Grid, useMediaQuery } from '@mui/material';
import AdicionaMusica from './components/AdicionaMusica';
import Header from './components/Header';
import ListaMusica from './components/ListaMusica';
import TocadorMusica from './components/TocadorMusica';

function App() {
  const telaGrande = useMediaQuery('(min-width: 900px)');

  return (
    <>
      <Header />
      <Grid container style={{ marginTop: '80px' }}>
        <Grid item md={7} xs={12}>
          <AdicionaMusica />
          <ListaMusica />
        </Grid>
        <Grid  style={ telaGrande ? 
        {position: 'fixed', width: '100%', right: 10, top: 10} :
        {position: 'fixed', width: '100%', left: 0, bottom: 10}
        } item md={5}  xs={12}
        >
          <TocadorMusica />
        </Grid>
      </Grid>
    </>

  );
}

export default App;
