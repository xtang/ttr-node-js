(function(){
     function travel (node, cb) {
         if (node.nodeName === 'SCRIPT' || 
             node.nodeName === 'STYLE' || 
             node.nodeName === 'IFRAME' ||
             node.nodeType === '#comment') {
             return;
         }
         var childNodes = node.childNodes;
         if (!childNodes || childNodes.length == 0) {
             cb(node);
         } else {
             for (var i = 0; i < childNodes.length; ++i) {
                 var child = childNodes[i];
                 travel(child, cb);
             }
         }
     }

     function foo () {
         var body = document.body;
         nodes = [];
         var start = new Date();
         travel(body, function(node) {
                    nodes.push(node);
                });
     }
     function time(fn) {
         var start = new Date();
         fn.apply();
         console.log('Cost time ' + (new Date() - start) + 'ms');
     }
     time(foo);
 })();