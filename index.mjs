import fetch from "node-fetch"

const url1 = "https://raw.fastgit.org/ngosang/trackerslist/master/trackers_all.txt"
const url2 = "https://raw.fastgit.org/ngosang/trackerslist/master/trackers_all_ip.txt"
const url3 = "https://cdn.staticaly.com/gh/XIU2/TrackersListCollection/master/all.txt"

const p1 = fetch(url1).then(res => res.text())
const p2 = fetch(url2).then(res => res.text())
const p3 = fetch(url3).then(res => res.text())

Promise.all([p1, p2, p3]).then(res => {
    const trackers = new Set()
    for (let ts of res) {
        ts.trim().split("\n\n").forEach(t => trackers.add(t))
    }
    console.log(trackers)
    console.log(trackers.size)
})