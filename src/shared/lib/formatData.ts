function formatData(time: Date | number | string) {
    const date = new Date(Number(time) * 1000);
    return date.toLocaleDateString()
}
export {formatData}