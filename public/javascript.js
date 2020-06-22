$(function () {
    $('#calc').click(function () {
        if ($('#rMilhas').prop("checked")) {
            const milhas = parseFloat($('#milhas').val())
            const metros = milhas * 1609.34
            $('#metros').val(metros)
        }
        else {
            const metros = parseFloat($('#metros').val())
            const milhas = metros / 1609.34
            $('#milhas').val(milhas)
        }
    })

    $('#rMilhas').click(function () {
        $('#milhas').removeAttr("readonly")
        $('#milhas').val("")
        $('#metros').val("")
        $('#metros').attr("readonly", "true")

    })

    $('#rMetros').click(function () {
        $('#metros').removeAttr("readonly")
        $('#milhas').val("")
        $('#metros').val("")
        $('#milhas').attr("readonly", "true")

    })
})