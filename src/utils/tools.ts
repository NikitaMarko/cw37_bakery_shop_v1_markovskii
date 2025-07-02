

export const getRandomNumber = (start:number, finish:number) => {
    return Math.trunc(Math.random()*(finish - start) + start);
}

export const reverseArray = (arr:number[]) =>{
    arr.reverse()
    return arr;
}

export const div = (a:number,b:number) => {
    if(b === 0) throw new Error("Dividing by zero!")
    return a/b;
}

export const echo = (data:string)=> {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(data)
                resolve(data);
            else reject(new Error('Error'))
        }, 1000)
    })
}