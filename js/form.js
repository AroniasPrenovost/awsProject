$.ajax({
    type: 'POST',
    url: '<API-ENDPOINT-URL>',
    contentType: 'application/json',
    data: JSON.stringify({"name": <name>, "email": <email>, "message": <message>}),
    dataType: 'json',
    success: function (data) {
        // Process success
    },
    error: function (e) {
        // Process error
    },
});

