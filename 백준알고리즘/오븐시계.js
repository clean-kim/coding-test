function solution(arr) {
    const [a, b, c] = [arr[0][0], arr[0][1], arr[1][0]];	// a: 현재시각 시, b: 현재시각 분, c: 요리 시간
    let date = new Date();
    date.setUTCHours(a);
    date.setMinutes(b+c);
    return `${date.getUTCHours()} ${date.getMinutes()}`;
}
