using Chat.Models;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Hubs;

public interface IChatClient
{
    public Task RecieveMessage(string userName, string message);
}

public class ChatHub : Hub<IChatClient>
{
    public async Task JointChat(UserConnection connection)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
        await Clients
            .Group(connection.ChatRoom)
            .RecieveMessage("Admin", $"{connection.UserName} присоеденился к чату");
    }
}
