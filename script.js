$(function() {
    var divs = $(".skills");
    divs.not("#skill1").hide();
    $("a").click(function() {
        divs.filter(":visible").hide();
        $($(this).attr("href")).show();
        return false;
    });
});
