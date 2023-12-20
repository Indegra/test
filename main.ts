const office = {
    tech:{
        countMember:200,
        avgSallary:200000
    },
    disain:{
        countMember:20,
        avgSallary:1200000
    }
}
console.log("Новая ветка")

console.log(Object.entries(office))
let avgSallary = 0
Object.entries(office).forEach(([partName, partInfo]) => {
    avgSallary += partInfo.avgSallary
})

console.log(avgSallary)
