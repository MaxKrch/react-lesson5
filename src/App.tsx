import Cardlist from './components/card-list'
import { cards } from './mock'

function App() {
  return (
    <div className="my-0 mx-auto bg-[#FAFAFA] p-2 min-h-[100vh] min-w-[300px] max-w-[1200px] w-[90%] flex flex-col gap-4 justify-between items-center">
      <Cardlist cards={cards} />
    </div>
  )
}

export default App
