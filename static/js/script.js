
/* Author: Tilo Mitra
*/

YUI().use('node', function (Y) {
    var socket      = io.connect(),
        sender      = Y.one("#sender"),
        receiver    = Y.one("#receiver");

    sender.on('click', function (e) {
        socket.emit('message', 'Message Sent on ' + new Date());
    });

    socket.on('commandRan', function(data){
     receiver.append('<li>' + data.stdout + '</li>');
    });

});
