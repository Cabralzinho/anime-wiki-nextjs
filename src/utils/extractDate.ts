export const extractDate = (date: string) => {
    const fromDay = date.substring(8, 10);
    const fromMonth = date.substring(5, 7);
    const fromYear = date.substring(0, 4);

    const formattedFromDate = `${fromDay}/${fromMonth}/${fromYear}`;

    return formattedFromDate
}