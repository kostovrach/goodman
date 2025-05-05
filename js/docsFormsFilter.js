document.addEventListener('DOMContentLoaded', function () {
    const tags = document.querySelectorAll('.forms__tag');
    const items = document.querySelectorAll('.forms__item');

    tags.forEach(tag => {
      tag.addEventListener('click', () => {
        const type = tag.getAttribute('data-type');

        // Удаляем класс active у всех кнопок
        tags.forEach(t => t.classList.remove('active'));

        // Добавляем active к текущей
        tag.classList.add('active');

        // Показываем/скрываем элементы в зависимости от фильтра
        items.forEach(item => {
          const itemType = item.getAttribute('data-type');
          if (type === 'all' || itemType === type) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });