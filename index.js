$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userInput = $('#shopping-list-entry').val()
        console.log(userInput)
        if (userInput === "") {
            console.log("Please add Item")
        } else {
            $(".shopping-list").append(
                `
                    <li>
                    <span class="shopping-item">${userInput}</span>
                    <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                        </button>
                    </div>
                    </li>
                `
            )
        }
    });
});

function checkMark() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
}
$(checkMark);


function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    });
}
$(deleteItem);