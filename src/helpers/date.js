import { parse, formatISO, parseISO, format } from 'date-fns'
import es from 'date-fns/locale/es'

export function convertToIso(strDate){
    const newDate = parse(strDate, 'dd/MM/yyyy', new Date())
    return formatISO(newDate)
}

export function displayDate(date){
    const newDate = parseISO(date)

    const formarttedDate = format(newDate, 'PPPP', {locale: es})
    return formarttedDate;
}

export function convertToDDMMYYYY(isoDate){
    const newDate = new Date(isoDate)
    const formarttedDate = format(newDate, 'dd/MM/yyyy')
    return formarttedDate
}