


function clickHandlerForAsideDotNav(targetElement) {
    const nodeList = $('ul#aside-dotnav.uk-dotnav > li');

    $.each(nodeList, function (index) {
        let element = nodeList[index];

        if ($(element).hasClass("uk-active")) {
            $(element).removeClass("uk-active");
        }
    });
    
    console.log(targetElement)
    $(targetElement.originalTarget.parentElement).addClass("uk-active");
} 


function copyUrlAddresToClipboard() {
    var $tmp = $('<input>');
    $('body').append($tmp);
    $tmp.val(document.location).select();
    document.execCommand('copy');
    $tmp.remove();

    UIkit.notification('<i class="fas fa-check"></i> Url address copied to clipboard!', {status: 'success', 'pos': 'bottom-center'});
}   


$(document).ready(function () {
    const nodeList = $('ul#aside-dotnav.uk-dotnav > li');

    $.each(nodeList, function (index) {
        nodeList[index].addEventListener('click', clickHandlerForAsideDotNav);
    });

    $('#urlLink').click(copyUrlAddresToClipboard)

    $('.bettaRibbon').marquee({
        duration: 7000,
        gap: 150,
        delayBeforeStart: 0,
        startVisible: true,
        duplicated: true
    });

});