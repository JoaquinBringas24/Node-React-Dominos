export const loadState = () => {
  try {
    const items = localStorage.getItem("items");
    console.log(items);
    if (items === null) {
      return [];
    }
    return [...JSON.parse(items)];
  } catch (error) {
    return [];
  }
};

export const saveState = (state: any) => {
  try {
    let items = JSON.stringify(state.items);
    localStorage.setItem("items", items);
  } catch (error) {
    console.log(error);
  }
};
