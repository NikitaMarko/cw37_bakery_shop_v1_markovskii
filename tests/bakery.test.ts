import {div, echo, getRandomNumber, reverseArray} from "../src/utils/tools";
import {isCategoryExists} from "../src/firebase/firebaseDBService";

describe('BakeryShop.tools', ()=>{

    let arr:number[];

    beforeEach(() =>{
        arr = [1,2,3]
    })

    test('getRandomNumber test', () =>{
        expect(getRandomNumber(1,1)).toBe(1);
        expect(getRandomNumber(1,10)).toBeLessThan(10);
        expect(getRandomNumber(1,10)).not.toBeGreaterThan(10);
        expect(getRandomNumber(9,10)).toBe(9);
    })

    test('reverseArrayMethods', ()=> {
        expect(reverseArray(arr)).toEqual([3,2,1])
    })

    test('Div', () =>{
        expect(div(10,5)).toBe(2)
        expect(div(12,5)).not.toBe(2)
        expect(()=> div(5,0)).toThrow("Dividing by zero!")
    })

    test('AsyncFunction echo', ()=>{
        expect(echo('Hello')).resolves.toBe('Hello');
        expect(()=> echo('')).rejects.toThrow('Error');
    })

    // test('AsyncFunction echo', ()=>{
    //     expect(echo('Hello')).resolves.toBe('Hello');
    //     expect(()=> echo('')).rejects.toThrow('Error');
    // })

})

describe('BakeryShop.dbService', () =>{
    test('isCategoryExists', ()=>{
        expect(isCategoryExists('bread')).resolves.toBeTruthy()
        expect(isCategoryExists('milk')).resolves.not.toBeTruthy()
    })
})

