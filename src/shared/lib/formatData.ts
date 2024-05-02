function formatData(time: number | string) {
    const date = new Date(Number(time) * 1000);
    return date.toLocaleDateString()
}
export {formatData}