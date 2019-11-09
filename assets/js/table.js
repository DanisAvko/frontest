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
    } else if(a<b){
        return -1
    } else return 0
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
    $(".sorted").click(function (e) {
        let sorted;
        let currenChildId=e.currentTarget.children[0].id;
        let currentChildClassName=e.currentTarget.children[0].className.split(' ')[1];
        let columnNumber=[...$('thead tr').children()].indexOf(e.currentTarget);
        console.log(columnNumber);
        let arr=Array($('#idsort'),$('#namesort'),$('#costsort'),$('#countsort'));
        arr.splice(columnNumber,1)
        $.each(arr, function (index,value) {
            if(value.hasClass("fa-sort-up")) value.toggleClass("fa-sort-up fa-sort");
            if(value.hasClass("fa-sort-down")) value.toggleClass("fa-sort-down fa-sort");
        });
        if(e.currentTarget.id==="name"){
            if(currentChildClassName==="fa-sort"){
                sorted=[...trs].sort((a,b)=>strSort(b.children[1].innerHTML,a.children[1].innerHTML));
                $(`#${currenChildId}`).toggleClass("fa-sort fa-sort-up")
            }else if(currentChildClassName==="fa-sort-up"){
                sorted=[...trs].sort((a,b)=>strSort(a.children[1].innerHTML,b.children[1].innerHTML));
                $(`#${currenChildId}`).toggleClass("fa-sort-up fa-sort-down")
            }else{
                sorted=[...trs]
                $(`#${currenChildId}`).toggleClass("fa-sort-down fa-sort")
            }
        }else{
            if(currentChildClassName==="fa-sort"){
                sorted=[...trs].sort((a,b)=>numSort(a.children[columnNumber].innerHTML,b.children[columnNumber].innerHTML));
                $(`#${currenChildId}`).toggleClass("fa-sort fa-sort-up")
            }else if(currentChildClassName==="fa-sort-up"){
                sorted=[...trs].sort((a,b)=>numSort(b.children[columnNumber].innerHTML,a.children[columnNumber].innerHTML));
                $(`#${currenChildId}`).toggleClass("fa-sort-up fa-sort-down")
            }else{
                sorted=[...trs];
                $(`#${currenChildId}`).toggleClass("fa-sort-down fa-sort")
            }
        }
        $('.tbody').text('');
        for(let s of sorted)
        {
            $(".tbody").append(s);
        }
        console.log(e.currentTarget.children[0].className.split(' ')[1]);
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
