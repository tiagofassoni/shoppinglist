$(function () {
  // This *should* handle deletion
  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    $(e.target).closest('li').remove();
  });
  
  // This should handle toggling
  $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
    $(e.target).closest('li').toggleClass('shopping-item__checked');
      });
  // $('.shopping-item-toggle').click(function () {
  //   $(this).closest("li").find('.shopping-item').toggleClass('shopping-item__checked')
  // });
  // $('.shopping-item-delete').click(function () {
  //   $(this).closest("li").remove()
  // });
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault()
    let item = $(this).find("#shopping-list-entry").val()
    $('.shopping-list').append(`<li>
     <span class="shopping-item">${item}</span>
     <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
         <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
     </div>
   </li>`);
  });
})

