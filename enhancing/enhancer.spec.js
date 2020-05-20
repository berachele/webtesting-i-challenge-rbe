const enhancer = require('./enhancer.js');
// test away!


describe('enhancer', () => {
    describe('repair', () => {
        it('should return a new item with durability restored to 100', () => {
            let item = {
                name: "Sarcasm",
                durability: 50,
                enhancement: 20
            }
            expect(enhancer.repair(item)).toBe(100)
        })
    })

    describe('succeed', () => {
        it('Enhancement should increase by 1, Durability should not be changed', () => {
            let item = {
                name: "Sarcasm",
                durability: 50,
                enhancement: 15
            }
            expect(enhancer.succeed(item)).toBe(16)
        })

        it('Enhancement should be unchanged if level is already at 20, Durability should not be changed', () => {
            let item = {
                name: "Sarcasm",
                durability: 50,
                enhancement: 20
            }
            expect(enhancer.succeed(item)).toBe(20)
        })
    })

    describe('fail', () => {
        it('Durability should decrease by 5 if Enhancement is less than 15', () => {
            let item = {
                name: "Sarcasm",
                durability: 50,
                enhancement: 10
            } 
            expect(enhancer.fail(item)).toBe(45)
        })

        it('Durability should decrease by 10 if Enhancement is greater than 15', () => {
            let item = {
                name: "Sarcasm",
                durability: 50,
                enhancement: 20
            }
            expect(enhancer.fail(item)).toBe(40)
        })

        it('Enhancement should decrease by 1 if Enhancement is greater than 16', () => {
            let item = {
                name: "Sarcasm",
                durability: 50,
                enhancement: 18
            }
            expect(enhancer.fail(item)).toBe(17)
            console.log(item)
        })
    })
})
