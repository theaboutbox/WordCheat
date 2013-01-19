#=require twl06
#=require angular/controllers/words_controller
#
describe 'WordsCtrl', ->
  it 'Creates a word list', ->
    scope = {}
    ctrl = new WordsCtrl(scope)
    expect(scope.words.length).toBeGreaterThan(100000)

  it 'counts letters', ->
    scope = {}
    ctrl = new WordsCtrl(scope)
    letterCount = scope.letterCountsFor('happy')
    expect(letterCount['H']).toBe(1)
    expect(letterCount['A']).toBe(1)
    expect(letterCount['P']).toBe(2)
    expect(letterCount['Y']).toBe(1)

  it 'finds anagrams', ->
    scope = {}
    ctrl = new WordsCtrl(scope)
    scope.letters = 'ABOY'
    expect(scope.hasLettersFor('YO')).toBe(true)

  it 'returns false if the letters are not there', ->
    scope = {}
    ctrl = new WordsCtrl(scope)
    scope.letters = 'ABOY'
    expect(scope.hasLettersFor('TO')).toBe(false)
