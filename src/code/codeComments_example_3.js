//You can update a message IF the current user is the author of the message and the message was delivered
//less than 5 minutes ago OR if the current user is an administrator
// You can also edit the message if the message wasn't delivered yet
const FIVE_MINUTES = 5 * 60;

const isAuthor = message.user.id == current_user.id;
const isRecent =
  message.delivered_time() === null ||
  (datetime.now() - message.delivered_time()).seconds < FIVE_MINUTES;

if ((isAuthor && isRecent) || current_user.type == User.Administrator) {
  message.update_text(text);
}
