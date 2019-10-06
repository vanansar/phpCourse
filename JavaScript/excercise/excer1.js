document.write("<table cellpadding=5 cellspacing=5>");

for (var i = 1; i <= 5; i++) {
    document.write("<tr>");
    for (var j = 1; j <= 5; j++) {
        document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>");