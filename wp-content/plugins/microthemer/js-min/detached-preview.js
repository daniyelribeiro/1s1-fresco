function valid_mt_opener(e,t){try{return t&&t.TvrMT&&!t.closed&&-1<t.document.domain.indexOf(e.document.domain)}catch(e){return!1}}var MTdetached,MTWindow=!!valid_mt_opener(window,window.opener)&&window.opener,MTDetachedWindow=!0;MTWindow&&MTWindow.TvrMT?jQuery(document).ready(function(e){var t,n,o,d;(MTdetached={stat:{tvr:e("#tvr"),front:e("#v-frontend-wrap"),frontInner:e("#v-frontend"),win:window,html:e("html"),iframe:e("#viframe")},set_vars:function(){MTWindow=window.opener,t=MTWindow.TvrMT,n=t.TvrUi,t.TvrCom,t.mod.MTint,t.mod.MTloop,t.mod.MTdd,t.mod.MTsave,t.mod.MTsass,t.mod.MTace,t.mod.MTgrid,d=t.mod.MTlayout,t.tvrsprintf,MTWindow.TvrLang,t.MTdetached=MTdetached,t.detachedWin=window,o?t.MTF=o:o=t.MTF},iframe_loaded:function(){o=MTWindow.TvrMT.MTF},init:function(){if(this.set_vars(),MTlocal.set_vars(),d.set_vars(),!d.preview_is_detached||!d.preview_is_detached())return MTdetached.deactivate_window(),!1;n.placeholderFrame=!0,MTlocal.maybe_load_site_preview(),MTlocal.apply_rulers(),MTlocal.updateSuggestionsMenuReference(),n.default_to_tab("mq"),MTlocal.setup_event_listeners(!0)},deactivate_window:function(){this.stat.front.addClass("window-inactive"),this.stat.frontInner.remove(),window=MTdetached=!1},remove_window_inactive_notice:function(){this.stat.front.removeClass("window-inactive")},add_html_class:function(e){this.stat.tvr.addClass(e)},remove_html_class:function(e){this.stat.tvr.removeClass(e)},getLocalSuggestionsMenuEl:function(){return MTlocal.getSuggestionsMenuEl()},getLocalContextMenuEl:function(){return MTlocal.getContextMenuEl()},toggle_context_menu:function(e){e.$clicked.hasClass("on")?MTdetached.close_context_menu():MTdetached.show_context_menu(e)},show_context_menu:function(e){MTlocal.show_context_menu(e)},close_context_menu:function(e){MTlocal.close_context_menu(e)}}).init()}):jQuery(document).ready(function(e){document.getElementById("v-frontend-wrap").classList.add("window-inactive")});