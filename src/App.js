import './App.css';
import ContainerPage from './component/ContainerPage/ContainerPage';
// import SectionContent from './component/Content/Content';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sx" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex' }}>
          <ContainerPage></ContainerPage>
        </Box>
      </Container>
    </div>
  );
}

export default App;
