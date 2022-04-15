export const toggleEditMode = (items, item) => {
    return items.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, editMode: !cartItem.editMode } : cartItem
    )
}

export const changeItem = (items, item) => {
    return items.map(cartItem =>
        cartItem.id === item.id ? { ...item, editMode: !item.editMode,content:item.content } : cartItem
    )
}

export const changeStatus = (items,item)=>{
    return items.map(cartItem=>
        cartItem.id === item.id ? {...item,completed:!item.completed}:cartItem
    )
}

export const getCurrentDate = ()=> {
    return new Date().toISOString().split('T')[0]
}