"use strict";
function checkModifications() {
    $.getJSON("/onchange", () => location.reload(true))
        .fail(() => setTimeout(checkModifications, 750));
}
if (0 && location.hostname === "127.0.0.1")
    checkModifications();
