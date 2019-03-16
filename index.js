#!/usr/bin/env node
//****************************************************************************
// Copyright 2019 Healthy Bytes Technology & Wellness Inc.
//
// Reproduction of Jasmine issue #1661

// ===========================================================================
// Bare-bones custom reporter that just prints out start/end.
//
class Reporter
{
  constructor()
  {
  }

  jasmineStarted()
  {
    console.log('Jasmine started');
  }

  suiteStarted(info)
  {
    console.log(`Suite started: ${info.fullName}`);
  }

  specStarted(info)
  {
    console.log(`Test started: ${info.fullName}`);
  }

  specDone(info)
  {
    console.log(`Test finished: ${info.fullName}`);
  }
  
  suiteDone(info)
  {
    console.log(`Suite finished: ${info.fullName}`);
  }

  jasmineDone()
  {
    console.log('Jasmine finished');
  }
}

// ===========================================================================
// Configure Jasmine and run the tests.
//
const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({random: false});

jasmine.clearReporters();
jasmine.addReporter(new Reporter());

const filter = 'test-4';
jasmine.execute(['tests.js'], filter);

//****************************************************************************
