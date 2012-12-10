var autoSaveAndLoad = function(){};

if(typeof $ != 'function'){
    console.debug("[autoSave Error] Not Installed jQuery");
} else {
    autoSaveAndLoad = function(elem_id){
    	// url�̌��?�����ĕ������n�����Ƃŕʌ̒l��ۑ��ł���
    	var prefix = '';
    	if(location.search.length > 1) {
    		 prefix = location.search.replace('?','');
    	}
    	
    	var elem   = $('#' + elem_id);
    	var ename  = prefix + '_ID_ ' + elem_id;
    	//�N����load
    	if (localStorage.getItem(ename)){
    		elem.val(localStorage.getItem(ename));
    	}
    	//keyup��save
    	elem.bind('keyup', function() {
    		localStorage.setItem(ename, elem.val());
        });
    };
}