export const convertToOrdinal = (number) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const modulo = number % 100;
    return (
        number + suffixes[(modulo - 20) % 10 || suffixes[modulo] || suffixes[0]]
    );
};
