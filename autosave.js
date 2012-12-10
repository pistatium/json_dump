var autoSaveAndLoad = function(){};

if(typeof $ != 'function'){
    console.debug("[autoSave Error] Not Installed jQuery");
} else {
    autoSaveAndLoad = function(elem_id){
    	// url‚ÌŒã‚É?‚ð‚Â‚¯‚Ä•¶Žš—ñ‚ð“n‚·‚±‚Æ‚Å•ÊŒÂ‚Ì’l‚ð•Û‘¶‚Å‚«‚é
    	var prefix = '';
    	if(location.search.length > 1) {
    		 prefix = location.search.replace('?','');
    	}
    	
    	var elem   = $('#' + elem_id);
    	var ename  = prefix + '_ID_ ' + elem_id;
    	//‹N“®Žžload
    	if (localStorage.getItem(ename)){
    		elem.val(localStorage.getItem(ename));
    	}
    	//keyup‚Åsave
    	elem.bind('keyup', function() {
    		localStorage.setItem(ename, elem.val());
        });
    };
}