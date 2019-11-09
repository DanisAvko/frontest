var tableLine=Array(
    {id:"10",name:"CPS",cost:"302",count:"3"},
    {id:"5",name:"AIphone",cost:"400",count:"5"},
    {id:"2",name:"DXBOX",cost:"300",count:"7"},
    {id:"3",name:"CPS",cost:"302",count:"3"},
    {id:"100",name:"CPS",cost:"302",count:"3"}
);
var numSort= (a, b)=>a-b;
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
    console.log(tableLine);
   $.each(tableLine,
       function (index,value) {
           $('.tbody').append(`<tr >\n +
                             <td >${value.id}</td>\n" +
                             <td>${value.name}</td>\n" +
                             <td>${value.cost}</td>\n" +
                             <td>${value.count}</td>\n" +
                             <td id="${value.id}"><button type="button"  class="close" >x</button></td>\n" +
                           </tr>`);
       }
   );

    let trs =$('#table>tbody>tr');
    var k=0;
    $("#id").click(function () {
        $.each(Array($('#namesort'),$('#costsort'),$('#countsort')),
            function (index,value) {
                if(value.hasClass("fa-sort-up")) value.toggleClass("fa-sort-up fa-sort");
                if(value.hasClass("fa-sort-down")) value.toggleClass("fa-sort-down fa-sort");
            }
        );
        let sorted;
        if(k===0) {
            k++;
            $("#idsort").toggleClass("fa-sort fa-sort-up");
         sorted=[...trs].sort((a,b)=>numSort(a.children[0].innerHTML,b.children[0].innerHTML));
        }
        else if(k===1){
            k++;
            $("#idsort").toggleClass("fa-sort-up fa-sort-down");
         sorted=[...trs].sort((a,b)=>numSort(b.children[0].innerHTML,a.children[0].innerHTML));
        }
        else {
            k=0;
            $("#idsort").toggleClass("fa-sort-down fa-sort");
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
        $.each(Array($('#idsort'),$('#costsort'),$('#countsort')),
            function (index,value) {
                if(value.hasClass("fa-sort-up")) value.toggleClass("fa-sort-up fa-sort");
                if(value.hasClass("fa-sort-down")) value.toggleClass("fa-sort-down fa-sort");
            }
        );
        let sorted;
        if(n===0) {
            n++;
            $("#namesort").toggleClass("fa-sort fa-sort-up");
            sorted=[...trs].sort((a,b)=>strSort(a.children[1].innerHTML,b.children[1].innerHTML));
        }
        else if(n===1){
            n++;
            $("#namesort").toggleClass("fa-sort-up fa-sort-down");
            sorted=[...trs].sort((a,b)=>strSort(b.children[1].innerHTML,a.children[1].innerHTML));
        }
        else {
            n=0;
            $("#namesort").toggleClass("fa-sort-down fa-sort");
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
        $.each(Array($('#idsort'),$('#namesort'),$('#countsort')),
            function (index,value) {
                if(value.hasClass("fa-sort-up")) value.toggleClass("fa-sort-up fa-sort");
                if(value.hasClass("fa-sort-down")) value.toggleClass("fa-sort-down fa-sort");
            }
        );
        let sorted;
        if(l===0) {
            l++;
            $("#costsort").toggleClass("fa-sort fa-sort-up");
            sorted=[...trs].sort((a,b)=>numSort(a.children[2].innerHTML,b.children[2].innerHTML));
        }
        else if(l===1){
            l++;
            $("#costsort").toggleClass("fa-sort-up fa-sort-down");
            sorted=[...trs].sort((a,b)=>numSort(b.children[2].innerHTML,a.children[2].innerHTML));
        }
        else {
            l=0;
            $("#costsort").toggleClass("fa-sort-down fa-sort");
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
        $.each(Array($('#idsort'),$('#namesort'),$('#costsort')),
            function (index,value) {
                if(value.hasClass("fa-sort-up")) value.toggleClass("fa-sort-up fa-sort");
                if(value.hasClass("fa-sort-down")) value.toggleClass("fa-sort-down fa-sort");
            }
        );
        let sorted;
        if(t===0) {
            t++;
            $("#countsort").toggleClass("fa-sort fa-sort-up");
            sorted=[...trs].sort((a,b)=>numSort(a.children[3].innerHTML,b.children[3].innerHTML));
        }
        else if(t===1){
            t++;
            $("#countsort").toggleClass("fa-sort-up fa-sort-down");
            sorted=[...trs].sort((a,b)=>numSort(b.children[3].innerHTML,a.children[3].innerHTML));
        }
        else {
            t=0;
            $("#countsort").toggleClass("fa-sort-down fa-sort");
            sorted=[...trs]
        }
        $('.tbody').text('');
        for(let s of sorted)
        {
            $(".tbody").append(s);
        }
    });
    $("#add").click(function () {
        let dataId=$("#dataId");
       if(dataId.val()===''){
           alert("Введите идентификатор");
       } else if(!isFinite(dataId.val())){
           alert("Идентификатор не число");
       } else if(tableLine.hasOwnProperty(dataId.val())){
           alert("Идентификатор уже существует");
       } else {
        let item={
            id:dataId.val(),
            name:$('#dataName').val(),
            cost:$('#dataCost').val(),
            count:$('#dataCount').val()
        };
        tableLine.push(item);
        $(".tbody").append(`<tr >\n +
        <td>${item.id}</td>\n" +
        <td>${item.name}</td>\n" +
        <td>${item.cost}</td>\n" +
        <td>${item.count}</td>\n" +
        <td id="${item.id}"><button type="button"  class="close" >x</button></td>\n" +
        </tr>`);
        dataId.val("");
        $("#dataName").val("");
        $("#dataCost").val("");
        $("#dataCount").val("");
        trs =$('#table>tbody>tr');
        $("#dataModal").modal('hide');
       }
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
        $.each(tableLine,function (index,value) {
            if(value.id===trId) {
                tableLine.splice(tableLine.indexOf(value),1);
                return false;
            }
        });
        console.log(tableLine);
        trs =$('#table>tbody>tr');
    });
});
