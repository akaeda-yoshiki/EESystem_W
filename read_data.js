var data_id = [], data_name = [], data_grade = [];
data_gradea = "fsdfaf";
$(document).ready(function () {
    /**
     * Ajax通信メソッド
     *  type  : HTTP通信の種類
     *  url   : リクエスト送信先のURL
     *  data  : サーバに送信する値
     */
    $.ajax({
        type: "POST",
        url: "http://192.168.0.159/2018grade4/kaihatu_zemi/akaeda/EESystem_S/read.php",
        dataType: "json",
    }).done(function (data, dataType) {
        // successのブロック内は、Ajax通信が成功した場合に呼び出される

        // 結果が0件の場合
        if (data == null) alert('データが0件でした');
        // read_data = data.concat();
        // read_data = data;

        // set_read_data(data);
        // 返ってきたデータの表示
        // var $content = $('#content');
        // $content.append(data);
        // for (var i = 0; i < data.length; i++) {
        //     $content.append(data[i].id + "|" + data[i].name + "|" + data[i].grade + "&nbsp;&nbsp;");
        //     data_id[i] = data[i].id;// data_id.push(data[i].id);
        //     data_name.push(data[i].name);
        //     data_grade.push(data[i].grade);
        //     $content.append(data_id[i] + "|" + data_name[i] + "|" + data_grade[i] + "<br>");
        // }
        create_table(data);
    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        // 通常はここでtextStatusやerrorThrownの値を見て処理を切り分けるか、単純に通信に失敗した際の処理を記述します。

        // this;
        // thisは他のコールバック関数同様にAJAX通信時のオプションを示します。

        // エラーメッセージの表示
        alert('Error : ' + errorThrown);
    });

    // for (var i = 0; i < 10; i++) {
    // $content.append(data[i].id + "||" + data[i].name + "|" + data[i].grade + "&nbsp;&nbsp;");
    // data_id[i] = data[i].id;// data_id.push(data[i].id);
    // data_name.push(data[i].name);
    // data_grade.push(data[i].grade);
    // $content.append(data_id[i] + "||" + data_name[i] + "|" + data_grade[i] + "<br>");
    // }
});

function create_table(read_data) {
    // var read_data = data;
    // document.write("<br><br><br><br><br><br><br>sdasdaas");
    // document.write("<table id='mytable'><tr><th>氏名</th><th>ID</th><th>学年</th></tr>");
    // for (var i = 0; i < read_data.length; i++) {
    //     var url = "http://192.168.0.159/2018grade4/kaihatu_zemi/akaeda/EESystem_S/delete.php";
    //     document.write("<tr><td><a href='input.html?input_name=" + read_data[i].name + "&input_id=" + read_data[i].id + "&input_grade=" + read_data[i].grade + "' class='square_btn'>" + read_data[i].name + "</a>");
    //     document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    //     document.write("<a href='" + url + "?input_id=" + read_data[i].id + "'class='square_btn'>削除</a></td>");
    //     // document.write(" <tr><td>", data_id[i], "</td>");
    //     document.write("<td>" + read_data[i].id + "</td>");
    //     document.write("<td>" + i + "</td></tr>");

    // }
    // document.write("</table>");

    // var $content = $('#read');
    // $content.append("<table id='mytable'><tr><th>氏名</th><th>ID</th><th>学年</th></tr>");
    // for (var i = 0; i < read_data.length; i++) {
    //     var url = "http://192.168.0.159/2018grade4/kaihatu_zemi/akaeda/EESystem_S/delete.php";
    //     $content.append("<tr><td><a href='input.html?input_name=" + read_data[i].name + "&input_id=" + read_data[i].id + "&input_grade=" + read_data[i].grade + "' class='square_btn'>" + read_data[i].name + "</a>");
    //     $content.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    //     $content.append("<a href='" + url + "?input_id=" + read_data[i].id + "'class='square_btn'>削除</a></td>");
    //     // document.write(" <tr><td>", data_id[i], "</td>");
    //     $content.append("<td>" + read_data[i].id + "</td>");
    //     $content.append("<td>" + read_data[i].grade + "</td></tr>");

    // }
    // $content.append("</table>");
    // var ee = $content.get(0);
    // ee.innerHTML = ee.innerHTML;
    var tbody = document.createElement('tbody')
    var th = document.createElement('th')
    th.appendChild(document.createTextNode("氏名"))
    var th1 = document.createElement('th')
    th1.appendChild(document.createTextNode("ID"))
    var th2 = document.createElement('th')
    th2.appendChild(document.createTextNode("学年"))
    var tr = document.createElement('tr')
    tr.appendChild(th)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tbody.appendChild(tr)
    for (var i = 0; i < read_data.length; i++) {
   
	var td = document.createElement('td')
    td.appendChild(document.createTextNode(read_data[i].name))
    // td.innerHTML = "<a href='" + url + "?input_id=" + read_data[i].id + "'class='square_btn'>削除</a>"
    var td1 = document.createElement('td')
    td1.appendChild(document.createTextNode(read_data[i].id))
    var td2 = document.createElement('td')
	td2.appendChild(document.createTextNode(read_data[i].grade))

	var tr = document.createElement('tr')
	// tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(td1)
    tr.appendChild(td2)

    //tbodyが必要
	
    tbody.appendChild(tr)
    }
	var table = document.createElement('table')
	table.appendChild(tbody)
	//bodyに追加
	document.getElementsByTagName('body')[0].appendChild(table)
}

