/*

jQuery SmartSearch by Gregory Zhdanov v0.1

*/
(function( $ ) {
  $.fn.smartsearch = function(options) {
      var array = this;
      var query = options.query;
      console.log('__SS__ query', query);
      var queryarr = query.split(' ');
      var filtered = [];
      var fields = options.fields.split(',');
      var synonyms = options.synonyms;
      console.log('__SS__ synonyms', synonyms);
      console.log('__SS__', this);
      function makeSearch(word, callback) {
            console.log('__SS__ цщкккв', word);
            if (synonyms !== undefined) {
                if (synonyms[word]) {
                   word  = synonyms[word];
                   console.log('__SS__ wordaftersynonymization', word)
                }
            }
            var regex = new RegExp(word.toLowerCase());
            var tofilter = array;
            if (filtered.length > 0) {
                tofilter = filtered;
            }
            async.filter(tofilter, function(searchitem, callback) {
                var searchstring = '';
                $(fields).each(function() {
                    searchstring += searchitem[this];
                })
                var filterexp = regex.test(searchstring.toLowerCase());
                callback(null, filterexp);
            }, function(err, results) {
                console.log('__SS__ search results', results);
                filtered = results;
                callback(null, results);
            });
      }
      async.each(queryarr, makeSearch, function(err, results){
          console.log('__SS__', 'Search is done', filtered);
      });
      return filtered;
  };
})(jQuery);