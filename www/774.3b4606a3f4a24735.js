"use strict";(self.webpackChunksalon_web=self.webpackChunksalon_web||[]).push([[774],{7774:(_,m,a)=>{a.r(m),a.d(m,{ContactModule:()=>Z});var d=a(6895),g=a(4553),u=a(5439),p=a(5226),h=a.n(p),t=a(4650),f=a(7241),C=a(5830),r=a(7890),c=a(4006);function M(n,l){if(1&n&&(t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"mdb-icon",10),t.TgZ(3,"label"),t._uU(4),t.qZA()(),t.TgZ(5,"div",9),t._UZ(6,"mdb-icon",10),t.TgZ(7,"label"),t._uU(8),t.qZA()(),t.TgZ(9,"div",9),t._UZ(10,"mdb-icon",11),t.TgZ(11,"label"),t._uU(12),t.qZA()(),t.TgZ(13,"div",9),t._UZ(14,"mdb-icon",12),t.TgZ(15,"label"),t._uU(16),t.qZA()(),t.TgZ(17,"div",9),t._UZ(18,"mdb-icon",13),t.TgZ(19,"label",14),t._uU(20),t.qZA()()()),2&n){const o=t.oxw();t.xp6(4),t.hij(" ",o.util.general.address," "),t.xp6(4),t.lnq(" ",o.util.general.city," - ",o.util.general.country," - ",o.util.general.zip," "),t.xp6(4),t.hij(" ",o.util.general.email," "),t.xp6(4),t.hij(" ",o.util.general.mobile," "),t.xp6(4),t.hij(" ",o.util.general.email," ")}}const v=[{path:"",component:(()=>{class n{constructor(o,e){this.util=o,this.api=e,this.contact={name:"",email:"",message:"",status:"0",date:u().format("YYYY-MM-DD")},console.log("general",this.util.general)}ngOnInit(){}submit(){return console.log("contact",this.contact),""==this.contact.name||""==this.contact.email||""==this.contact.message?(this.util.errorMessage(this.util.translate("all fields are required")),!1):/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.contact.email)?(this.util.start(),void this.api.post("v1/contacts/create",this.contact).then(e=>{if(this.util.stop(),e&&e.status&&200==e.status&&e.data){const s={id:e.data.id,mediaURL:this.api.mediaURL,subject:this.util.translate("New Mail Request Received"),thank_you_text:this.util.translate("You have received new mail"),header_text:this.util.translate("New Contact Details"),email:this.util.general.email,from_mail:this.contact.email,from_username:this.contact.name,from_message:this.contact.message,to_respond:this.util.translate("We have received your request, we will respond on your issue soon")};console.log(s),this.api.post("v1/sendMailToAdmin",s).then(i=>{console.log(i)},i=>{console.log(i)}),this.contact.email="",this.contact.name="",this.contact.message="",e&&200==e.status?this.success():this.util.errorMessage(this.util.translate("Something went wrong"))}},e=>{console.log(e),this.util.stop(),this.util.errorMessage(this.util.translate("Something went wrong"))})):(this.util.errorMessage(this.util.translate("Please enter valid email")),!1)}success(){h().mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:this.util.translate("message sent successfully")})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(f.f),t.Y36(C.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact"]],decls:13,vars:9,consts:[[1,"container"],[1,"head_title"],[1,"row"],[1,"col-lg-6"],["type","text",1,"form-control",3,"ngModel","placeholder","ngModelChange"],["rows","5",1,"form-control",3,"ngModel","placeholder","ngModelChange"],["type","button","mdbWavesEffect","","mdbBtn","",1,"btn",3,"click"],["class","address_div",4,"ngIf"],[1,"address_div"],[1,"flex_box"],["fas","","icon","home"],["fas","","icon","envelope"],["fas","","icon","phone-alt"],["fas","","icon","print"],["for",""]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"input",4),t.NdJ("ngModelChange",function(i){return e.contact.name=i}),t.qZA(),t.TgZ(7,"input",4),t.NdJ("ngModelChange",function(i){return e.contact.email=i}),t.qZA(),t.TgZ(8,"textarea",5),t.NdJ("ngModelChange",function(i){return e.contact.message=i}),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return e.submit()}),t._uU(10),t.qZA()(),t.TgZ(11,"div",3),t.YNc(12,M,21,7,"div",7),t.qZA()()()),2&o&&(t.xp6(3),t.hij("",e.util.translate("Contact Us")," "),t.xp6(3),t.Q6J("ngModel",e.contact.name)("placeholder",e.util.translate("Full Name")),t.xp6(1),t.Q6J("ngModel",e.contact.email)("placeholder",e.util.translate("Email ID")),t.xp6(1),t.Q6J("ngModel",e.contact.message)("placeholder",e.util.translate("Write Message..")),t.xp6(2),t.hij("",e.util.translate("Submit")," "),t.xp6(2),t.Q6J("ngIf",e.util.general&&e.util.general.address))},dependencies:[d.O5,r.mT,r.b6,r.Ui,r.XI,c.Fj,c.JJ,c.On],styles:['@charset "UTF-8";label[_ngcontent-%COMP%]{display:block}.head_title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid lightgray;margin-bottom:15px;width:100%}.head_title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:bold;font-size:26px;text-transform:capitalize;margin:0}.row[_ngcontent-%COMP%]{margin-top:50px}input[_ngcontent-%COMP%]{margin-bottom:15px}.btn[_ngcontent-%COMP%]{background:#0b19df;border-radius:3px;color:#fff;width:100px;margin-top:30px;width:160px}.address_div[_ngcontent-%COMP%]{margin-top:30px;text-align:center;padding-left:20px}.address_div[_ngcontent-%COMP%]   .flex_box[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:15px;margin-bottom:20px;font-size:12px}.address_div[_ngcontent-%COMP%]   .flex_box[_ngcontent-%COMP%]   mdb-icon[_ngcontent-%COMP%]{font-size:20px;margin-right:10px;color:#0b19df}.address_div[_ngcontent-%COMP%]   .flex_box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0;font-family:bold;margin-left:10px}']}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(v),g.Bz]}),n})();var x=a(4466);let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,b,r.yi.forRoot(),x.m]}),n})()}}]);