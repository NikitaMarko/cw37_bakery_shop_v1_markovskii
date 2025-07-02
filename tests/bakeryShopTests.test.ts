import { removeCategory, isCategoryExists, addCategory } from '../src/firebase/firebaseDBService';
import ProductConfig from '../src/configurations/products-config.json'

describe('bakeryShop_allCategoryExists',  () => {
    test('allCategoryExists', async () => {

        const originalCategories:string[] = [];

        for (let i = 0; i < ProductConfig.length; i++) {
            const temp = ProductConfig[i];
            const category = temp.name.split('-')[0];

            if (!originalCategories.includes(category)) {
                originalCategories.push(category);
            }
        }
        const existsArr = await Promise.all(originalCategories.map(category_name => isCategoryExists(category_name)))
        const allExist = existsArr.every(item => item === true);
        expect(allExist).toBe(true);
    })
})

describe('bakeryShop_removeCategory', () => {
    test('removeCategory', async () => {
        const testCategory = 'testingRemoveCategory';
        const ifAlreadyExists = await isCategoryExists(testCategory);
        if (!ifAlreadyExists) {
            await addCategory({category_name: testCategory});
        }
        await removeCategory(testCategory)
        const afterRemove = await isCategoryExists(testCategory);
        expect(afterRemove).toBeFalsy()
    })
})

describe('bakeryShop_addCategory', () => {
    test('addCategory', async () => {
        const testCategory = 'testingAddCategory';

        const beforeExists = await isCategoryExists(testCategory);
        if (beforeExists) {
            await removeCategory(testCategory);
        }
        await addCategory({ category_name: testCategory });
        const afterExists = await isCategoryExists(testCategory);
        expect(afterExists).toBeTruthy();
    });
});