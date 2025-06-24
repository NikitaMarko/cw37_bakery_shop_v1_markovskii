export const getRandomNumber = (start:number, finish:number) => {
    return Math.trunc(Math.random() * (finish - start) + start);

}