export function fluidTypoize(min, max, minSizeWidth, maxSizeWidth) {
    let slope = (max - min) / (maxSizeWidth - minSizeWidth);
    // y = m(x - h) + k
    return `calc(max(${min}px, min(${slope} * (100vw - ${minSizeWidth}px) + ${min}px, ${max}px)))`
}