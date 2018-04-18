const regExpShowComplited = /showComplited=(true|false)/;
const regExpStartDate = /startDate=(\d{4}(-\d{2}){2})/;
const regExpEndDate = /endDate=(\d{4}(-\d{2}){2})/;
const regExpTextSearch = /textSearch=(.*)/;



export default (windowHash) => {

    let hash = windowHash.slice(1);
    let filter = {};
    if (regExpShowComplited.test(hash)) {
        filter.showComplited = hash.match(regExpShowComplited)[1] === 'true';
    }
    if (regExpStartDate.test(hash)) {
        filter.startDate = hash.match(regExpStartDate)[1];
    };
    if (regExpEndDate.test(hash)) {
        filter.endDate = hash.match(regExpEndDate)[1];
    };
    if (regExpTextSearch.test(hash)) {
        filter.textSearch = decodeURI(hash.match(regExpTextSearch)[1]);
    };
    return (filter);
}