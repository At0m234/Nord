// import Data from "../project_data"
import './sixth_container.css';

function Sixth_Container(props){

    return (
        <div class="block__sixth__container">
            <div class="b_si_title">Our Latest Projects</div> 
            <div class="b_si_containers">
                <div class="b_si_container">
                    {/* <img class="b_si_img"  src={ }  alt="" /> */}
                    <div class="b_si_text">Eagle House Dilapidations</div>
                </div> 
                <div class="b_si_container">
                    {/* <img class="b_si_img"  src={ }  alt="" /> */}
                    <div class="b_si_text">Hotel Accommodation Refurbishments</div>
                </div>
                <div class="b_si_container">
                    {/* <img class="b_si_img"  src={ }  alt="" /> */}
                    <div class="b_si_text">Hotel Bathroom Refurbishments</div>
                </div>
            </div>
        </div>   
    )
}

export default Sixth_Container;