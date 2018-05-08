function write_header() {
    var html = "";
    html += '<br>';
    html += '<system_name>';
    html += '入退室管理システム';
    html += '</system_name><br>';
    html += '<a style="margin-left : 540px">';
    html += '<a href="login.html" class="logout_btn">ログアウト</a>';
    html += '</a>';
    html += '<br>';
    html += '<br>';
    html += '<br>';
    html += '<a href="input.html" class="tab_g">登録</a>';
    html += '<a href="comfirm.html" class="tab_g">確認/編集</a>';
    html += '<a href="search.html" class="tab_g">検索</a>';
    html += '<a href="delete.html" class="tab_g">削除</a>';
    html += '<br>';

    document.write(html);

}