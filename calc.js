$(function () {
    $('#calc').click(function () {
        const milhas = parseFloat($('#milhas').val())
        const metros = milhas * 1609.34
        $('#metros').val(metros)
    })
})  