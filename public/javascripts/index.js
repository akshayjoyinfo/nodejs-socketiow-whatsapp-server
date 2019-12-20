let socket = io();

socket.on("connect", function() {
  console.log("Connected to Server");
});

document.getElementById("btnChatRooms").addEventListener('click',CreateChatRooms);

function CreateChatRooms(){
  var chatRoomName = document.getElementById("chatroomname").value;
  $(".chat-rooms-group").append(`<li class="list-group-item list-group-item-warning">${chatRoomName}</li>`);
  document.getElementById("chatroomname").value = "";
  console.log(socket);
  socket.emit("chat-rooms-added", {
    channelName: chatRoomName,
    createdAt: new Date(),
    socketId: socket.id,
    channelTextLog:chatRoomName
  });
}