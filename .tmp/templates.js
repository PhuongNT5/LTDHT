angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/404/404.html","<h1>404 - PAGE NOT FOUND</h1>");
$templateCache.put("app/components/admin/admin.html","<div class=admin><nav class=\"navbar navbar-inverse sidebar\" role=navigation><div class=container-fluid><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=#bs-sidebar-navbar-collapse-1><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=/admin>ADMIN</a></div><div class=\"collapse navbar-collapse\" id=bs-sidebar-navbar-collapse-1><ul class=\"nav navbar-nav\"><li><a href=/admin/theloai>QUẢN LÝ THỂ LOẠI <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a></li><li><a href=/admin/bantin>QUẢN LÝ BẢN TIN <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-book\"></span></a></li><li><a href=/admin/hinhanh>QUẢN LÝ HÌNH ẢNH <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-list-alt\"></span></a></li><li><a href=/admin/comment>QUẢN LÝ COMMENT <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-edit\"></span></a></li></ul></div></div></nav><nav class=head><div class=title><span style=color:yellow;>NEWS</span> MARKER</div><div class=admin-info><h5>{{vm.name}}</h5></div></nav><div class=main><ui-view></ui-view></div></div>");
$templateCache.put("app/components/homepage/homepage.html","<div class=homepage><div class=hotnews><div class=left-hotnews><a href=/newspage/{{vm.bantins[0].Id}}><img src={{vm.bantins[0].Anh[1].Anh}}></a><div class=title-new><h2>{{vm.bantins[0].TenBantin}}</h2></div></div><div class=right-hotnews><div class=new-top><a href=/newspage/{{vm.bantins[1].Id}}><img src={{vm.bantins[1].Anh[1].Anh}}></a><div class=title-new><h2>{{vm.bantins[1].TenBantin}}</h2></div></div><div class=new-top><a href=/newspage/{{vm.bantins[2].Id}}><img src={{vm.bantins[2].Anh[1].Anh}}></a><div class=title-new><h2>{{vm.bantins[2].TenBantin}}</h2></div></div></div></div><div class=container><div class=row><div class=col-md-12><div id=Carousel class=\"carousel slide\"><ol class=carousel-indicators><li data-target=#Carousel data-slide-to=0 class=active></li><li data-target=#Carousel data-slide-to=1></li></ol><div class=carousel-inner><div class=\"item active\"><div class=row><div class=col-md-3><a href=/newspage/{{vm.bantins[3].Id class=thumbnail><img src={{vm.bantins[3].Anh[0].Anh}} alt=Image style=max-width:100%;></a><p>{{vm.bantins[3].TenBantin}}</p></div><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div></div></div><div class=item><div class=row><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div><div class=col-md-3><a href=# class=thumbnail><img src=http://placehold.it/250x250 alt=Image style=max-width:100%;></a></div></div></div></div><a data-slide=prev href=#Carousel class=\"left carousel-control\">‹</a> <a data-slide=next href=#Carousel class=\"right carousel-control\">›</a></div></div></div></div><div class=bantin ng-repeat=\"theloai in vm.theloais\"><list-bantin theloai=theloai></list-bantin></div></div>");
$templateCache.put("app/components/layout/layout.html","<div class=\"pageContainer fontLayout\"><div class=backgroundLayout><nav class=\"navbar navbar-inverse navtop\" data-offset-top=197><div class=info-block style=float:left><a style=\"color:white ; font-size:11px\"><span class=\"glyphicon glyphicon-phone\" style=color:yellow;></span>0962-490-375</a> <a style=\"color:white ; font-size:11px\"><span class=\"glyphicon glyphicon-home\" style=color:yellow;></span>Man Thien-District 9 - HCM City</a> <a style=\"color:white ; font-size:11px\"><span class=\"glyphicon glyphicon-user\" style=color:yellow;></span></a></div><a style=\"color:white ; font-size:11px\" class=\"btn btn-default btn-outline btn-circle collapsed signin\" data-toggle=collapse href=#nav-collapse2 aria-expanded=false aria-controls=nav-collapse2><span class=\"glyphicon glyphicon-user\" style=color:yellow;></span>Login</a> <a style=\"color:white ; font-size:11px\" data-toggle=modal class=\"btn btn-default btn-outline btn-circle register\" id=myBtn><span class=\"glyphicon glyphicon-user\" style=color:yellow;></span>Register</a><div class=\"collapse nav navbar-nav nav-collapse slide-down\" id=nav-collapse2><form class=\"navbar-form navbar-right form-inline\" role=form><div class=form-group><label class=sr-only for=Email>Email</label> <input type=email class=form-control id=Email placeholder=Email autofocus required></div><div class=form-group><label class=sr-only for=Password>Password</label> <input type=password class=form-control id=Password placeholder=Password required></div><button type=submit class=\"btn btn-success #0be6af\">Sign in</button></form></div><div class=\"modal fade\" id=myModal role=dialog><div class=modal-dialog><div class=modal-content><div class=modal-header style=\"padding:35px 50px; background-color:#0be6af\"><button type=button class=close data-dismiss=modal>&times;</button><h4><span class=\"glyphicon glyphicon-lock\"></span> Register</h4></div><div class=modal-body style=\"padding:40px 50px;\"><form role=form><div class=form-group><label for=usrname><span class=\"glyphicon glyphicon-user\"></span> Username</label> <input type=text class=form-control id=usrname placeholder=\"Enter email\"></div><div class=form-group><label for=psw><span class=\"glyphicon glyphicon-eye-open\"></span> Password</label> <input type=text class=form-control id=psw placeholder=\"Enter password\"></div><div class=form-group><label for=psw><span class=\"glyphicon glyphicon-eye-open\"></span>Confirm Password</label> <input type=text class=form-control id=psw placeholder=\"Enter confirm password\"></div><div class=checkbox><label style=color:#0be6af><input type=checkbox value checked>Forget Password</label></div><button type=submit style=background-color:#0be6af class=\"btn btn-success btn-block\"><span class=\"glyphicon glyphicon-off\"></span> Register</button></form></div><div class=modal-footer><button type=submit class=\"btn btn-danger btn-default pull-left\" data-dismiss=modal><span class=\"glyphicon glyphicon-remove\"></span> Cancel</button><p>Not a member? <a href=#>Sign Up</a></p><p>Forgot <a href=#>Password?</a></p></div></div></div></div></nav><nav class=\"navbar navbar-default navbottom\"><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar-collapse-2><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button><h1><img class=navbar-brand src=https://ld-wp.template-help.com/wordpress_65370_v1/wp-content/themes/newsmaker/assets/images/logo.png href=#></h1></div><div class=\"collapse navbar-collapse\" id=navbar-collapse-2><ul class=\"nav navbar-nav navbar-right\"><li><a href=/homepage>HOME</a></li><li ng-repeat=\"x in vm.theloais\"><a href=/theloaidetail/{{x.Id}}>{{x.TenTheloai}}</a></li><li><form><input type=text class=search name=search placeholder=Search.. style=float:right;width:250px;></form></li></ul></div></div></nav></div><div class=main-panel><ui-view class=shuffle-animation></ui-view></div></div>");
$templateCache.put("app/components/newspage/newspage.html","<div class=new-content><div class=theloai><h2>{{vm.theloai.TenTheloai}}</h2></div><div class=content><div class=newsName><h2>{{vm.bantin.TenBantin}}</h2></div><div class=content-detail><p class=title>{{vm.bantin.Tieude}}</p><p>{{vm.bantin.Noidung}}</p></div><div class=detail-image ng-repeat=\"anhBantin in vm.bantin.Anh\"><img src={{anhBantin.Anh}}><p class=motaHinhanh>{{anhBantin.Mota}}</p></div><div class=tacgia><h4>*Author {{vm.bantin.TenTacgia}}</h4></div></div><div class=comment><div class=comment-title><img src=../../assets/images/chat.png><h2>Comment</h2></div><div class=comment-content><div class=row><div class=col-md-6><div class=user-avatar><img src=../../assets/images/user.png></div><div class=\"widget-area no-padding blank\"><div class=status-upload><form><textarea placeholder=\"Write comment\"></textarea> <button type=submit class=\"btn btn-success #0be6af\"><i class=\"fa fa-share\"></i>Save</button></form></div></div></div></div></div></div><div></div></div>");
$templateCache.put("app/components/theloaidetail/theloaidetail.html","<div class=theloaidetail><div class=listbantin ng-repeat=\"bantin in vm.news\"><div class=newbantin><a href=/newspage/{{bantin.Id}}><img class=images src={{bantin.Anh[0].Anh}}></a><div class=tomtatbt><p>{{bantin.TenBantin}}</p><p>{{bantin.Tieude}}</p></div></div></div></div>");
$templateCache.put("app/shared/directives/bantin-theloai/bantin-theloai.html","<div class=bantin-theloai><div class=tenTheloai><h2>{{theloai.TenTheloai}}</h2></div></div>");
$templateCache.put("app/shared/directives/list-bantin/list-bantin.html","<div class=new-content><div class=theloai><h2>{{theloai.TenTheloai}}</h2></div><div class=listbantin ng-repeat=\"bantin in vm.news\"><div class=newbantin><a href=/newspage/{{bantin.Id}}><img class=images src={{bantin.Anh[0].Anh}}></a><div class=tomtatbt><h4>{{bantin.TenBantin}}</h4><p>{{bantin.Tieude}}</p></div></div></div></div>");
$templateCache.put("app/components/admin/bantin/bantin.html","<create-new ng-if=\"vm.turn==1\"></create-new><div class=usermanage><h2 style=\"color: #448aff;text-align: center;\">LIST NEWS</h2><hr><table class=\"table table-striped\"><div class=dropdown><a class=btn-top style=\"margin-right: 15px;\" ng-class=\"vm.turn==1?\'active\':\'\'\" ng-click=vm.turnActive(1) href=#><span class=\"glyphicon glyphicon-plus\"></span> &nbsp Create New</a></div></table></div><thead><tr class=row-name><th>Id</th><th>Tên Thể loại</th><th>Tên Ban tin</th><th>Noi dung</th><th>Settings</th></tr></thead><tbody><tr class=row-content ng-repeat=\"x in vm.bantins track by $index\"><td>{{x.Id}}</td><td>{{x.Theloai}}</td><td>{{x.Tenbantin}}</td><td>{{x.Noidung}}</td><td><a class=\"btn btn-danger edit\" ng-click=deleteBantin(x.id) aria-label=Settings><i class=\"fa fa-trash\" aria-hidden=true></i></a> &nbsp <a class=\"btn btn-info edit\" href=path/to/settings aria-label=Settings><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></a></td></tr></tbody>");
$templateCache.put("app/components/admin/comment/comment.html","");
$templateCache.put("app/components/admin/hinhanh/hinhanh.html","<create-new ng-if=\"vm.turn==1\"></create-new><div class=usermanage><h2 style=\"color: #448aff;text-align: center;\">LIST ẢNH</h2><hr><table class=\"table table-striped\"><div class=dropdown><a class=btn-top style=\"margin-right: 15px;\" ng-class=\"vm.turn==1?\'active\':\'\'\" ng-click=vm.turnActive(1) href=#><span class=\"glyphicon glyphicon-plus\"></span> &nbsp Create New Image</a></div></table></div><thead><tr class=row-name><th>Id</th><th>Ảnh</th><th>Mo ta</th><th>Settings</th></tr></thead><tbody><tr class=row-content ng-repeat=\"x in vm.hinhanhs track by $index\"><td>{{x.Id}}</td><td><img src={{x.Anh}} style=\"width:20px; height:20px;\"></td><td>{{x.Mota}}</td><td><a class=\"btn btn-danger edit\" ng-click=deleteHinhanh(x.id) aria-label=Settings><i class=\"fa fa-trash\" aria-hidden=true></i></a> &nbsp <a class=\"btn btn-info edit\" href=path/to/settings aria-label=Settings><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></a></td></tr></tbody>");
$templateCache.put("app/components/admin/theloai/theloai.html","<create-new ng-if=\"vm.turn==1\"></create-new><div class=usermanage><h2 style=\"color: #448aff;text-align: center;\">LIST THỂ LOẠI</h2><hr><table class=\"table table-striped\"><div class=dropdown><a class=btn-top style=\"margin-right: 15px;\" ng-class=\"vm.turn==1?\'active\':\'\'\" ng-click=vm.turnActive(1) href=#><span class=\"glyphicon glyphicon-plus\"></span> &nbsp Create New Unit</a></div></table></div><thead><tr class=row-name><th>Id</th><th>Tên Thể loại</th><th>Settings</th></tr></thead><tbody><tr class=row-content ng-repeat=\"x in vm.theloais track by $index\"><td>{{x.$index}}</td><td>{{x.TenTheloai}}</td><td><img src={{x.picture}}></td><td><a class=\"btn btn-danger edit\" ng-click=vm.deleteTheloai(x.id) aria-label=Settings><i class=\"fa fa-trash\" aria-hidden=true></i></a> &nbsp <a class=\"btn btn-info edit\" href=path/to/settings aria-label=Settings><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></a></td></tr></tbody>");
$templateCache.put("app/shared/directives/validatePass/widgets/widget-header.html","<div class=widget-head ng-class=\"{\'collapsive\': allowCollapse === \'true\'}\" ng-click=toggleContent()><div class=\"page-title pull-left\">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\"></div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");}]);