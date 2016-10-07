var $:any;
export function isValidCallback(callback) {
    return callback && typeof(callback) == "function";
}

export function setItemValue(item, value) {
    if (!item) {
        return;
    }
    var type = item.type;
    if (item[0] && item[0].type) {
        type = item[0].type;
    }
    if (!type || !this.strContain(type, "select")) {
        $(item).val(value);
        return;
    }
    this.setSelectionValue(item, value);
}

export function setSelectionValue(item, itemValue) {
    if (!itemValue) {
        return;
    }
    if (!itemValue.toLowerCase) {
        $(item).val(itemValue);
        return;
    }
    var filterItem = $(item).find('option').filter(function() {
        var result = this.value.toLowerCase() == itemValue.toLowerCase();
        console.log(result + " result for " + this.value);
        return result;
    });
    console.log("filter value is " + filterItem);
    if (filterItem) {
        filterItem.prop('selected', true);
        return;
    }
    /*if (!filterItem){*/
    $(item).val(itemValue);
    /*return;
    }*/
    /*itemValue = filterItem.val() || filterItem.attr('value');
    $(item).val(itemValue);*/
}

export function jsonStringify(params) {
    if (params && params.event) {
        return null;
    }
    try {
        return JSON.stringify(params)
    } catch (exception) {
        console.error("faile to stringify obj " + exception);
        return null;
    }
}
export function convertToNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function jsonParse(result) {
    if (typeof result == "object") {
        for (var key in result) {
            var member = result[key];
            if (!member || typeof member != "string" || !member[0] || ["{", "["].indexOf(member[0]) < 0) {
                continue;
            }
            result[key] = jsonParse(member);
        }
        return result;
    }
    try {
        if (result && typeof result == "string" && ["{", "["].indexOf(result[0]) >= 0) {
            return JSON.parse(result);
        }
    } catch (Exception) {
        console.log("parser json error: " + result);
        console.trace();
    }
    return result;
}
export function convertToUpper(newVal) {
    if (!newVal) {
        return newVal;
    }
    if (newVal.toUpperCase) {
        return newVal.toUpperCase();
    }
    if (newVal.length && newVal.length > 0) {
        for (var i = 0; i < newVal.length; i++) {
            newVal[i] = this.convertToUpper(newVal[i]);
        }
    }
    return newVal;
}

export function convertToTitalize(str) {
    if (!str) {
        return str;
    }
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function checkArrayIsAllEmpty(array) {
    if (!array) {
        return true;
    }
    var allEmpty = true;
    if (array && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            var elem = array[i];
            if (!elem || Object.keys(elem).length == 0) {
                continue;
            }
            return false;
        }
    }
    return allEmpty;
}
export function refillDropdownOptions(element, options) {
    if (!element || !options) {
        console.error("input is empty for refillDropdownOptions ");
        return;
    }
    options = options.options || options;
    if (options.length == 0) {
        return;
    }
    //$(element).find('option').remove().end();
    var element = $(element).empty();
    for (var i = 0; i < options.length; i++) {
        var o = $('<option/>', { value: options[i].key })
            .text(options[i].value)
            .prop('selected', i == 0);
        o.appendTo($(element));
    }
    element.trigger("chosen:updated");
}
export function normalizeText(input) {
    if (!input || !input.trim) {
        return input;
    }
    input = input.trim().toLocaleLowerCase();
    input = input.replace(/[^0-9a-zA-Z\-_]/g, '');
    return input;
}

export function isDateType(obj) {
    if (!obj) {
        return false;
    }
    return typeof obj.getMonth === 'function';
}

export function normalizeNumber(input, rowType) {
    if (!input) {
        return input;
    }
    // for date columns return date directly.
    if (rowType && (rowType.toLocaleLowerCase()).indexOf('date') > -1) {
        return parseStringDateWithHyphen(input);
    }
    if (!input.trim) {
        return input;
    }
    input = input.trim().toLocaleLowerCase();
    input = input.replace(/[^0-9\.]/g, '');
    return input * 1.0;
}

export function parseDateTime(dateTimeStr) {

    var dateTimeParts = dateTimeStr.split(" ");
    var timeStr = dateTimeParts[1];
    var timeParts = timeStr.split(':');
    var dateParts = dateTimeParts[0].split("-");
    if (dateParts.length != 3 || parseInt(dateParts[2]) < 1900 ||
        parseInt(dateParts[1]) > 12) {
        return null;
    }
    dateParts.reverse();
    var date = new Date(dateParts);
    date.setHours(timeParts[0]);
    date.setMinutes(timeParts[1]);
    return date;
}

