// import Data from "../project_data"
import './fifth_container.css';

function Fifth_Container(props){

    return (
        <div class="block__fifth__container">
            <div style={{ backgroundColor: "rgba(255,255,255,0.9"}}>
                <div class="b_fi_title">Our Offers</div>
                <div class="b_fi_text">After the complete readiness of the design project,you will receive a full  estimate for the repair and construction work, and you will know for sure:</div>
                <div class="b_fi_conts">
                    <div class="b_fi_cont_1">                
                        <img src={ } class="b_fi_1_img"   alt="" />
                        <div class="b_fi_1_text">Quality and Cost of Materials</div>
                    </div>
                    <div class="b_fi_cont_2">
                        <img src={ } class="b_fi_2_img"   alt="" />
                        <div class="b_fi_2_text">Volume and Cost of Work</div>
                    </div>
                    <div class="b_fi_cont_3">
                        <img src={ } class="b_fi_3_img"   alt="" />
                        <div class="b_fi_3_text">Work Schedule that takes into account all the details of the technologies process.</div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Fifth_Container;