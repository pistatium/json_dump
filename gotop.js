/*
�ڡ����Υȥåפإ������뤷�ư�ư
(c)Sapphirus.Biz

HREF�ˡ�#TOP�ס���ʸ������ʸ���ζ��̤�̵���ˤ������󥯤�
����å�������硢�������뤷�ƥڡ����ΰ��־�˰�ư���ޤ���
Ex.) <a href="#TOP">PAGE TOP</a>
*/
function setGoTop() {
	var aTagList = document.getElementsByTagName('a');
	for (var i = 0; i < aTagList.length; i++) {
		if (aTagList[i].href.match(/#top/i)) {
			aTagList[i].onclick = goPageTop;
		}
	}
}
var goTopMove = 20; // ��®�١�0:��ߡ��礭���ۤ��٤��ʤ��
var goTopPosi;
function goPageTop() { // ��Υ�����ȼ¹�
	var yPos = document.body.scrollTop || document.documentElement.scrollTop;
	mObj(yPos);
	return false;
}
function mObj(y, s) { // ��˲�®��ư
	if (s) goTopMove = s;
	goTopPosi = parseInt(y - y * 2 / goTopMove);
	scrollTo(0, goTopPosi);
	if (goTopPosi > 0) setTimeout('mObj(goTopPosi, goTopMove)', 1);
}
if (window.addEventListener) window.addEventListener('load', setGoTop, false);
if (window.attachEvent) window.attachEvent('onload', setGoTop);
