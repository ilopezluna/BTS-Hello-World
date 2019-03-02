console.log("Hello from js");

createTable(posts);

function createTable(posts) {

    var table = "<table>";

    table = table + buildHeader();

    for (var i = 0; i < posts.length; i++) {

        var row = buildRow(posts[i]);
        table = table + row;
    }

    table = table + "</table>";

    document.getElementById("dynamic-content").innerHTML = table;
}

function buildHeader() {

    return "<tr><td>ID</td><td>User ID</td><td>Title</td></tr>";
}

function buildRow(post) {

    var row = "<tr>";

    row = row + buildColumn(post.id);
    row = row + buildColumn(post.userId);
    row = row + buildColumn(post.title);

    row = row + "</tr>";

    return row;
}

function buildColumn(text) {

    return "<td>" + text + "</td>";
}