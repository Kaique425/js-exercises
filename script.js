

const juntaDoisArrays = () => {
    const first_array = ["http//image.com"]
    const second_array = [{posts:"teste"}];

    const farrayAndsarray = second_array.map((post, index) => {
        return console.log({...post ,cover: first_array[index]})
    })
}

console.log(juntaDoisArrays())