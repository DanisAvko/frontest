var tableLine = Array(
    {id: "10", name: "PS3", cost: "30200", count: "3"},
    {id: "5", name: "Iphone 8", cost: "40000", count: "5"},
    {id: "2", name: "XBOX", cost: "3002", count: "7"},
    {id: "3", name: "PS4", cost: "302", count: "31"},
    {id: "100", name: "Iphone 9", cost: "60000", count: "32"},
    {id: "101", name: "G10", cost: "32202", count: "14"},
    {id: "51", name: "MaPhone", cost: "40", count: "522"},
    {id: "21", name: "SEGA", cost: "3001", count: "71"},
    {id: "31", name: "CBS", cost: "12", count: "113"},
    {id: "1001", name: "CPS", cost: "302", count: "300"}
);

function tSort(a, b, index) {
    if (index === "name") {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    } else return b - a;
}

$(document).ready(function () {
    $.each(tableLine,
        function (index, value) {
            $('.tbody').append(`<tr >\n +
                             <td >${value.id}</td>\n" +
                             <td>${value.name}</td>\n" +
                             <td>${value.cost}</td>\n" +
                             <td>${value.count}</td>\n" +
                             <td data-id="${value.id}"><button type="button"  class="close" ><i class="fa fa-times" aria-hidden="true"></i></button></td>\n" +
                           </tr>`);
        }
    );

    var trs = $('#table>tbody>tr');
    $(".sorted").click(function (e) {
        let sorted;
        let currenChildId = e.currentTarget.children[0].id;
        let currentChildClassName = e.currentTarget.children[0].className.split(' ')[1];
        let columnNumber = e.currentTarget.cellIndex;
        let arr = Array($('#idsort'), $('#namesort'), $('#costsort'), $('#countsort'));
        arr.splice(columnNumber, 1);
        $.each(arr, function (index, value) {
            if (value.hasClass("fa-sort-up")) value.toggleClass("fa-sort-up fa-sort");
            if (value.hasClass("fa-sort-down")) value.toggleClass("fa-sort-down fa-sort");
        });
        if (currentChildClassName === "fa-sort") {
            sorted = [...trs].sort((a, b) => tSort(b.children[columnNumber].innerHTML, a.children[columnNumber].innerHTML, e.currentTarget.id));
            $(`#${currenChildId}`).toggleClass("fa-sort fa-sort-up")
        } else if (currentChildClassName === "fa-sort-up") {
            sorted = [...trs].sort((a, b) => tSort(a.children[columnNumber].innerHTML, b.children[columnNumber].innerHTML, e.currentTarget.id));
            $(`#${currenChildId}`).toggleClass("fa-sort-up fa-sort-down")
        } else {
            sorted = [...trs];
            $(`#${currenChildId}`).toggleClass("fa-sort-down fa-sort")
        }

        $('.tbody').text('');
        for (let s of sorted) {
            $(".tbody").append(s);
        }
    });

    $("#add").click(function () {
        let dataId = $("#dataId");
        let dataName = $('#dataName');
        let dataCost = $('#dataCost');
        let dataCount = $('#dataCount');

        function flag() {
            for (let r in tableLine) {
                if (tableLine[r].id === dataId.val()) return true;
            }
        }

        if (dataId.val() === '' || dataName.val() === '' || dataCost.val() === '' || dataCount.val() === '') {
            alert("Введите данные");
        } else if (flag()) {
            alert("Идентификатор уже существует");
        } else {
            let item = {
                id: dataId.val(),
                name: dataName.val(),
                cost: dataCost.val(),
                count: dataCount.val()
            };
            tableLine.push(item);
            $(".tbody").append(`<tr >\n +
        <td>${item.id}</td>\n" +
        <td>${item.name}</td>\n" +
        <td>${item.cost}</td>\n" +
        <td>${item.count}</td>\n" +
        <td data-id="${item.id}"><button type="button"  class="close" ><i class="fa fa-times" aria-hidden="true"></i></button></td>\n" +
        </tr>`);
            dataId.val("");
            $("#dataName").val("");
            $("#dataCost").val("");
            $("#dataCount").val("");
            trs.push($('#table>tbody>tr')[$('#table>tbody>tr').length-1]);
            $("#dataModal").modal('hide');
        }
    });

    $("#close").click(function () {
        $("#dataId").val("");
        $("#dataName").val("");
        $("#dataCost").val("");
        $("#dataCount").val("");
    });

    $('table').delegate('button', 'click', function (e) {
        let trId = $(e.currentTarget.parentElement).attr('data-id');
        $(e.currentTarget.parentElement).parent().remove();
        $.each(tableLine, function (index, value) {
            if (value.id === trId) {
                tableLine.splice(index, 1);
                trs.splice(index,1);
                return false;
            }
        });
    });
});
