const enhancer = require('./enhancer.js');
// test away!


describe('enhancer', () => {
    describe('repair', () => {
        it('should return a new item with durability restored to 100', () => {
    
        })
    })

    describe('succeed', () => {
        it('Enhancement should increase by 1', () => {})
        it('Enhancement should be unchanged if level is already at 20', () => {})
        it('Durability should not be changed', () => {})
    })

    describe('fail', () => {
        it('Durability should decrease by 5 if Enhancement is less than 15', () => {})
        it('Durability should decrease by 10 if Enhancement is greater than 15', () => {})
        it('Enhancement should decrease by 1 if Enhancement is greater than 16', () => {})
    })
})
