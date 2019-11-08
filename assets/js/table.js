var tableLine=new Map([
    ["5",{id:"5",name:"AIphone 5",cost:"400",count:"5"}],
    ["2",{id:"2",name:"DXBOX",cost:"300",count:"7"}],
    ["3",{id:"3",name:"CPS",cost:"302",count:"3"}]
]);
let numSort= (a, b)=>a-b;
function strSort(a,b) {
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else return 0
}

$(document).ready(function() {
    tableLine.forEach(function (item) {
        $('.tbody').append(`<tr >\n +
                            <td>${item.id}</td>\n" +
                            <td>${item.name}</td>\n" +
                            <td>${item.cost}</td>\n" +
                            <td>${item.count}</td>\n" +
                            <td id="${item.id}"><button type="button"  class="close" >X</button></td>\n" +
                       </tr>`);
    });

    let trs =$('#table>tbody>tr');
    var k=0;
    $("#id").click(function () {
        let sorted;
        if(k===0) {
            k++;
            $("#id>#idsort").toggleClass("fa-sort fa-sort-up");
         sorted=[...trs].sort((a,b)=>numSort(a.children[0].innerHTML,b.children[0].innerHTML));
        }
        else if(k===1){
            k++;
            $("#id>#idsort").toggleClass("fa-sort-up fa-sort-down");
         sorted=[...trs].sort((a,b)=>numSort(b.children[0].innerHTML,a.children[0].innerHTML));
        }
        else {
            k=0;
            $("#id>#idsort").toggleClass("fa-sort-down fa-sort");
            sorted=[...trs]
        }
        $('.tbody').text('');
        for(let s of sorted)
        {
            $(".tbody").append(s);
        }
    });
    var n=0;

    $("#name").click(function () {
        var sorted;
        if(n===0) {
            n++;
            $("#name>#namesort").toggleClass("fa-sort fa-sort-up");
            sorted=[...trs].sort((a,b)=>strSort(a.children[1].innerHTML,b.children[1].innerHTML));
        }
        else if(n===1){
            n++;
            $("#name>#namesort").toggleClass("fa-sort-up fa-sort-down");
            sorted=[...trs].sort((a,b)=>strSort(b.children[1].innerHTML,a.children[1].innerHTML));
        }
        else {
            n=0;
            $("#name>#namesort").toggleClass("fa-sort-down fa-sort");
            sorted=[...trs]
        }
        $('.tbody').text('');
        for(let s of sorted)
        {
            $(".tbody").append(s);
        }
    });
    var l=0;
    $("#cost").click(function () {
        let sorted;
        if(l===0) {
            l++;
            $("#cost>#costsort").toggleClass("fa-sort fa-sort-up");
            sorted=[...trs].sort((a,b)=>numSort(a.children[2].innerHTML,b.children[2].innerHTML));
        }
        else if(l===1){
            l++;
            $("#cost>#costsort").toggleClass("fa-sort-up fa-sort-down");
            sorted=[...trs].sort((a,b)=>numSort(b.children[2].innerHTML,a.children[2].innerHTML));
        }
        else {
            l=0;
            $("#cost>#costsort").toggleClass("fa-sort-down fa-sort");
            sorted=[...trs]
        }
        $('.tbody').text('');
        for(let s of sorted)
        {
            $(".tbody").append(s);
        }
    });
    var t=0;
    $("#count").click(function () {
        let sorted;
        if(t===0) {
            t++;
            $("#count>#countsort").toggleClass("fa-sort fa-sort-up");
            sorted=[...trs].sort((a,b)=>numSort(a.children[3].innerHTML,b.children[3].innerHTML));
        }
        else if(t===1){
            t++;
            $("#count>#countsort").toggleClass("fa-sort-up fa-sort-down");
            sorted=[...trs].sort((a,b)=>numSort(b.children[3].innerHTML,a.children[3].innerHTML));
        }
        else {
            t=0;
            $("#count>#countsort").toggleClass("fa-sort-down fa-sort");
            sorted=[...trs]
        }
        $('.tbody').text('');
        for(let s of sorted)
        {
            $(".tbody").append(s);
        }
    });
    $("#add").click(function () {
        let dat=$("#dataId");
        let item={
            id:$('#dataId').val(),
            name:$('#dataName').val(),
            cost:$('#dataCost').val(),
            count:$('#dataCount').val()
        };
        tableLine.set(dat.val(),item);
        $(".tbody").append(`<tr >\n +
        <td>${item.id}</td>\n" +
        <td>${item.name}</td>\n" +
        <td>${item.cost}</td>\n" +
        <td>${item.count}</td>\n" +
        <td id="${item.id}"><button type="button"  class="close" >X</button></td>\n" +
        </tr>`);
        dat.val("");
        $("#dataName").val("");
        $("#dataCost").val("");
        $("#dataCount").val("");
        trs =$('#table>tbody>tr');
    });

    $("#close").click(function () {
        $("#dataId").val("");
        $("#dataName").val("");
        $("#dataCost").val("");
        $("#dataCount").val("");
    });

    $('table').delegate('button','click',function(e) {
        let trId=e.currentTarget.parentElement.id;
        $(`#${trId}`).parent().remove();
        tableLine.delete(trId);
        console.log("12">="1");
        console.log("12">="9");
        console.log("10"-"9");
        trs =$('#table>tbody>tr');
    });
});
