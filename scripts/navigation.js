function toggleMenu(){var e,t=$(".uhc-body-wrapper"),a=t.find(".uhc-body-light-box"),n=$(".header-wrapper").outerHeight(!0),o=getScrollBarWidth();$(".menu-icon").hasClass("active")?(e=!1,setTimeout(function(){t.removeClass("no-scroll"),t.removeAttr("style")},300)):(e=!0,t.addClass("no-scroll"),t.css("padding-right",o+"px")),TweenLite.fromTo(a,.3,{display:e?"none":"block",opacity:e?"0":"1"},{display:e?"block":"none",opacity:e?"1":"0"});var i=$(".uhc-nav"),s=$(".nav-wrapper");i.css("padding-bottom",n+"px"),s.css("top",n+"px"),TweenLite.fromTo(s,.3,{display:e?"none":"block",opacity:e?"0":"1"},{display:e?"block":"none",opacity:e?"1":"0"}),TweenLite.fromTo(i,.3,{transform:e?"translateY(-100px)":"translateY(0)"},{transform:e?"translateY(0)":"translateY(-100px)"}),toggleIcon()}function toggleSubMenu(e){function t(e){var t=e.find(".sub-nav");o<992?(TweenLite.set(t,{display:"block",height:"auto"}),TweenLite.from(t,.3,{display:"none",height:"0"}),e.addClass("active")):(TweenLite.set(t,{display:"block",height:"auto",opacity:"1"}),TweenLite.from(t,.3,{display:"none",height:"0",opacity:"0"}),e.addClass("active"))}function a(e){o<992?(TweenLite.to(e.find(".sub-nav"),.3,{display:"none",height:"0"}),e.removeClass("active")):(TweenLite.to(e.find(".sub-nav"),.3,{display:"none",height:"0",opacity:"0"}),e.removeClass("active"))}var n=$(".has-sub-nav.active"),o=$(window).width();e.hasClass("active")?a(e):n.length>0?(a(n),t(e)):t(e)}function clearStyles(e){"mobile"===e?($(".sub-nav").removeAttr("style"),$(".has-sub-nav").removeClass("active")):($(".menu-icon").removeClass("active"),$(".uhc-body-wrapper").removeClass("no-scroll").removeAttr("style"),$(".uhc-body-light-box").removeAttr("style"),$(".uhcg-nav-header .uhc-nav").removeAttr("style"),$(".nav-wrapper").removeAttr("style"),$(".nav-wrapper .uhc-nav").removeAttr("style"),$(".has-sub-nav").removeClass("active"))}function toggleIcon(){var e,t=$(".menu-icon"),a=$(".menu-line:nth-child(1)"),n=$(".menu-line:nth-child(2)"),o=$(".menu-line:nth-child(3)");e=!!t.hasClass("active"),TweenLite.to(a,.2,{transform:e?"translateY(0) rotate(0)":"translateY(1px) rotate(45deg)",margin:e?"":"0"}),TweenLite.to(n,.2,{opacity:e?"1":"0",margin:e?"":"0",display:e?"block":"none"}),TweenLite.to(o,.2,{transform:e?"translateY(0) rotate(0)":"translateY(-1px) rotate(-45deg)"}),t.toggleClass("active")}function throttle(e,t){var a=Date.now();return function(){a+t-Date.now()<0&&(e(),a=Date.now())}}function getScrollBarWidth(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var a=e.offsetWidth;t.style.overflow="scroll";var n=e.offsetWidth;return a==n&&(n=t.clientWidth),document.body.removeChild(t),a-n}function moveUtilities(){var e=$(window).width(),t=$(".uhc-nav-item--secondary");e>991?(t.each(function(e,t){$(this).appendTo(".uhcg-nav-header .uhc-nav")}),clearStyles()):(t.each(function(e,t){$(this).appendTo(".uhcg-nav .nav-wrapper .uhc-nav")}),clearStyles("mobile"))}$(document).ready(function(){$(".menu-icon").click(function(e){e.preventDefault(),$(this).hasClass("menu-active")?(toggleMenu(),$(this).removeClass("menu-active")):(toggleMenu(),$(this).addClass("menu-active"))}),$(".uhc-nav-item-link").click(function(e){var t=$(this).closest("li[class*=uhc-nav-item]");t.hasClass("has-sub-nav")&&(e.preventDefault(),t.hasClass("active")?(toggleSubMenu(t),$(this).blur()):toggleSubMenu(t))})}),window.addEventListener("resize",throttle(moveUtilities,50)),moveUtilities();