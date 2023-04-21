Рейтинг фильмов
===

Необходимо реализовать компонент, отображающий рейтинг фильма в виде звёзд:
![Список фильмов](./src/img/preview.png)


## Описание компонента

Для отображения рейтинга создайте компонент `Stars`, который принимает следующие атрибуты:
- `count` — рейтинг фильма, _число_, по умолчанию `0`.

Если рейтинг меньше `1` или больше `5`, или вообще не число, то компонент не должен иметь какого-либо представления в DOM.

Звёзды рейтинга должны быть представлены тегом `<ul>` с классом `card-body-stars`. Для отображения символа звезды внутри тега `<li>` используйте компонент `Star`.