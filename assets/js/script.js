$(document).ready(() => {
    let navbar_menu = $('#navbar_menu')
    let navbar_items = $('#navbar_items')
    let navbar_items2 = $('#navbar_items_2')
    
    navbar_items.hide()
    navbar_items2.hide()

    navbar_menu.on('click', () => {
        navbar_items.toggle();
        navbar_items2.toggle()
    });
});