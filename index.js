function towerBuilder(nFloors) {
    let building=[];
    let stars='*';
    let numberOfCharsInLatestRow=nFloors*2-1;
    let starsWithSpace;
    howMuchSpaceNeededToOneSide=(numberOfCharsInLatestRow-stars.length)/2;
    starsWithSpace=" ".repeat(howMuchSpaceNeededToOneSide)+stars+" ".repeat(howMuchSpaceNeededToOneSide);
    building.push(starsWithSpace);
    document.querySelector("#result").innerHTML+=starsWithSpace+"<br>";
    for(let i=2;i<=nFloors;i++){
        let howMuchSpaceNeededToOneSide;
        
        stars+='**';
        howMuchSpaceNeededToOneSide=(numberOfCharsInLatestRow-stars.length)/2;
        starsWithSpace=" ".repeat(howMuchSpaceNeededToOneSide)+stars+" ".repeat(howMuchSpaceNeededToOneSide);
        building.push(starsWithSpace);
        document.querySelector("#result").innerHTML+=starsWithSpace+"<br>";
    }

    document.querySelector("#theResultSorFloor").textContent+=` for ${nFloors} floors:`;
    return building;
  }

  towerBuilder(20);
