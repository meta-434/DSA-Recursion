const iterCountSheep = (sheep) => {
    for (let i = 0; i < sheep; i++) {
        if (i === sheep - 1) {
            console.log('all sheep jumped over the fence');
        } else {
            console.log('another sheep jumped over the fence')
        }
    }
}

iterCountSheep(5);