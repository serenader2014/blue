/* global moment*/
$('.post-date').each(function () {
    $(this).html('发表于' + moment($(this).html()).format('YYYY/MM/DD'));
});