import Cards from './components/cards'

import loquesea from './components/data' 

function App() {
    console.log(loquesea)
    return <Cards items={loquesea}/>
}
export default App