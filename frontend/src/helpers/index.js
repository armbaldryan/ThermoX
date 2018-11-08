export const needsToFetch = (item) => {
    if (!item) {
        return true;
    }
    const itemToCheck = typeof item.status === 'number' ? item.status : item;
    return itemToCheck === 0|| itemToCheck === 1;
};