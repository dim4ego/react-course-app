import Costs from "./components/Costs";
const costs =[
  {
    date : new Date(2023,2,12),
    description : 'Холодильник',
    amount : 999.99
  },
  {
    date : new Date(2021,22,22),
    description : 'Macbook',
    amount : 1254.72
  },
  {
    date : new Date(2022,2,2),
    description : 'Джинсы',
    amount : 49.99
  },

]

function App() {
  return (
   <Costs costs = {costs} />
  );
}

export default App;
