async function allData(){
    const res = await fetch("data.json")
    const data = await res.json()
    return data
}
console.log(allData());