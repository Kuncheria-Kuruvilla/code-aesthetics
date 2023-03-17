//You can update a message IF the current user is the author of the message and the message was delivered
//less than 5 minutes ago OR if the current user is an administrator
// You can also edit the message if the message wasn't delivered yet
if (
  (message.user.id == current_user.id &&
    (message.delivered_time() === null ||
      (datetime.now() - message.delivered_time()).seconds < 300)) ||
  current_user.type == User.Administrator
) {
  message.update_text(text);
}
