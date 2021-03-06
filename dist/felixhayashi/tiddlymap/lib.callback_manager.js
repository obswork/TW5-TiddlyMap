/*\

title: $:/plugins/felixhayashi/tiddlymap/callback_manager.js
type: application/javascript
module-type: library

@preserve

\*/
(function(){"use strict";var e=require("$:/plugins/felixhayashi/tiddlymap/utils.js").utils;var t=function(){this.wiki=$tw.wiki;this.logger=$tw.tiddlymap.logger;this.callbacks=e.getEmptyMap()};t.prototype.add=function(e,t,l){this.logger("debug",'A callback was registered for changes of "'+e+'"');this.callbacks[e]={execute:t,isDeleteOnCall:typeof l==="boolean"?l:true}};t.prototype.remove=function(e){if(this.callbacks[e]){this.logger("debug",'A callback for "'+e+'" will be deleted');delete this.callbacks[e]}};t.prototype.handleChanges=function(e){if(this.callbacks.length==0){this.logger("debug","No registered callbacks exist at the moment");return}for(var t in e){if(!this.callbacks[t])continue;if(this.wiki.getTiddler(t)){this.logger("debug",'A callback for "'+t+'" will be executed');this.callbacks[t].execute(t);if(!this.callbacks.isDeleteOnCall)continue}this.remove(t)}};exports.CallbackManager=t})();