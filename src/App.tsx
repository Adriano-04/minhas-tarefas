import SideBar from './containers/sidebar'
import ListaDeTarefa from './containers/ToDoList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ListaDeTarefa />
      </Container>
    </>
  )
}

export default App
