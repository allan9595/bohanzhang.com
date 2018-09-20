if (self.CavalryLogger) { CavalryLogger.start_js(["o\/XQd"]); }

__d("CollectionsAddNewHub",["AsyncRequest","AsyncResponse","Event","Form","Keys","ProfileOverviewSection"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c,d,e,f){b("ProfileOverviewSection").callWithSection(e,function(b){this.initImpl(a,c,d,e,f,b.getNode())}.bind(this))},initImpl:function(a,c,d,e,f,g){__p&&__p();if(!a)return;var h=a.getCore();a.subscribe("select",function(b,h){if(!h.selected.type.match("addnew"))return;this.createHub(a,h.selected.orig_text||h.selected.text,c,d,e,f,g)}.bind(this));var i=a.getView();b("Event").listen(h.getElement(),"keydown",function(event){b("Event").getKeyCode(event)==b("Keys").RETURN&&!i.getSelection()&&(this.createHub(a,h.getValue(),c,d,e,f,g),event.kill())}.bind(this))},createHub:function(a,c,d,e,f,g,h){var i=a.getCore();i.setEnabled(!1);var j=function(){i.reset(),i.getElement().blur(),i.setEnabled(!0)};f=babelHelpers["extends"]({title:c,type:d,root_id:h.id,results:a.getData().buildQueryResults(c)},b("Form").serialize(g));new(b("AsyncRequest"))(e).setData(f).setHandler(j).setErrorHandler(function(a){j(),b("AsyncResponse").defaultErrorHandler(a)}).send()}};e.exports=a}),null);
__d("OGCollectionAddObject",["csx","ArbiterToken","AsyncRequest","CSS","DOM","DOMQuery","Form","JSLogger","Parent","ProfileOverviewSection","TidyArbiterMixin","TimelineAppCollection","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("JSLogger").create("og_collection_add_object"),i=babelHelpers["extends"]({ADD_PLACEHOLDER:"OGCollectionAddObject/addPlaceholder",NEW_ITEM:"OGCollectionAddObject/newItem",PLACEHOLDER:"OGCollectionAddObject/placeholder",REMOVE_PLACEHOLDER:"OGCollectionAddObject/removePlaceholder",subscribe:function(a,c,d){return b("ArbiterToken")},init:function(a,c,d,e){b("ProfileOverviewSection").callWithSection(e,function(b){this.initImpl(a,c,d,b.getNode(),e,b.id)}.bind(this))},initInReport:function(a,c,d){var e=b("Parent").bySelector(d,"._w8_");this.initImpl(a,c,d,e,null,null)},initImpl:function(a,c,d,e,f,g){__p&&__p();var j=b("DOMQuery").scry(e,"._620")[0];if(!j){h.error("grid_not_found",{collection_id:f,section:g,csx:".public/fbTimelineCollectionGrid/root"});return}c.subscribe("select",function(c,e){__p&&__p();if(!e.selected.uid||e.selected.type.indexOf("disabled")!=-1)return;i.inform(i.ADD_PLACEHOLDER,f);c=j.nextSibling;var g=null;c&&b("CSS").matchesSelector(c,"._3t3")&&(b("CSS").hide(j.lastChild),g=j.lastChild);b("TimelineAppCollection").addGenericPlaceholderToCollection(b("Form").serialize(d).collection_token,{entityID:e.selected.uid,suppressCount:!0});i.inform(i.PLACEHOLDER,{grid:j});c=babelHelpers["extends"]({action:"add",mechanism:"typeahead"},b("Form").serialize(d));new(b("AsyncRequest"))().setURI(a).setData(c).setRelativeTo(j).setErrorHandler(function(a){a=b("DOM").scry(j,'[data-item="'+e.selected.uid+'"]')[0];a&&b("DOM").remove(a);i.inform(i.REMOVE_PLACEHOLDER,f);g&&b("CSS").show(g)}).setHandler(function(a){b("TimelineAppCollection").incrementCount(f),g&&b("DOM").remove(g)}).setFinallyHandler(function(a){i.inform(i.PLACEHOLDER,{grid:j})}).send()})},replaceItem:function(a,c,d){var e=b("DOM").scry(a,'div[data-obj="'+c+'"]')[0];if(e){var f=b("Parent").bySelector(e,"._30f");f&&i.inform(i.REMOVE_PLACEHOLDER,f.id);b("DOM").remove(e.parentNode)}f=b("DOM").find(a,'[data-item="'+c+'"]._2804');b("DOM").replace(f,d);this.inform(i.NEW_ITEM,{grid:a,newItem:d})},prependItem:function(a,c){a=b("DOMQuery").scry(b("ge")(a),"._620")[0];b("DOM").prependContent(a,c);this.inform(i.NEW_ITEM,{grid:a,newItem:c})}},b("TidyArbiterMixin"));e.exports=i}),null);
__d("HubsTypeaheadView",["fbt","ContextualTypeaheadView","CSS","DOM","Event"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("ContextualTypeaheadView"));h=c&&c.prototype;function a(a,b){"use strict";h.constructor.call(this,a,b)}a.prototype.hide=function(){"use strict";return this.canHide?h.hide.call(this):null};a.prototype.reset=function(){"use strict";return this.canHide?h.reset.call(this):null};a.prototype._createFreeFormNode=function(a){"use strict";var b=a;this.showCreatePrompt?b=g._("Add \"{partial_name}\"",[g._param("partial_name",a)]):this.showAltCreatePrompt&&(b=g._("Create \"{partial_name}\"",[g._param("partial_name",a)]));return{text:b,orig_text:a,type:"addnew calltoaction",uid:"0"}};a.prototype.validateQuery=function(a){"use strict";return this.minQueryLength?a.length>=this.minQueryLength:!0};a.prototype.render=function(a,b,c){"use strict";__p&&__p();var d=[],e=Math.max(1,Math.floor(b.length/10));for(var e=e;e<b.length;e++)b[e].already_added&&(d.push(b[e]),b.splice(e,1),e--);b=b.concat(d);if(this.alwaysRender&&a!=="")if(this.allowFreeformEntry)this.validateQuery(a)&&b.push(this._createFreeFormNode(a));else{e=a.toLowerCase().trim();d=!1;for(var f=0;f<b.length;f++)if(typeof b[f].text==="string"&&e===b[f].text.toLowerCase().trim()){d=!0;break}!d&&this.validateQuery(a)&&b.push(this._createFreeFormNode(a))}return h.render.call(this,a,b,c)};a.initFreeformBoxes=function(){"use strict";var a=b("DOM").scry(document,"div.fbAddFormDialog")[0];if(!a)return;var c=b("DOM").find(a,"form");b("Event").listen(c,"submit",function(){b("DOM").scry(c,"div.fbFreeformInput").forEach(function(a){b("DOM").find(a,"input.inputtext").value&&b("CSS").addClass(a.firstChild,"selected")})})};Object.assign(a.prototype,{canHide:!0,hasHiddenDupes:!1});e.exports=a}),null);
__d("CollectionsRecommendationViewportTracking",["csx","DOM","ViewportTracking","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=55,k=200;function l(a){return{getDataFromConfig:function(a,b){b.useBanzai=!1},getAllStories:function(){var c=[].concat(b("DOM").scry(a.control,"._3owb")).concat(b("DOM").scry(a.control,"._5jvf")).concat(b("DOM").scry(a.control,"._3cxw"));return c},getStoryID:function(a){a=JSON.parse(a.getAttribute("data-gt"));return a&&a.token},getDataToLog:function(a){a=a.getAttribute("data-gt");a=Object.assign(a?JSON.parse(a):{},{evt:j});return{gt:a}}}}h=babelHelpers.inherits(m,b("ViewportTracking"));i=h&&h.prototype;m.prototype.cleanup=function(){n.clearSingleton(),i.cleanup.call(this)};function m(){h.apply(this,arguments)}var n=b("viewportTrackingBuilder")(function(a){a.record_delay=k;var b=new m(l(a));b.init(a);return b});e.exports=n}),null);
__d("TimelineCollectionAddRecommendation",["csx","cx","AppSectionCurationState","AsyncRequest","AsyncResponse","CollectionsRecommendationViewportTracking","CSS","DataStore","DOM","Event","OGCollectionAddObject","OnVisible","Parent","ProfileOverviewSection","ProfileTabUtils","TimelineAppCollection","TimelineAppSection","TimelineAppSectionCuration","TriggerablePageletLoader","$","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={},j="_5737",k=250;b("OGCollectionAddObject").subscribe(b("OGCollectionAddObject").ADD_PLACEHOLDER,function(a,c){b("TimelineAppCollection").incrementCount(c)});b("OGCollectionAddObject").subscribe(b("OGCollectionAddObject").REMOVE_PLACEHOLDER,function(a,c){b("TimelineAppCollection").decrementCount(c)});function l(a){a=b("DOM").scry(a,"._3owb")[0];if(a)return a.getAttribute("data-obj")}function m(a,b){if(b){var c=b.nextSibling;c&&q(c);i[a].carousel.removeItem(b)}i[a].carousel.refresh()}function n(a,b){__p&&__p();var c=[];a=i[a].carousel.getVisibleNodes();b=l(b);for(var d=0;d<a.length;++d){var e=l(a[d]);if(b===e)break;e&&c.push(e)}return c}function o(a){var b=[],c=i[a].carousel.getVisibleNodes();a=i[a].carousel.getVisibleNodesMax();for(var d=1;d<a-1;d++){if(d===c.lentgh)break;var e=l(c[d]);e&&b.push(e)}return b}function p(a,b){var c=n(a,b);m(a,b);return c}function q(a){b("CSS").addClass(a,"_42fn");var c=b("Event").listen(a,"mouseover",function(){b("CSS").removeClass(a,"_42fn"),c.remove()})}function r(a){var c=i[a];if(c.filled)return;var d=b("ProfileTabUtils").getIDForSectionKey(c.data.sk);b("ProfileOverviewSection").callWithSection(d,function(a){a=a.getActiveCollection().getToken();var e=b("TimelineAppSectionCuration").getSectionState(d);a==c.collectionToken&&e===b("AppSectionCurationState").showItems&&c.items.length>0&&(c.filled=!0,c.carousel.addItems(c.items))})}var s={addTriggerLoader:function(a,c,d){new(b("TriggerablePageletLoader"))({controller:"TimelineAppCollectionRecommendationPagelet",data:d,node:a,options:{crossPage:1,jsNonblock:1}},[{node:c,type:b("TriggerablePageletLoader").TRIGGER_ONVISIBLE}])},removeItemsByObjectIDs:function(a,c){__p&&__p();var d=i[c];if(!d)return;var e=i[c].carousel.getNode();a.forEach(function(a){a=b("DOM").scry(e,'[data-obj="'+a+'"]')[0];if(a){a=b("Parent").bySelector(a,"._58rc");p(c,a)}})},getPreviousItemIDs:function(a,b){return n(a,b)},getPageletID:function(a){return"pagelet_recommendation_"+a.split(":")[2]},init:function(a,c,d,e){__p&&__p();var f=i[a]={carousel:c,collectionToken:d.collection_token,data:d,isFirst:!0,showPlusButtonItem:e.items[0],items:e.items,postUri:e.post_uri,removeUri:e.remove_uri,nextLinkData:e.next_link_data,filled:e.filled,headerPageletID:e.header_pagelet_id,viewportTracking:b("CollectionsRecommendationViewportTracking").factory({control:c.getNode()})};new(b("OnVisible"))(f.carousel.getNode(),function(){var c=function(){r(a)};b("TimelineAppSection").subscribe("changeCollection",c);b("TimelineAppSectionCuration").register(b("ProfileTabUtils").getIDForSectionKey(d.sk),c);c()},!0,0);var g=b("Event").listen(f.carousel.getNode(),"mouseenter",function(a){g.remove(),f.showPlusButtonItem&&b("CSS").removeClass(f.showPlusButtonItem,j)});b("tidyEvent")([f.carousel.subscribe("needsitems",s.reloadRecommendation.bind(null,f)),f.carousel.subscribe("refreshed",f.viewportTracking.fireTimer.bind(f.viewportTracking)),f.carousel.subscribe("lastelementremoved",function(a){b("TimelineAppSectionCuration").informState(b("AppSectionCurationState").hide,d.header_pagelet_id),setTimeout(function(){b("TimelineAppCollection").switchToNullStateCurationContent(d.collection_token)},k)})]);b("tidyEvent")(b("Event").listen(f.carousel.getNextLink(),"mousedown",function(b){f.nextLinkData.rec_list_items=o(a),f.carousel.getNextLink().setAttribute("data-gt",JSON.stringify(f.nextLinkData))}));b("tidyEvent")(b("Event").listen(f.carousel.getNode(),"click",function(c){__p&&__p();var e=b("Parent").byTag(c.getTarget(),"a");if(!e)return;var g="_gx8",h="_vfm",i="_4-k4";g=b("CSS").hasClass(e,g)||b("CSS").hasClass(e,h);h=!g&&b("CSS").hasClass(e,i);if(g||h){i=b("Parent").bySelector(e,"._58rc");h=b("DOM").find(i,"._3owb");var j=h.getAttribute("data-obj");e=JSON.parse(b("DataStore").get(h,"post",null));h=p(a,i);if(g){b("TimelineAppCollection").addGenericPlaceholderToCollection(f.collectionToken,{entityID:j});i=f.isFirst||0;delete f.isFirst;new(b("AsyncRequest"))(f.postUri).setData(babelHelpers["extends"]({action:"add",item_id:j,ignored_item_ids:h,is_first:i,underlying_entity_id:j,log_feedback:Number(Object.prototype.hasOwnProperty.call(d.taste_items_ids,j))},e)).setErrorHandler(function(a){b("AsyncResponse").defaultErrorHandler(a),b("TimelineAppCollection").removePlaceholderFromCollection(f.collectionToken,j)}).send();c.prevent()}else new(b("AsyncRequest"))(f.removeUri).setData(babelHelpers["extends"]({objectid:j,ignored_item_ids:h},e)).send()}}))},reloadRecommendation:function(a){!a.asyncing&&a.filled&&(a.asyncing=new(b("AsyncRequest"))("/ajax/open_graph/recommendation_reload/").setData(a.data).send())},requestSuggestions:function(a,c){if(!(a in i))return;var d=i[a].data;new(b("AsyncRequest"))("/ajax/open_graph/similar_suggestions/").setData({pagelet_id:a,ogobjectid:c,session_id:d.session_id,collection_token:d.collection_token}).setRelativeTo(b("$")(b("ProfileTabUtils").getIDForSectionKey(d.sk))).setHandler(this.onRequestSuggestionsComplete.bind(this,a)).send()},onRequestSuggestionsComplete:function(a){b("TimelineAppSectionCuration").refreshState(b("AppSectionCurationState").showItems,b("ProfileTabUtils").getIDForSectionKey(i[a].data.sk))},removeItemFromRecommendations:function(a,b){return p(a,b)},plusRecommendation:function(a,c,d,e,f,g){__p&&__p();var h=i[a];b("TimelineAppCollection").addPlaceholderToCollection(f,d);f=i[c];if(a!=c&&f){f=b("DOM").scry(f.carousel.getNode(),'[data-obj="'+e+'"]');if(f&&f.length>0){e=b("Parent").bySelector(f[0],"._58rc");m(c,e)}}g?f=p(a,d):f=n(a,d);c=h.isFirst||0;delete h.isFirst;return{ignored_item_ids:f,is_first:c,session_id:h.sessionID}},populateSuggestionsList:function(a,b,c,d,e){a=i[a];a.asyncing=!1;b.length===0?a.carousel.endCarousel():(a.data.exclude_ids=c,Object.assign(a.data.taste_items_ids||{},d),a.carousel.addItems(b),a.data.cursor=e)}};e.exports=s}),null);
__d("TimelineCollectionAddTagSuggestItem",["csx","cx","Animation","Arbiter","CSS","DOM","Ease","Parent","TimelineCollectionAddRecommendation"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a,c,d,e,f){"use strict";this.$1=c,this.$2=d,this.$3=f,this.$4=b("Parent").byAttribute(c,a),this.$5=b("DOM").scry(c,"._2ca6")[0],this.$6=b("DOM").find(c,"._5epd"),this.$7=b("DOM").find(c,"._2ca7"),this.$8=b("DOM").find(c,"._2ca8"),this.$9=b("DOM").find(c,"._5ep9"),e.subscribe("confirm",this.$10.bind(this)),e.subscribe("reject",this.$11.bind(this)),b("Arbiter").subscribe("PhotoTagger.TAG_SUGGESTION_CONFIRMED/"+this.$3,this.$10.bind(this)),b("Arbiter").subscribe("PhotoTagger.TAG_SUGGESTION_REJECTED/"+this.$3,this.$11.bind(this))}a.prototype.$10=function(){"use strict";this.$12(),this.$13(this.$6,1,.4,400).go(),this.$13(this.$7,0,1,400).go(),setTimeout(function(){this.$13(this.$1,1,0,400).checkpoint(1,this.$14.bind(this)).go()}.bind(this),750)};a.prototype.$11=function(){"use strict";this.$12(),this.$13(this.$6,1,.4,600).go(),this.$13(this.$1,1,0,600).checkpoint(1,this.$14.bind(this)).go()};a.prototype.$12=function(){"use strict";b("CSS").hide(this.$5),b("CSS").hide(this.$8),b("CSS").hide(this.$9),b("CSS").addClass(this.$1,"_2ca5")};a.prototype.$13=function(a,c,d,e){"use strict";return new(b("Animation"))(a).from("opacity",c).to("opacity",d).ease(b("Ease").makePowerInOut(2)).duration(e)};a.prototype.$14=function(){"use strict";b("TimelineCollectionAddRecommendation").removeItemFromRecommendations(this.$2,this.$4)};e.exports=a}),null);
__d("TimelineCollectionAddTagSuggestSelector",["ArbiterMixin","AsyncRequest","Event","mixin","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(a,c,d,e,f,h){"use strict";g.constructor.call(this),this.$TimelineCollectionAddTagSuggestSelector1=a,this.$TimelineCollectionAddTagSuggestSelector2=f,this.$TimelineCollectionAddTagSuggestSelector3=h,b("tidyEvent")(b("Event").listen(a,"click",this.$TimelineCollectionAddTagSuggestSelector4.bind(this,d,"confirm")),b("Event").listen(c,"click",this.$TimelineCollectionAddTagSuggestSelector4.bind(this,e,"reject")))}a.prototype.$TimelineCollectionAddTagSuggestSelector4=function(a,event){"use strict";this.inform(event),new(b("AsyncRequest"))(a).setData(this.$TimelineCollectionAddTagSuggestSelector5(event)).send()};a.prototype.$TimelineCollectionAddTagSuggestSelector5=function(event){"use strict";return event=="confirm"?this.$TimelineCollectionAddTagSuggestSelector2:this.$TimelineCollectionAddTagSuggestSelector3};e.exports=a}),null);
__d("TimelineCollectionUnlikeHandler",["Arbiter","AsyncRequest","CSS","PageLikeConstants","ProfileTabUtils","TimelineAppCollection"],(function(a,b,c,d,e,f){var g={};a={init:function(a,c,d){g[a]={buttons:d,collectionToken:c},b("Arbiter").subscribe(b("PageLikeConstants").UNLIKED,this._showUndo),b("Arbiter").subscribe("Collection/removeProfileConnection",this._showUndo)},_showUndo:function(a,c){a=g[c.profile_id];a&&(b("CSS").hide(a.buttons),b("TimelineAppCollection").decrementCount(b("ProfileTabUtils").getIDForCollectionToken(a.collectionToken)),new(b("AsyncRequest"))("/ajax/timeline/app_collection_item/unlike/fbpage/").setData({collection_token:a.collectionToken,profile_id:c.profile_id}).send(),g[c.profile_id]=null)}};e.exports=a}),null);
__d("TypeaheadRequireSelection",["Event"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._typeahead=a}a.prototype.enable=function(){"use strict";var a=this._typeahead.getCore(),c=a.getElement().form;function d(){a.getHiddenValue()||a.reset()}d();this._subscription=a.subscribe("blur",d);c&&(this._eventListener=b("Event").listen(c,"submit",d))};a.prototype.disable=function(){"use strict";this._typeahead.getCore().unsubscribe(this._subscription),this._subscription=null,this._eventListener&&(this._eventListener.remove(),this._eventListener=null)};Object.assign(a.prototype,{_subscription:null,_eventListener:null});e.exports=a}),null);