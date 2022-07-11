const { palindrome } = require('../utils/for_testing')

test('Palindrome of sebastian', () =>{
    const result = palindrome('sebastian')

    expect(result).toBe('naitsabes')
} );

test('palindrome of empty string', () =>{
    const result = palindrome('')

    expect(result).toBe('')
})
test('palindrome of empty undefined', () =>{
    const result = palindrome()
    expect(result).toBeUndefined()
})