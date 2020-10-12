const prompt = require('readline-sync');

const teamEast = 'Miami Heat';
const teamWest = 'Los Angeles Lakers';
const passToTeammate1 = 'Jimmy Butler passes it to Tyler Herro, choose what he does next.';
const passToTeammate2 = 'Lebron James passes it to Anthony Davis, choose what he does next.';
const driveToRim1 = 'Jimmy Butler is driving toward the rim, choose what he does next.';
const driveToRim2 = 'Lebron James is driving toward the rim, choose what he does next.';
const takesShot1 = 'Jimmy Butler jumps to shoot the 3pt shot, choose what he does next.';
const takesShot2 = 'Lebron James jumps to shoot the 3pt shot, choose what he does next.';

prompt.keyInSelect('Welcome to the NBA Finals 2020! Choose which team you will play as: the ${teamEast} or the ${teamWest}.'['Miami Heat',  'Los Angeles Lakers']);

function butlerPassToHerro() {
  let herroRecievesBall = prompt.keyInSelect(['Takes a jump shot', 'Drive it to the rim'], 'Choose what Tyler Herro will do.');
  if (herroRecievesBall === 0) {
      console.log("Tyler Herro shoots and hits the bucket! Heat win the Finals!");
  } else {
      console.log("Tyler Herro drives to the rim, goes for the lay up, but Anthony Davis blocks the ball. Lakers win the finals.")
  }
};

function jamesPassToDavis() {
  let davisRecievesBall = prompt.keyInSelect(['Takes a jump shot', 'Drives to the rim'], 'Choose what Anthony Davis will do.');
  if (davisRecievesBall === 0) {
      console.log('Anthony Davis attempts a 15ft jumpshot, but misses.  Heat win the Finals.')
  } else {
      console.log('Anthony Davis drives to the rim, hits the layup, scores! Lakers win the Finals!')
  }
};

function butlerToRim() {
  let jimmyDriving = prompt.keyInSelect(['Jimmy Butler attempts layup', 'Jimmy Butler attempts 15ft jumpshot'], 'Choose what Jimmy Butler will do.');
  if (jimmyDriving === 0) {
      console.log('Jimmy drives to the rim, he attmepts the layup, but Anthony Davis blocks his shot. Lakers win the finals.');
  } else {
      console.log('Jimmy drives to the rim, crossover and shoots a fadeaway to score.  Heat wins the Finals!')
  }
};

function jamesToRim() {
  let lebronDriving = prompt.keyInSelect(['Lebron James attempts layup', 'Lebron James attempts crossover then shoots'], 'Choose what Lebron James will do.');
  if (lebronDriving === 0) {
      console.log('Lebron James drives it the the rim, in the process, shoves Bam Adebayo, offensive foul called.  Heat take possession and win the Finals.')
  } else {
      console.log('Lebron James performs a crossover, steps back for the fade away shot, he makes it! Lakers win the Finals!')
  }
}

function butlerThreePoint() {
  let jimmyShooting = prompt.keyInSelect(['Jimmy Butler attempts 3 point shot', 'Jimmy fakes shot to pass to Bam Adebayo'], 'Choose what Jimmy Butler will do.');
  if (jimmyShooting === 0) {
      console.log('Jimmy Butler attempts the 3pt shot, and misses.  Lakers win the Finals.');
  } else {
      console.log('Jimmy Butler fakes the shot and passes it to Bam Adebayo! Bam goes for the lay up and scores! Heat win the Finals!')
  }
};

function jamesThreePoint() {
  let lebronShooting = prompt.keyInSelect(['Lebron James attempts 3 point shot', 'Lebron James fakes shot to pass to Anthony Davis'], 'Choose what Lebron James will do.');
  if (lebronShooting === 0) {
      console.log('Lebron James attempts the 3pt shot, and misses.  Lakers win the Finals.');
  } else {
      console.log('Lebron James fakes the shot and passes it to Anthony Davis! Davis goes for the lay up and scores! Lakers win the Finals!')
  }
};