export function parseStringDateWithHyphen(dateStr) {
    var date;
    if (dateStr) {
        try {
            var dateArray = dateStr.split('-');
            // todo: fix this hardcode of 20
            var year = dateArray[2].length == 2 ? '20' + dateArray[2] : dateArray[2];
            var month = dateArray[1].length == 1 ? "0" + dateArray[1] : dateArray[1];
            var day = dateArray[0].length == 1 ? '0' + dateArray[0] : dateArray[0];
            dateStr = year + '-' + month + '-' + day;
            date = new Date(dateStr);
            return date;
        } catch (exception) {
            console.error("failed to parse invalid date string " + dateStr);
        }
    }
    date = getDateTime();
    return date;
}

export function getDateDiffInSeconds(newTime, oldTime) {
    // Discard the time and time-zone information.
    if (!newTime || !oldTime || !newTime.getTime || !oldTime.getTime) {
        return null;
    }
    var timeDiff = newTime.getTime() - oldTime.getTime();
    return timeDiff / (1000);
}

export function getDateDiffInMinutes(newTime, oldTime) {
    // Discard the time and time-zone information.
    var secs = getDateDiffInSeconds(newTime, oldTime);
    return secs / 60;
}

export function getDateDiffInDays(newTime, oldTime) {
    if (!newTime || !oldTime || !newTime.getTime() || !oldTime.getTime()) {
        return null;
    }
    var timeDiff = newTime.setHours(0, 0, 0, 0) - oldTime.setHours(0, 0, 0, 0);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

export function strMatch(key, value) {
    if (key === value) {
        return true;
    }
    if (key && key.toUpperCase && value && value.toUpperCase) {
        return key.toUpperCase() == value.toUpperCase();
    }
    return false;
}

export function isNumeric(number) {
    return !isNaN(number);
}

export function endsWith(str, key) {
    if (!str || !key) {
        return false;
    }
    if (str.toUpperCase && key.toUpperCase) {
        return str.toUpperCase().endsWith(key.toUpperCase());
    }
    return false;
}

export function strContain(str, key) {
    if (!str || !key) {
        return false;
    }
    if (str.toUpperCase && key.toUpperCase) {
        return str.toUpperCase().indexOf(key.toUpperCase()) > -1;
    }
    return false;
}

export function dateToStr(d) {
    if (!d) {
        return null;
    }
    if (!this.isDateType(d)) {
        // convert to date type, extent input ccould be string or number
        d = new Date(d);
    }
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
}
// gets datetime in current timezone.
export function getDateTime() {
    var offset = 60000 * 330;
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + offset);
    return nd;
}

export function sortStringAlphabetically(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export function hideModal(id) {
    $('#' + id).modal('hide');
    $('.modal-backdrop').remove();
}

export function normalize(input) {
    if (!input) {
        return input;
    }
    if (typeof input != 'string') {
        return input;
    }
    input = input.trim().toLocaleLowerCase();
    input = input.replace(/[^0-9a-zA-Z\-_]/g, '');
    return input;
}

export function strMatchNormalized(key, value) {
    if (key === value) {
        return true;
    }
    if (key && key.toUpperCase && value && value.toUpperCase) {
        return normalize(key) == normalize(value);
    }
    return false;
}

export function parseInt(input) {
    if (input.replace) {
        input = input.replace(",", "")
    }
    return parseInt(input);
}
/**
 * these are basic checks .. this will need to be expend in future to handle other cases.
 */
export function validateSelector(selector) {
    if (!selector) {
        return false;
    }
    var parts = selector.split(" ");
    var lastPart = parts[parts.length - 1];
    if (lastPart[0] != '.' && lastPart[0] != "#") {
        return false;
    }
    return true;
}

export function getSelectorLastName(selector) {
    if (!selector) {
        return false;
    }
    var parts = selector.split(" ");
    var lastPart = parts[parts.length - 1];
    if (lastPart[0] != '.' && lastPart[0] != "#") {
        return lastPart[0];
    }
    return lastPart.substring(1);
}

export function removeTrailingSlash(site) {
    return site.replace(/\/$/, "");
}

export function getItemByKey(item, key) {
    var parts = key.split(".");
    var obj = item[parts[0]];
    for (var i = 1; obj && i < parts.length; i++) {
        obj = obj[parts[i]];
    }
    return obj;
}

export function indexOf(array, key, item) {
    if (!array || array.length == 0) {
        return -1;
    }
    for (var i = 0; i < array.length; i++) {
        var itemToMatch = void 0;
        if (key && key != "none") {
            itemToMatch = array[i][key];
        } else {
            itemToMatch = array[i];
        }
        if (itemToMatch == item) {
            return i;
        }
    }
    return -1;
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}