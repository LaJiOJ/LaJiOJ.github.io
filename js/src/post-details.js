// build time:Mon Mar 23 2020 15:43:30 GMT+0800 (GMT+08:00)
$(document).ready(function(){t();function t(){var t=".post-toc";var a=$(t);var s=".active-current";a.on("activate.bs.scrollspy",function(){var s=$(t+" .active").last();e();s.addClass("active-current");a.scrollTop(s.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",e);$("body").scrollspy({target:t});function e(){$(t+" "+s).removeClass(s.substring(1))}}});$(document).ready(function(){var t=$("html");var a=200;var s=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var i="sidebar-panel-active";if(t.hasClass(e)){return}var o=$("."+i);var l=$("."+t.data("target"));s?o.velocity("transition.slideUpOut",a,function(){l.velocity("stop").velocity("transition.slideDownIn",a).addClass(i)}):o.animate({opacity:0},a,function(){o.hide();l.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){o.removeClass(i);l.addClass(i)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(a){a.preventDefault();var e=NexT.utils.escapeSelector(this.getAttribute("href"));var i=$(e).offset().top;s?t.velocity("stop").velocity("scroll",{offset:i+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:i},500)});var e=$(".post-toc-content");var i=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var o=e.length>0&&e.html().trim().length>0;if(i&&o){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
//rebuild by neat 