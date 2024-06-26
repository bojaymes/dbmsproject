document.addEventListener("DOMContentLoaded", function () {
    // Sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Modal initialization
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // Modal initialization
    let tmodals = document.querySelectorAll('.tmodal');
    M.Modal.init(tmodals);

    // datepicker initialization
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: { done: "Select" }
    });

    // select initialization
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // collapsible initializataion
    let collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles);
});