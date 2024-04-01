import _ from "lodash";

function deepCopy(obj) {
    const copy = _.cloneDeep(obj);
    console.log(copy);
    return copy;
}

export { deepCopy };
