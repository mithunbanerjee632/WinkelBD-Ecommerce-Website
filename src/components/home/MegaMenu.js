import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class MegaMenu extends Component {
    constructor(props) {
        super();
        this.state={

        }

        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount() {
        this.MegaMenu();
    }

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
        const myLists = this.props.MenuData;
        const myView = myLists.map((ParentList,i)=>{

            return <div key={i.toString()}>
                <button className="accordion" onClick={this.MegaMenu}><img className="accordionMenuIcon" src={ParentList.ParentCategoryImage} />{ParentList.ParentCategoryName}</button>
                <div className="panel">
                    <ul>
                        {
                            (ParentList.SubCategory).map((ChildList,i)=>{
                               return <li key={i.toString()}>
                                   <Link to={"ProductListBySubcategory/"+ChildList.category1_name+"/"+ChildList.category2_name} className="accordionItem">{ChildList.category2_name}</Link>
                               </li>
                            })
                        }



                    </ul>
                </div>
            </div>
        })




        return (
            <div className="accordionMenuDiv animated slideInDown">
               <div className="accordionMenuDivInside">

                   {myView}
               </div>
            </div>
        );
    }
}

export default MegaMenu;