"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[859],{6859:(O,h,n)=>{n.r(h),n.d(h,{UsersModule:()=>F});var u=n(6895),c=n(8616),f=n(5226),p=n.n(f),t=n(4650),_=n(5830),x=n(7241),g=n(8423),m=n(502),d=n(4333);function U(s,o){if(1&s&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.Oqu(e.util.translate("No Data Found.."))}}function v(s,o){if(1&s&&(t.TgZ(0,"thead")(1,"tr")(2,"th"),t._uU(3),t.qZA(),t.TgZ(4,"th"),t._uU(5),t.qZA(),t.TgZ(6,"th"),t._uU(7),t.qZA(),t.TgZ(8,"th"),t._uU(9),t.qZA(),t.TgZ(10,"th"),t._uU(11),t.qZA()()()),2&s){const e=t.oxw();t.xp6(3),t.Oqu(e.util.translate("Cover")),t.xp6(2),t.Oqu(e.util.translate("Name")),t.xp6(2),t.Oqu(e.util.translate("Mobile")),t.xp6(2),t.Oqu(e.util.translate("Email")),t.xp6(2),t.Oqu(e.util.translate("Action"))}}function C(s,o){1&s&&(t.TgZ(0,"td"),t._UZ(1,"ngx-skeleton-loader",15),t.qZA())}const Z=function(){return[1,2,3,4,5]};function T(s,o){1&s&&(t.TgZ(0,"tr"),t.YNc(1,C,2,0,"td",13),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,Z)))}function A(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",16),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"c-badge",17),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.statusUpdate(l))}),t._uU(11),t.qZA(),t.TgZ(12,"c-badge",18),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.viewsInfo(l.id))}),t._uU(13),t.qZA(),t.TgZ(14,"c-badge",19),t.NdJ("click",function(){const l=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.deleteItem(l))}),t._uU(15),t.qZA()()()}if(2&s){const e=o.$implicit,i=t.oxw();t.xp6(2),t.Q6J("src",i.api.imageUrl+e.cover,t.LSH),t.xp6(2),t.AsE("",e.first_name," ",e.last_name,""),t.xp6(2),t.Oqu(e.country_code+" "+e.mobile),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Tol(1==e.status?"me-1 badge bg-success":"me-1 badge bg-dark"),t.Q6J("color",1==e.status?"success":"dark"),t.xp6(1),t.hij(" ",i.util.translate(1==e.status?"Active":"Deactived")," "),t.xp6(2),t.hij(" ",i.util.translate("View")," "),t.xp6(2),t.hij(" ",i.util.translate("Delete")," ")}}function y(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"pagination-controls",20),t.NdJ("pageChange",function(r){t.CHM(e);const l=t.oxw();return t.KtG(l.page=r)}),t.qZA()()}}const b=function(s){return{id:"pagin1",itemsPerPage:10,currentPage:s}},w=[{path:"",component:(()=>{class s{constructor(e,i,r){this.router=e,this.api=i,this.util=r,this.dummy=Array(10),this.dummyUsers=[],this.users=[],this.page=1,this.resetChanges=()=>{this.users=this.dummyUsers}}ngOnInit(){this.getAllUsers()}getAllUsers(){this.api.get_private("v1/users/getAllUsers").then(e=>{this.dummy=[],e&&e.status&&200==e.status&&e.success&&(console.log(">>>>>",e),e&&e.data.length>0&&(this.users=e.data,this.dummyUsers=e.data,console.log("======",this.users)))},e=>{this.dummy=[],console.log("Error",e),this.util.apiErrorHandler(e)}).catch(e=>{this.dummy=[],console.log("Err",e),this.util.apiErrorHandler(e)})}search(e){this.resetChanges(),console.log("string",e),this.users=this.filterItems(e)}filterItems(e){return this.users.filter(i=>(i.first_name+" "+i.last_name).toLowerCase().indexOf(e.toLowerCase())>-1)}setFilteredItems(){console.log("clear"),this.users=[],this.users=this.dummyUsers}getClass(e){return"1"==e||1==e?"badge badge-success":"0"==e||0==e?"badge badge-danger":"badge badge-warning"}viewsInfo(e){console.log(e),this.router.navigate(["users-details"],{queryParams:{id:e}})}deleteItem(e){console.log(e),p().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To Delete this user!"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(i=>{i&&i.value&&(console.log("update it"),this.util.show(),this.api.post_private("v1/users/deleteUser",e).then(r=>{this.util.hide(),this.util.success(this.util.translate("Deleted")),this.getAllUsers()},r=>{this.util.hide(),console.log("Error",r),this.util.apiErrorHandler(r)}).catch(r=>{this.util.hide(),console.log("Err",r),this.util.apiErrorHandler(r)}))})}addNew(){}statusUpdate(e){console.log(e);const i=1==e.status?"Deactive":"Active";p().fire({title:this.util.translate("Are you sure?"),text:this.util.translate("To ")+this.util.translate(i)+this.util.translate(" this user!"),icon:"question",showConfirmButton:!0,confirmButtonText:this.util.translate("Yes"),showCancelButton:!0,cancelButtonText:this.util.translate("Cancel"),backdrop:!1,background:"white"}).then(r=>{r&&r.value&&(console.log("update it"),e.status=1==e.status?0:1,this.util.show(),this.api.post_private("v1/profile/update",e).then(a=>{this.util.hide(),this.util.success(this.util.translate("Updated"))},a=>{this.util.hide(),console.log("Error",a),this.util.apiErrorHandler(a)}).catch(a=>{this.util.hide(),console.log("Err",a),this.util.apiErrorHandler(a)}))})}exportCSV(){let e=[];this.users.forEach(r=>{const l={id:this.util.replaceWithDot(r.id),first_name:this.util.replaceWithDot(r.first_name),last_name:this.util.replaceWithDot(r.last_name),cover:this.util.replaceWithDot(r.cover),country_code:this.util.replaceWithDot(r.country_code),mobile:this.util.replaceWithDot(r.mobile),email:this.util.replaceWithDot(r.email)};e.push(l)}),this.util.downloadFile(e,"users",["id","first_name","last_name","cover","country_code","mobile","email"])}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(c.F0),t.Y36(_.s),t.Y36(x.f))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-users"]],decls:19,vars:12,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row","flex_row"],[1,"col-lg-6"],["type","text","id","name",1,"form-control","form-control-lg",3,"placeholder","input"],["style","text-align: center;",4,"ngIf"],[1,"table","table-striped"],[4,"ngIf"],[4,"ngFor","ngForOf"],[2,"text-align","center"],["count","1","appearance","line"],["onError","this.src='assets/img/dummy.jpeg'",1,"img-responsive",2,"height","80px","width","80px","object-fit","cover",3,"src"],[3,"color","click"],["color","info",1,"me-1","badge","bg-info",3,"click"],["color","danger",1,"me-1","badge","bg-danger",3,"click"],["id","pagin1",3,"pageChange"]],template:function(e,i){1&e&&(t._UZ(0,"ngx-spinner",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"input",9),t.NdJ("input",function(l){return i.search(l.target.value)}),t.qZA()()(),t.YNc(11,U,3,1,"div",10),t.TgZ(12,"table",11),t.YNc(13,v,12,5,"thead",12),t.TgZ(14,"tbody"),t.YNc(15,T,2,2,"tr",13),t.YNc(16,A,16,11,"tr",13),t.ALo(17,"paginate"),t.qZA()(),t.YNc(18,y,2,0,"div",12),t.qZA()()()()()),2&e&&(t.xp6(6),t.hij(" ",i.util.translate("All Users")," "),t.xp6(4),t.Q6J("placeholder",i.util.translate("Search User")),t.xp6(1),t.Q6J("ngIf",!(null!=i.users&&i.users.length)&&0==i.dummy.length),t.xp6(2),t.Q6J("ngIf",null==i.users?null:i.users.length),t.xp6(2),t.Q6J("ngForOf",i.dummy),t.xp6(1),t.Q6J("ngForOf",t.xi3(17,7,i.users,t.VKq(10,b,i.page))),t.xp6(2),t.Q6J("ngIf",(null==i.users?null:i.users.length)>0))},dependencies:[u.sg,u.O5,g.Ro,m.xr,d.LS,d._s],styles:['@charset "UTF-8";']}),s})()}];let q=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(w),c.Bz]}),s})();var E=n(388),J=n(4006);let F=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,q,E.zk.forRoot(),J.u5,g.ef,m.hx.forRoot({animation:"progress-dark"}),d.JX]}),s})()}}]);