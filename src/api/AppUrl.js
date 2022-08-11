class AppUrl {
    static BaseUrl = "http://127.0.0.1:8000/api/"


    static VisitorDetails = this.BaseUrl+"visitorDetails"
    static ContactDetails = this.BaseUrl+'contactDetails';
    static SiteInfoDetails = this.BaseUrl+'siteInfoDetails';
    static CategoryDetails = this.BaseUrl+'categoryDetails';


    static ProductListByRemark(remarks){
        return this.BaseUrl+'productListBYRemark/'+remarks;
    }

    static ProductListByCategory(category){
        return this.BaseUrl+'productByCategory/'+category;
    }

    static ProductListBySubCategory(category,subcategory){
        return this.BaseUrl+'productBySubcategory/'+category+'/'+subcategory;
    }

    static SliderDetails = this.BaseUrl+'sliderDetails';

}

export default AppUrl;