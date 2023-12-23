# Test Task

## Getting Started

To set up dependencies:
```bash
npm install
```

To start the project:
```bash
npm run dev 
```

## Q&A
### Q: Знайти потенційно вразливі місця з точки зору продуктивності
A: Проблемою може стати процес рендеру дерева папок та файлів у випадку їх великої кількості та вкладенності. Вирішити це може пагінація, або "stream" запит у разі використання серверного рендеренгу.
Також можливо реалізувати пошук за ім'ям через запит до API.

### Q: Розібратися з функціоналом переміщення та видалення папок, файлів.
A: Якщо розглядати приклад моєї структурі даних, то тут дуже просто розробити переміщення та видалення файлів з точки зору алгортиму.
В мене є унікальний ідентифікатор, завдяки котрому можливо легко реалізувати видалення, або переміщення, посилаючиь на певний елемент у массиві за ідентифікатором, використовуючи рекурсію.

```json
{
    "id": "3",
        "type": "folder",
        "name": "Folder with files",
        "accessLevel": 1,
        "nestedItems": [
        {
            "id": "4",
            "type": "file",
            "name": "image",
            "accessLevel": 0,
            "extension": "jpg"
        },
        {
            "id": "7",
            "type": "file",
            "name": "index",
            "accessLevel": 1,
            "extension": "js"
        }
    ]
}
```

Приклад функції видалення:
```js
function deleteItemById(items, idToDelete) {
    if (!items || !items.nestedItems) {
        return;
    }

    for (let i = 0; i < items.nestedItems.length; i++) {
        if (items.nestedItems[i].id === idToDelete) {
            items.nestedItems.splice(i, 1);
            return; 
        }
        
        deleteItemById(items.nestedItems[i], idToDelete);
    }
}
```

Аналогічно переміщення:
```js
function findItemById(item, idToFind) {
    if (item.id === idToFind) {
        return item;
    }

    if (!item.nestedItems) {
        return null;
    }

    for (let nestedItem of items.nestedItems) {
        if (nestedItem.id === idToFind) {
            return nestedItem;
        }

        const foundItem = findItemById(nestedItem, idToFind);
        
        if (foundItem) {
            return foundItem;
        }
    }

    return null;
}


function moveItemById(items, idToMove, newParentId) {
    const itemToMove = findItemById(items, idToMove);
    
    if (!itemToMove || itemToMove.id === items.id) {
        return;
    }

    deleteItemById(items, idToMove);
    
    const newParent = findItemById(items, newParentId);

    
    if (!newParent || !newParent.nestedItems) {
        return;
    }
    
    newParent.nestedItems.push(itemToMove);
}
```