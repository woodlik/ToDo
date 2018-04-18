export const filterTasks = (tasks, filter) => {

    const {
         showComplited, startDate, endDate, textSearch
    } = filter;


    let filteredTasks = showComplited ? tasks : tasks.filter(item => !item.done);
    filteredTasks = startDate ? filteredTasks.filter(item => item.date >= startDate) : filteredTasks;
    filteredTasks = endDate ? filteredTasks.filter(item => item.date <= endDate) : filteredTasks;
    filteredTasks = textSearch ? filteredTasks.filter(item => (`${item.title} ${item.description}`.toLowerCase().includes(textSearch))) : filteredTasks;

    return filteredTasks;
}