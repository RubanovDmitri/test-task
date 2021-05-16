$('document').ready(function () {
    let testJson = "data.json"

    loadGoods()
    loadText()

    function loadGoods() {

        $.getJSON(testJson, function (data) {
            let stock = data['stock']

            for (let i = 0; i < stock.length; i++) {
                $('#title').text(stock[i]['title'])
                $('#price').text(stock[i]['price'] + ' ' + 'EUR')
                $('#text').text('model: ' + stock[i]['model'] + ', type: ' + stock[i]['type'] + ', power: ' + stock[i]['power']
                    + ' hp, payload: ' + stock[i]['payload'] + ', gross_weight: ' + stock[i]['gross_weight'])
                $('#configuration').text(stock[i]['axle_configuration'])
                $('#stock-year').text(stock[i]['year'])
                $('#mileage').text(stock[i]['mileage'] + ' km')
                let image = "images/" + stock[i]['image']
                $('#image').attr('src', image)
                $('#card').clone().css('display', 'flex').appendTo('#stock-container')
            }
        })
    }

    function loadText() {
        $.getJSON(testJson, (data) =>{
            let text = data['page_text']
            for (i in text){
                $('#bottom-text').text(text[i]['content']).clone().css('display', 'flex').appendTo('#description-container')
            }
        } )
    }
});

