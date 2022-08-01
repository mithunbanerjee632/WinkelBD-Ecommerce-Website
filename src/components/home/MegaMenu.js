import React, {Component, Fragment} from 'react';

class MegaMenu extends Component {
    constructor() {
        super();
        this.state={

        }

        this.MegaMenu = this.MegaMenu.bind(this);
    }

    // componentDidMount() {
    //     this.MegaMenu();
    // }

    MegaMenu=(event)=>{
         var accor = document.getElementsByClassName("accordion");
        var accorLength = accor.length;

        var i;

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

        // event.target.classList.toggle("active");
        // let panel=event.target.nextElementSibling;
        // if(panel.style.maxHeight){
        //     panel.style.maxHeight=null;
        // }
        // else{
        //     panel.style.maxHeight=panel.scrollHeight+ "px"
        // }
    }


    render() {
        return (
            <div className="accordionMenuDiv animated slideInDown">
               <div className="accordionMenuDivInside">
                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

                   <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src="https://sc04.alicdn.com/kf/Ha76841196894464ba5add2039787e2ebF.jpg" />Men's Clothing</button>
                   <div className="panel">
                       <ul>
                           <li><a href="#" className="accordionItem">Men's Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's T-Shirt</a></li>
                           <li><a href="#" className="accordionItem">Men's Pant</a></li>
                       </ul>
                   </div>

               </div>
            </div>
        );
    }
}

export default MegaMenu;