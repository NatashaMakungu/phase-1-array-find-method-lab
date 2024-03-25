function superbowlWin(results) {
    const win = results.find(r => r.result === "W");
    return win ? win.year : undefined;
}
