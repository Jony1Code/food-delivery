class GetData{
    constructor(){
        this.data = "data.json"
    }
    
    async allData() {
        const res = await fetch(this.data)
        const data = await res.json()
        return data
    }
}
