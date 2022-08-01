class ValidationForm{
    static NameRegEx =  /^[A-Za-z\'\s\.\:\-]+$/;
    static EmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    static MobileNumRegEx=/^(?:\+88|88)?(01[3-9]\d{8})$/;
}

export default ValidationForm;