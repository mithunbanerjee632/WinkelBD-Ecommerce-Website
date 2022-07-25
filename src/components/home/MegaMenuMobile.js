import React, {Component} from 'react';

class MegaMenuMobile extends Component {
    constructor() {
        super();
        this.MegaMenuMobile = this.MegaMenuMobile.bind(this);
    }

    MegaMenuMobile=(event)=>{
      let accor =   document.getElementsByClassName('accordionMobile');
      let accorLength = accor.length;

      let i;

        for(i=0;i<accorLength;i++){
            accor[i].addEventListener("click",function(){
                this.classList.toggle("active");

                var panel = this.nextElementSibling;

                if(panel.style.maxHeight){
                    panel.style.maxHeight =null;
                }else{
                    panel.style.maxHeight =panel.scrollHeight+ "px";
                }

            })
        }
    }


    render() {
        return (
            <div className="accordionMenuDivMobile animated slideInDown">
                <div className="accordionMenuDivInsideMobile">
                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>

                    <button className="accordionMobile" onClick={this.MegaMenuMobile}><img className="accordionMenuIconMobile" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                    <div className="panelMobile">
                        <ul>
                            <li><a href="#" className="accordionItemMobile">Men's Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's T-Shirt</a></li>
                            <li><a href="#" className="accordionItemMobile">Men's Pant</a></li>
                        </ul>
                    </div>



                </div>
            </div>
        );
    }
}

export default MegaMenuMobile;