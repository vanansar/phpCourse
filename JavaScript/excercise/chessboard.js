document.write("<table cellpadding=4>");

for (var i = 1; i <= 8; i++) {
    document.write("<tr>");
    for (var j = 1; j <= 8; j++) {

		if((i+j)%2==0) {
			
	document.write('<td bgColor="black">'+'</td>');
			
		}
		else {
			document.write('<td bgColor="white">'+'</td>');
		}
		
    }
    document.write("</tr>");
}
document.write("</table>"); 