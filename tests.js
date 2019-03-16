//****************************************************************************
// Copyright 2019 Healthy Bytes Technology & Wellness Inc.
//
// Reproduction of Jasmine issue #1661

// ===========================================================================
// Some suites and tests with various nesting levels.
//
describe('level-1', () =>
{
  it('test-1', () => { console.log('+++ Ran test-1'); });

  describe('level-2', () =>
  {
    it('test-2', () => { console.log('+++ Ran test-2'); });

    describe('level-3', () =>
    {
      it('test-3', () => { console.log('+++ Ran test-3'); });
      it('test-4', () => { console.log('+++ Ran test-4'); });
    });

    it('test-5', () => { console.log('+++ Ran test-5'); });
  });

  it('test-6', () => { console.log('+++ Ran test-6'); });
});

//****************************************************************************
