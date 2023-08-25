import CostItem from "./components/CostItem";
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
    <div>
      <h1>Начнем изучение </h1>
      <CostItem date={costs[0].date} description={costs[0].description } amount = {costs[0].amount}></CostItem>
      <CostItem date={costs[1].date} description={costs[1].description } amount = {costs[1].amount}></CostItem>
      <CostItem date={costs[2].date} description={costs[2].description } amount = {costs[2].amount}></CostItem>
      
    </div>
  );
}

export default App;
