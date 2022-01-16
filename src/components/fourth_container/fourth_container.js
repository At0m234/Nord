import './fourth_container.css';

function Fourth_Container(props){

    return (
        <div class="block__fourth__container">
            <div class="b_f_main_title">Our Services</div>
            <div class="b_f_conts">
                <div class="b_f_cont_1">
                    <div class="b_f_cont_all">
                        <img src={ } class="b_f_img"   alt="" /> 
                        <div class="b_f_cont_content">
                            <div class="b_f_title">Kitchen Remodeling</div>
                            <div class="b_f_text">Kitchen remodels that may add value typically include new appliances, cabinetry, countertops, flooring, and fixtures. Most remodels also take an eco-friendly approach to materials and appliances which must be factored into your budget.</div>
                        </div>
                    </div>
                    <div class="b_f_cont_all">
                        <img src={Data.fourth_icons}  class="b_f_img"   alt="" />
                        <div class="b_f_cont_content">
                            <div class="b_f_title">Bathroom Remodeling</div>
                            <div class="b_f_text">Bathroom remodeling consists more than simply replacing various fixtures in the bathroom. This usually involves a different design layout, relocation of existing fixtures or adding major new features such as a whirlpool, sauna, steam room, walk in shower, windows other than replacements or skylights.</div>
                        </div>
                    </div>
                    <div class="b_f_cont_all">
                        <img src={Data.fourth_icons}  class="b_f_img"   alt="" />
                        <div class="b_f_cont_content">
                            <div class="b_f_title">Home Remodeling</div>
                            <div class="b_f_text">Replacing windows, installing kitchen cabinets, creating wood structures, repairing roofs and floors, coordinating laborers, doing demolition work, and collaborating with other skilled craftsmen.</div>
                        </div>
                    </div>
                </div>
                <div class="b_f_cont_2">
                    <div class="b_f_cont_all">
                        <img src={Data.fourth_icons}  class="b_f_img"   alt="" />
                        <div class="b_f_cont_content">
                            <div class="b_f_title">HandyMan Services</div>
                            <div class="b_f_text">Repair work, maintenance work, are both interior and exterior, and are sometimes described as "side work", "odd jobs" or "fix-up tasks".</div>
                        </div>
                    </div>
                    <div class="b_f_cont_all">
                        <img src={Data.fourth_icons}  class="b_f_img"  alt=""  />
                        <div class="b_f_cont_content">
                            <div class="b_f_title">Attic Finishing</div>
                            <div class="b_f_text">When converting an attic to a living space, it must meet the same building requirements as the other rooms in your home.</div>
                        </div>
                    </div>
                    <div class="b_f_cont_all">
                        <img src={Data.fourth_icons}  class="b_f_img"  alt=""  />
                        <div class="b_f_cont_content">
                            <div class="b_f_title">Basement Finishing</div>
                            <div class="b_f_text">An unfinished basement is a space that’s not currently livable and habitable. When you’re in need of a basement finish, your current space typically lacks drywall, insulation, plumbing, and completed flooring. 
                            Partially finished basements may have some aspects scoped out, like electricity or basic drywall, but still need significant work to be fully finished. When planning your remodel, you’ll need to account for finishing your basement in your scope of work. Rest assured, your design-build partner will be there every step of the way.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fourth_Container;