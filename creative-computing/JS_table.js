for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);


        if (i < 5) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }



        if (i < 3) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');
        