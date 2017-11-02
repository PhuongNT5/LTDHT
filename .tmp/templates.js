angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/404/404.html","<h1>404 - PAGE NOT FOUND</h1>");
$templateCache.put("app/components/admin/admin.html","<div class=admin><nav class=\"navbar navbar-inverse sidebar\" role=navigation><div class=container-fluid><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=#bs-sidebar-navbar-collapse-1><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=/admin>ADMIN</a></div><div class=\"collapse navbar-collapse\" id=bs-sidebar-navbar-collapse-1><ul class=\"nav navbar-nav\"><li><a href=/admin/theloai>QUẢN LÝ THỂ LOẠI <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a></li><li><a href=/admin/bantin>QUẢN LÝ BẢN TIN <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-book\"></span></a></li><li><a href=/admin/hinhanh>QUẢN LÝ HÌNH ẢNH <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-list-alt\"></span></a></li><li><a href=/admin/comment>QUẢN LÝ COMMENT <span style=font-size:16px; class=\"pull-right hidden-xs showopacity glyphicon glyphicon-edit\"></span></a></li></ul></div></div></nav><nav class=head><div class=title><span style=color:yellow;>NEWS</span> MARKER</div><div class=admin-info><h5>{{vm.name}}</h5></div></nav><div class=main><ui-view></ui-view></div></div>");
$templateCache.put("app/components/homepage/homepage.html","<div class=hotnews></div>");
$templateCache.put("app/components/layout/layout.html","<div class=\"pageContainer fontLayout\"><div class=backgroundLayout><nav class=\"navbar navbar-inverse navtop\" data-offset-top=197><div class=info-block style=float:left><a style=\"color:white ; font-size:11px\"><span class=\"glyphicon glyphicon-phone\" style=color:yellow;></span>0962-490-375</a> <a style=\"color:white ; font-size:11px\"><span class=\"glyphicon glyphicon-home\" style=color:yellow;></span>Man Thien-District 9 - HCM City</a> <a style=\"color:white ; font-size:11px\"><span class=\"glyphicon glyphicon-user\" style=color:yellow;></span></a></div><a style=\"color:white ; font-size:11px\" class=\"btn btn-default btn-outline btn-circle collapsed signin\" data-toggle=collapse href=#nav-collapse2 aria-expanded=false aria-controls=nav-collapse2><span class=\"glyphicon glyphicon-user\" style=color:yellow;></span>Login</a><div class=\"collapse nav navbar-nav nav-collapse slide-down\" id=nav-collapse2><form class=\"navbar-form navbar-right form-inline\" role=form><div class=form-group><label class=sr-only for=Email>Email</label> <input type=email class=form-control id=Email placeholder=Email autofocus required></div><div class=form-group><label class=sr-only for=Password>Password</label> <input type=password class=form-control id=Password placeholder=Password required></div><button type=submit class=\"btn btn-success\">Sign in</button></form></div></nav><nav class=\"navbar navbar-default navbottom\"><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar-collapse-2><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button><h1><img class=navbar-brand src=https://ld-wp.template-help.com/wordpress_65370_v1/wp-content/themes/newsmaker/assets/images/logo.png href=#></h1></div><div class=\"collapse navbar-collapse\" id=navbar-collapse-2><ul class=\"nav navbar-nav navbar-right\"><li><a href=/homepage>HOME</a></li><li><a href=#>THỜI SỰ</a></li><li><a href=#>ÂM NHẠC</a></li><li><a href=#>ẨM THỰC</a></li><li><a href=#>DU LỊCH</a></li><li><a href=#>THỜI TRANG</a></li><li><a href=#>THỂ THAO</a></li><li><form><input type=text class=search name=search placeholder=Search.. style=float:right;width:250px;></form></li></ul></div></div></nav></div><div class=main-panel><ui-view class=shuffle-animation></ui-view></div></div>");
$templateCache.put("app/components/admin/hinhanh/hinhanh.html","<create-new ng-if=\"vm.turn==1\"></create-new><div class=usermanage><h2 style=\"color: #448aff;text-align: center;\">LIST ẢNH</h2><hr><table class=\"table table-striped\"><div class=dropdown><a class=btn-top style=\"margin-right: 15px;\" ng-class=\"vm.turn==1?\'active\':\'\'\" ng-click=vm.turnActive(1) href=#><span class=\"glyphicon glyphicon-plus\"></span> &nbsp Create New Unit</a></div></table></div><thead><tr class=row-name><th>Id</th><th>Bản tin</th><th>Ảnh</th><th>Settings</th></tr></thead><tbody><tr class=row-content ng-repeat=\"x in vm.theloai track by $index\"><td>{{x.unit_id}}</td><td>{{x.name}}</td><td>{{x.title}}</td><td><img src={{x.picture}}></td><td><a class=\"btn btn-danger edit\" ng-click aria-label=Settings><i class=\"fa fa-trash\" aria-hidden=true></i></a> &nbsp <a class=\"btn btn-info edit\" href=path/to/settings aria-label=Settings><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></a></td></tr></tbody>");
$templateCache.put("app/components/admin/theloai/theloai.html","<create-new ng-if=\"vm.turn==1\"></create-new><div class=usermanage><h2 style=\"color: #448aff;text-align: center;\">LIST UNITS</h2><hr><table class=\"table table-striped\"><div class=dropdown><a class=btn-top style=\"margin-right: 15px;\" ng-class=\"vm.turn==1?\'active\':\'\'\" ng-click=vm.turnActive(1) href=#><span class=\"glyphicon glyphicon-plus\"></span> &nbsp Create New Unit</a></div></table></div><thead><tr class=row-name><th>Id</th><th>Tên Thể loại</th><th>Settings</th></tr></thead><tbody><tr class=row-content ng-repeat=\"x in vm.theloai track by $index\"><td>{{x.unit_id}}</td><td>{{x.name}}</td><td>{{x.title}}</td><td><img src={{x.picture}}></td><td><a class=\"btn btn-danger edit\" ng-click=vm.deleteUnit(x.unit_id) aria-label=Settings><i class=\"fa fa-trash\" aria-hidden=true></i></a> &nbsp <a class=\"btn btn-info edit\" href=path/to/settings aria-label=Settings><i class=\"fa fa-pencil-square-o\" aria-hidden=true></i></a></td></tr></tbody>");
$templateCache.put("app/shared/directives/program/list-program.html","<div class=\"col-sm-4 col-md-4\"><div class=unit ng-class=\"{color1: (program.unit_id%6)==1, color2: (program.unit_id%6)==2,color3: (program.unit_id%6)==3, color4: (program.unit_id%6)===4, color5: (program.unit_id%6)==5,color6: (program.unit_id%6)===0}\"><h2 class=tm_pb_link_box_title style=\"font-style:normal;text-align:center; font-weight:700;\">UNIT {{program.unit_id}}</h2><h2 class=tm_pb_link_box_title style=\"font-style:normal;text-align:center; font-weight:700;\">{{program.name}}</h2><figure><img src={{program.picture}} alt=\"\"></figure><div class=tm_pb_link_box_button_holder><a href=/unit/{{program.unit_id}} class=\"btn tm_pb_button\">Program Details</a></div></div></div>");
$templateCache.put("app/shared/directives/lesson/list-lesson.html","<div class=vocabulary>{{}}</div><div class=grammar></div>");
$templateCache.put("app/shared/directives/question/list-question.html","<div class=\"ques ques_col2\"><div class=\"toeic_q_select col2\"><div class=q_index>Câu: <strong>{{stt+ 1}}</strong></div><div class=q_description>{{question.description}}</div><div class=toeic_q_img></div><div class=\"q_select q_select_col2\" inx=0 value=0><div class=toeic_col2><label class=radio-inline ng-class=\"{choiced :(question.select == question.A), correct:(status ==\'submited\' && question.A == question.answer)}\"><input type=radio value={{question.A}} ng-model=question.select><span>A. {{question.A}}</span></label></div><div class=toeic_col2><label class=radio-inline ng-class=\"{choiced: question.select == question.B, correct:(status ==\'submited\' && question.B == question.answer)}\"><input type=radio value={{question.B}} ng-model=question.select><span>B. {{question.B}}</span></label></div><div class=toeic_col2><label class=radio-inline ng-class=\"{choiced: question.select == question.C, correct:(status ==\'submited\' && question.C ==question.answer)}\"><input type=radio value={{question.C}} ng-model=question.select><span>C. {{question.C}}</span></label></div><div class=toeic_col2><label class=radio-inline ng-class=\"{choiced: question.select == question.D, correct:(status ==\'submited\' && question.D == question.answer)}\"><input type=radio value={{question.D}} ng-model=question.select><span>D. {{question.D}}</span></label></div></div></div><div class=thpt_explain></div></div>");
$templateCache.put("app/shared/directives/test/list-test.html","<div class=\"col-sm-4 col-md-4\"><div class=\"one true\"><div><h3>Bài kiểm tra {{test.test_id}} <span class=tick style=margin-left:5px;><img src=../../../assets/images/checked.png></span></h3><p>{{test.title}}</p><p>{{test.name}}</p><div class=ab><a class=test1 ng-click=vm.getTest(test.test_id) ui-sref=layout.test({level:test.level})>Start</a></div></div></div></div>");
$templateCache.put("app/shared/directives/validatePass/widgets/widget-header.html","<div class=widget-head ng-class=\"{\'collapsive\': allowCollapse === \'true\'}\" ng-click=toggleContent()><div class=\"page-title pull-left\">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\"></div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");}]);