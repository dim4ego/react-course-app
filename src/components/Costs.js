import "./Costs.css"
import CostItem from "./CostItem";

function Costs(props) {
    return (
    <div>
    
    <CostItem date={props.costs[0].date} description={props.costs[0].description } amount = {props.costs[0].amount}></CostItem>
    <CostItem date={props.costs[1].date} description={props.costs[1].description } amount = {props.costs[1].amount}></CostItem>
    <CostItem date={props.costs[2].date} description={props.costs[2].description } amount = {props.costs[2].amount}></CostItem>
    
     </div>
    );
}
export default Costs;