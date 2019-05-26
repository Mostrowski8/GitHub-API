import moment from 'moment';


export const parseValue = (value) => {
    switch (typeof value){
        case "boolean":
            return value.toString();
        case "object":
            var keys = Object.keys( value );
            return  value[keys[0]].toString();
        default:
            return value
    }
}

//converts ISO date to XX days ago string
export const parseFromNow = (ISOdate) => moment(Date.parse(ISOdate)).fromNow();

export const formatISO = (ISOdate, format) => moment(Date.parse(ISOdate)).format(format);;