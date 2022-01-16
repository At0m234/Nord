import './seventh_container.css';

function Seventh_Container(props){

    return (
        <div class="block__seventh__container">
            <div class="b_se_cont_0">
                <div class="b_se_title">What Our Clients Says</div>
                <div class="b_se_subtitle">People Matter And We Live It</div>
            </div>
            <div class="b_se_conts">
                <div class="b_se_cont_1">
                    {/* <img class="b_se_1_img" src={ } alt=""/> */}
                    <div class="b_se_1_container">
                        <div class="b_se_text_1_1">Chris Jordan</div>
                        <div class="b_se_text_1_2">"I have worked with a number of general contractors from across the country. But I can tell you  that nonecompare to the NORD Construction."</div>
                    </div>
                </div>
                <div class="b_se_cont_2">
                    {/* <img class="b_se_2_img" src={ }  alt="" /> */}
                    <div class="b_se_2_container" >
                        <div class="b_se_text_2_1">Mithcle Marsh</div>
                        <div class="b_se_text_2_2">"NORD has been our exclusive contractor since 1992 because of their integrity, commitment to qualityand performance"</div>
                    </div>
                </div>
                <div class="b_se_cont_3">
                    {/* <img class="b_se_3_img" src={ }   alt=""  /> */}
                    <div class="b_se_3_container">
                        <div class="b_se_text_3_1">Rob Asher</div>
                        <div class="b_se_text_3_2">"The people at Weitz are amazing. Our collaborative culture builds friendships among our team members."</div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Seventh_Container;