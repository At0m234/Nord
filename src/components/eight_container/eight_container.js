import './eight_container.css';

function Eight_Container(props){

    return (
        <div class="block__eigth__container">
            <div style={{backgroundColor: "rgba(0,0,0,0.8)", width: "100%", height: "100%",justifyContent: "center" }}>
                <div class="b_ei_cont_title">
                    <div class="b_ei_title">Get In Touch With Us</div>
                    <div class="b_ei_subtitle">Message us Now:</div>
                </div>
                <div class="b_ei_cont_sub">
                    <div class="b_ei_cont_info">
                        <div class="b_ei_text">We welcome queries from all our stakeholders and would like to hear from you</div>
                        <div class="b_ei_cont_element">
                            {/* <img class="b_ei_img" src={ }  alt="" /> */}
                            <div class="b_ei_adress">8361 18th Ave NW, Seattle, WA 98117 </div> 
                        </div>
                        <div class="b_ei_cont_element">
                            {/* <img class="b_ei_img"  src={ }    alt="" /> */}
                            <div class="b_ei_phone">+1 (206) 376-6295</div>
                        </div>
                        <div class="b_ei_cont_element">
                            {/* <img class="b_ei_img"  src={ }    alt="" /> */}
                            <div class="b_ei_email">Info@nord.construction</div>
                        </div>
                    </div>

                    <form class="b_ei_form" style={{border:"transparent"}}>
                        <input class="b_ei_form_name" placeholder="Name" style={{backgroundColor:"transparent"}}/>
                        <input class="b_ei_form_phone"style={{backgroundColor:"transparent"}} placeholder="Phone"/>
                        <input class="b_ei_form_email"style={{backgroundColor:"transparent"}} placeholder="Email"/>

                        <input class="b_ei_form_message"  style={{backgroundColor:"transparent"}}placeholder="Message"/>
                        <button class="b_ei_form_button">
                        <div class="b_ei_form_button_text">SUBMIT</div>
                        </button>
                    </form>
                </div>
                <div class="b_ei_link_cont">
                    {/* <img class="b_ei_logo"  src={Data.eight_logo} alt=""  /> */}
                    <div class="b_ei_images">
                        {/* <img class="b_ei_link_img"  src={Data.eight_icons_1}   onClick={()=>{
                            window.location = "https://www.google.com/maps/place/NORD+CONSTRUCTION,+8361+18th+Ave+NW,+Seattle,+WA+98117/@47.690475,-122.3803374,13z/data=!4m2!3m1!1s0x5490172aabd00825:0x93e8ef5fe6827356?hl=en-us"   
                         }}   alt="" /> */}
                        {/* <img class="b_ei_link_img"  src={Data.eight_icons_2}  onClick={()=>{
                            window.location = "https://m.yelp.com/biz/nord-construction-seattle"   
                        }}  
                            alt="" />
                        <img class="b_ei_link_img"  src={Data.eight_icons_4}   onClick={()=>{
                            window.location = "https://instagram.com/nord.construction?utm_medium=copy_link"   
                        }}    alt="" />
                        <img class="b_ei_link_img"  src={Data.eight_icons_5}  onClick={()=>{
                            window.location = "https://m.facebook.com/Nord-Construction-104836122073727/"   
                        }}alt="" /> */}
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Eight_Container;