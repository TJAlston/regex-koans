describe("Or", function() {

  it('pipe character ( | ) is a regex OR', function() {
    var thisPatternWorks = |;
    var fixThisPattern   = 'hearts';

    expect( 'dog' ).toMatch(thisPatternWorks);
    expect( 'cat' ).toMatch(thisPatternWorks);

    expect( 'hearts' ).toMatch(fixThisPattern);
    expect( 'clubs'  ).toMatch(fixThisPattern);
  });

});
