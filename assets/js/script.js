"use strict"


function linkedInClickHandler(event) {
    event.preventDefault();

    UIkit.modal.confirm("Are you sure you want to visit LinkedIn profile?").then(
        () => {
            document.location.href = event.currentTarget.href;
        },
    );

}


function copyDataToClipboard(data) {
    var $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val(data).select();
    document.execCommand("copy");
    $tmp.remove();

}


function copyUrlAddresToClipboard() {
    copyDataToClipboard(document.location);
    UIkit.notification("<i class=\"fas fa-check\"></i> URL address copied to clipboard", {status: "success", "pos": "top-center"});
}   


function copyEmailToClipboard() {
    copyDataToClipboard("public_email_vlc@ukr.net");
    UIkit.notification("<i class=\"fas fa-check\"></i> Email copied to clipboard", {status: "success", "pos": "top-center"});
}   


function scrollspy(event) {
    event.preventDefault();

    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    const sections = {
        0: '#particles-js-section',
        1: '#skills',
        2: '#programming-languages-used',
        3: '#top-frameworks-and-libraries',
        4: '#top-projects',
        5: '#download-curriculum-vitae',
    }

    let sectionSize = scrollHeight / 7;
    let sectionIndex = Math.round(window.pageYOffset / sectionSize);

    let liNodeList = $("ul.navigation-tabs > li.uk-active");
    $.each(liNodeList, (index) => {
        $(liNodeList[index]).removeClass("uk-active");
    });

    let linskNodeList = $(`ul.navigation-tabs > li > a[href=\"${sections[sectionIndex]}\"]`);
    $.each(linskNodeList, (index) => {
        $(linskNodeList[index].parentElement).addClass("uk-active");
    });

}


function init() {
    $("#urlLink").on("click", copyUrlAddresToClipboard);
    $("#email").on("click", copyEmailToClipboard);
    $("#linkedInProfile").on("click", linkedInClickHandler);
    $(window).on("scroll", scrollspy);

    $("a[href^=\"#\"]").on("click", function () {
        let href = $(this).attr("href");
        let nodeList = $("ul#aside-dotnav.uk-dotnav > li.uk-active");

        if (href != "#") {
            $("html, body").animate({
                scrollTop: $(href).offset().top - 70
            });

            $.each(nodeList, (index) => {
                $(nodeList[index]).removeClass("uk-active");
            });

            $(this.parentElement).addClass("uk-active");
        }
    });
}


$(document).ready(() => {
    init();
});