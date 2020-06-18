const countSheep = (sheep) => {
    if (sheep === 0) {
        return console.log('all sheep jumped over the fence');
    }

    console.log(sheep + ' another sheep jumped over the fence');
    return (countSheep(sheep -1));
}

countSheep(3);
