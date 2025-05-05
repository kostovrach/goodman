document.addEventListener('DOMContentLoaded', function() {
    const spoilerTitles = document.querySelectorAll('.docs__spoiler-item-title');
    
    spoilerTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            
            const spoilerItem = this.closest('.docs__spoiler-item');
            if (!spoilerItem) return;
            
            const icon = this.querySelector('.docs__spoiler-item-icon');
            const list = spoilerItem.querySelector('.docs__spoiler-list');
            
            // Закрытие спойлеров
            
            // const currentSection = spoilerItem.closest('.docs__section');
            // if (currentSection) {
            //     currentSection.querySelectorAll('.docs__spoiler-item.active').forEach(activeItem => {
            //         if (activeItem !== spoilerItem) {
                        // activeItem.classList.remove('active');
            //             const activeIcon = activeItem.querySelector('.docs__spoiler-item-icon');
            //             const activeList = activeItem.querySelector('.docs__spoiler-list');
            //             if (activeIcon) activeIcon.classList.remove('active');
            //             if (activeList) activeList.classList.remove('active');
            //         }
            //     });
            // }
            
            spoilerItem.classList.toggle('active');
            if (icon) icon.classList.toggle('active');
            if (list) list.classList.toggle('active');
        });
    });
});