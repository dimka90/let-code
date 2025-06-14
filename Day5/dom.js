const p = {
    name: "Paragraph",
    content: "Computer",
    id: '',
    style: {
        color: "black",
        background_color: "white"
    },
    innerHtml(userInputFiled){
        this.name = userInputFiled
    },
    setId(id) {
        this.id = id
    },
    getElementById() {
        return this.id
    },
    color(colorName){
        this.style.color = colorName
    }

}
console.log("First time name",p.name)
p.innerHtml("Header")
console.log("After change", p.name)
p.setId("home page")
console.log(p.getElementById())

console.log(p.style.color)

p.color("red")
console.log(p.style.color)