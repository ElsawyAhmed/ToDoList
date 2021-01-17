function add() {
    var tbodycontent = document.getElementById("tbody").innerHTML.valueOf();
    var newtask = document.getElementById("input").value;
    var checkBox = '<td> <input type ="checkbox" name = "done" id = "done" /> </td>'+' <td><input type="checkbox" name="cancel" id="cancel" /></td >'

    tbodycontent = tbodycontent + "<tr> <td> " + newtask + "</td> " + checkBox + "</tr>";
    console.log(tbodycontent);
    
    document.getElementById("tbody").innerHTML = tbodycontent;
}